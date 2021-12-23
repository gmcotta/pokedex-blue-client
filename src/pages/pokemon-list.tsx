import {
  GetPokemonList,
  GetPokemonListVariables,
} from 'graphql/generated/GetPokemonList';
import { GET_POKEMON_LIST } from 'graphql/queries/pokemonList';
import PokemonListTemplate from 'templates/PokemonList';
import { initializeApollo } from 'utils/apollo';

export default function PokemonList() {
  return <PokemonListTemplate />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query<GetPokemonList, GetPokemonListVariables>({
    query: GET_POKEMON_LIST,
    variables: {
      page: 1,
      pageSize: 24,
    },
  });

  return {
    revalidate: 60,
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
