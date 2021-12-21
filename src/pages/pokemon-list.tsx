import { PokemonGridItemProps } from 'components/PokemonGridItem/models';
import {
  GetPokemonList,
  GetPokemonListVariables,
} from 'graphql/generated/GetPokemonList';
import { GET_POKEMON_LIST } from 'graphql/queries/pokemonList';
import PokemonListTemplate from 'templates/PokemonList';
import { initializeApollo } from 'utils/apollo';

type PokemonListPageProps = {
  pokemonList: PokemonGridItemProps[];
};

export default function PokemonList(props: PokemonListPageProps) {
  return <PokemonListTemplate pokemonList={props.pokemonList} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    GetPokemonList,
    GetPokemonListVariables
  >({
    query: GET_POKEMON_LIST,
    variables: {
      page: 1,
      pageSize: 24,
    },
  });

  return {
    revalidate: 60,
    props: {
      pokemonList: data.pokemons?.data.map((pokemon) => ({
        pokemonId: pokemon.attributes?.pokemonId,
        name: pokemon.attributes?.name,
        imgSrc: `http://localhost:1337${pokemon.attributes?.frontImage.data?.attributes?.url}`,
        pokemonTypes: pokemon.attributes?.types?.data.map(
          (item) => item.attributes?.name
        ),
      })),
    },
  };
}
