import { GET_ALL_POKEMON_NAMES } from '@/graphql/queries/allPokemonNames';
import { GET_POKEMON_LIST } from '@/graphql/queries/pokemonList';

export const PokemonListMockPageOne = {
  request: {
    query: GET_POKEMON_LIST,
    variables: {
      page: 1,
      pageSize: 24,
      filters: {},
    },
  },
  result: {
    data: {
      pokemons: {
        data: [
          {
            id: '490',
            attributes: {
              pokemonId: 1,
              name: 'Bulbasaur',
              frontImage: {
                data: {
                  attributes: {
                    url: '/uploads/1_front_Image_1703a51298.png',
                    __typename: 'UploadFile',
                  },
                  __typename: 'UploadFileEntity',
                },
                __typename: 'UploadFileEntityResponse',
              },
              types: {
                data: [
                  {
                    attributes: { name: 'grass', __typename: 'Type' },
                    __typename: 'TypeEntity',
                  },
                  {
                    attributes: { name: 'poison', __typename: 'Type' },
                    __typename: 'TypeEntity',
                  },
                ],
                __typename: 'TypeRelationResponseCollection',
              },
              __typename: 'Pokemon',
            },
            __typename: 'PokemonEntity',
          },
        ],
        meta: {
          pagination: {
            total: 898,
            page: 1,
            pageSize: 24,
            pageCount: 38,
            __typename: 'Pagination',
          },
          __typename: 'ResponseCollectionMeta',
        },
        __typename: 'PokemonEntityResponseCollection',
      },
    },
  },
};

export const PokemonListMockPageTwo = {
  request: {
    query: GET_POKEMON_LIST,
    variables: {
      page: 2,
      pageSize: 24,
      filters: {},
    },
  },
  result: {
    data: {
      pokemons: {
        data: [
          {
            id: '514',
            attributes: {
              pokemonId: 25,
              name: 'Pikachu',
              frontImage: {
                data: {
                  attributes: {
                    url: '/uploads/25_front_Image_4e1f449318.png',
                    __typename: 'UploadFile',
                  },
                  __typename: 'UploadFileEntity',
                },
                __typename: 'UploadFileEntityResponse',
              },
              types: {
                data: [
                  {
                    attributes: { name: 'electric', __typename: 'Type' },
                    __typename: 'TypeEntity',
                  },
                ],
                __typename: 'TypeRelationResponseCollection',
              },
              __typename: 'Pokemon',
            },
            __typename: 'PokemonEntity',
          },
        ],
        meta: {
          pagination: {
            total: 898,
            page: 2,
            pageSize: 24,
            pageCount: 38,
            __typename: 'Pagination',
          },
          __typename: 'ResponseCollectionMeta',
        },
        __typename: 'PokemonEntityResponseCollection',
      },
    },
  },
};

export const AllPokemonNames = {
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

export const PokemonListMockPageOneBugDragon = {
  request: {
    query: GET_POKEMON_LIST,
    variables: {
      page: 1,
      pageSize: 24,
      filters: {
        types: {
          or: [
            {
              name: {
                eq: 'bug',
              },
            },
            {
              name: {
                eq: 'dragon',
              },
            },
          ],
        },
      },
    },
  },
  result: {
    data: {
      pokemons: {
        data: [
          {
            id: '499',
            attributes: {
              pokemonId: 10,
              name: 'Caterpie',
              frontImage: {
                data: {
                  attributes: {
                    url: '/uploads/10_front_Image_7e50e737b3.png',
                    __typename: 'UploadFile',
                  },
                  __typename: 'UploadFileEntity',
                },
                __typename: 'UploadFileEntityResponse',
              },
              types: {
                data: [
                  {
                    attributes: {
                      name: 'bug',
                      __typename: 'Type',
                    },
                    __typename: 'TypeEntity',
                  },
                ],
                __typename: 'TypeRelationResponseCollection',
              },
              __typename: 'Pokemon',
            },
            __typename: 'PokemonEntity',
          },
        ],
        meta: {
          pagination: {
            total: 140,
            page: 1,
            pageSize: 24,
            pageCount: 6,
            __typename: 'Pagination',
          },
          __typename: 'ResponseCollectionMeta',
        },
        __typename: 'PokemonEntityResponseCollection',
      },
    },
  },
};
