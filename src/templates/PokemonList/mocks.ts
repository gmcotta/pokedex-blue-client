import { GET_POKEMON_LIST } from '@/graphql/queries/pokemonList';

export const PokemonListMockPageOne = {
  request: {
    query: GET_POKEMON_LIST,
    variables: {
      page: 1,
      pageSize: 24,
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
