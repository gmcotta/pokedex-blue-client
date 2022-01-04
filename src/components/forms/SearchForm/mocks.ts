import { GET_ALL_POKEMON_NAMES } from '@/graphql/queries/allPokemonNames';

export const AllPokemonNamesMock = {
  request: {
    query: GET_ALL_POKEMON_NAMES,
    variables: {},
  },
  result: {
    data: {
      pokemons: {
        data: [
          {
            attributes: {
              name: 'Bulbasaur',
              pokemonId: 1,
              __typename: 'Pokemon',
            },
            __typename: 'PokemonEntity',
          },
        ],
        __typename: 'PokemonEntityResponseCollection',
      },
    },
  },
};
