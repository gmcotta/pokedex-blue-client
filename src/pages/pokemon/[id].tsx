import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import {
  GetPokemonList,
  GetPokemonListVariables,
} from '@/graphql/generated/GetPokemonList';
import { GET_POKEMON_LIST } from '@/graphql/queries/pokemonList';
import { GET_POKEMON_BY_ID } from '@/graphql/queries/pokemonById';
import {
  GetPokemonById,
  GetPokemonByIdVariables,
} from '@/graphql/generated/GetPokemonById';
import { PokemonInfo as PokemonInfoProps } from '@/models/PokemonInfo';
import { initializeApollo } from '@/utils/apollo';
import PokemonDetailsTemplate from '@/templates/PokemonDetails';

export default function PokemonInfo(props: PokemonInfoProps) {
  const { isFallback } = useRouter();
  if (isFallback) return <div>Loading...</div>;
  return <PokemonDetailsTemplate details={props} />;
}

const apolloClient = initializeApollo();

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<
    GetPokemonList,
    GetPokemonListVariables
  >({
    query: GET_POKEMON_LIST,
    variables: { page: 1, pageSize: 24 },
  });
  const paths = data.pokemons?.data.map((item) => {
    return {
      params: { id: String(item.attributes?.pokemonId) },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    GetPokemonById,
    GetPokemonByIdVariables
  >({
    query: GET_POKEMON_BY_ID,
    variables: {
      id: Number(params?.id),
    },
  });
  if (data.pokemons?.data.length === 0) {
    return { notFound: true };
  }
  const propsMapped = data.pokemons!.data.map((item) => {
    return {
      pokemonId: item.attributes?.pokemonId,
      name: item.attributes?.name,
      genus: item.attributes?.genus,
      description: item.attributes?.description,
      weight: item.attributes?.weight,
      height: item.attributes?.height,
      officialImageUrl: `http://localhost:1337${item.attributes?.officialImage.data?.attributes?.url}`,
      status: {
        hp: item.attributes?.status?.hp,
        attack: item.attributes?.status?.attack,
        defense: item.attributes?.status?.defense,
        speed: item.attributes?.status?.speed,
        specialAttack: item.attributes?.status?.specialAttack,
        specialDefense: item.attributes?.status?.specialDefense,
      },
      pokemonTypes: item.attributes?.types?.data.map(
        (item) => item.attributes?.name
      ),
      evolutionChain: {
        firstStage:
          item.attributes?.evolution_chain?.data?.attributes?.fistStage.map(
            (stage) => ({
              pokemonId: stage?.pokemon?.data?.attributes?.pokemonId,
              name: stage?.pokemon?.data?.attributes?.name,
              frontImageUrl: `http://localhost:1337${stage?.pokemon?.data?.attributes?.frontImage.data?.attributes?.url}`,
            })
          ),
        secondStage:
          item.attributes?.evolution_chain?.data?.attributes?.secondStage?.map(
            (stage) => ({
              pokemonId: stage?.pokemon?.data?.attributes?.pokemonId,
              name: stage?.pokemon?.data?.attributes?.name,
              frontImageUrl: `http://localhost:1337${stage?.pokemon?.data?.attributes?.frontImage.data?.attributes?.url}`,
            })
          ),
        thirdStage:
          item.attributes?.evolution_chain?.data?.attributes?.thirdStage?.map(
            (stage) => ({
              pokemonId: stage?.pokemon?.data?.attributes?.pokemonId,
              name: stage?.pokemon?.data?.attributes?.name,
              frontImageUrl: `http://localhost:1337${stage?.pokemon?.data?.attributes?.frontImage.data?.attributes?.url}`,
            })
          ),
      },
    };
  });
  const props = propsMapped[0];
  return {
    props: props,
  };
};
