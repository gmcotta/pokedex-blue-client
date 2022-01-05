import { GET_ALL_POKEMON_TYPES } from '@/graphql/queries/allPokemonTypes';

export const AllPokemonTypes = {
  request: {
    query: GET_ALL_POKEMON_TYPES,
    variables: {},
  },
  result: {
    data: {
      types: {
        data: [
          {
            attributes: {
              name: 'bug',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'dark',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'dragon',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'electric',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'fairy',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'fighting',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'fire',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'flying',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'ghost',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'grass',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'ground',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'ice',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'normal',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'poison',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'psychic',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'rock',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'steel',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
          {
            attributes: {
              name: 'water',
              __typename: 'Type',
            },
            __typename: 'TypeEntity',
          },
        ],
      },
    },
  },
};
