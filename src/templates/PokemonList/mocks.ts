import { GET_POKEMON_LIST } from '@/graphql/queries/pokemonList';

export const MockedProviderMock = [
  {
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
            {
              id: '491',
              attributes: {
                pokemonId: 2,
                name: 'Ivysaur',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/2_front_Image_fa40f22a64.png',
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
            {
              id: '492',
              attributes: {
                pokemonId: 3,
                name: 'Venusaur',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/3_front_Image_84acf9b62b.png',
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
            {
              id: '493',
              attributes: {
                pokemonId: 4,
                name: 'Charmander',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/4_front_Image_338478a0ad.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'fire', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '494',
              attributes: {
                pokemonId: 5,
                name: 'Charmeleon',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/5_front_Image_477a32eee8.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'fire', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '495',
              attributes: {
                pokemonId: 6,
                name: 'Charizard',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/6_front_Image_f2ceb970b9.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'fire', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '496',
              attributes: {
                pokemonId: 7,
                name: 'Squirtle',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/7_front_Image_6a38a81b36.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'water', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '497',
              attributes: {
                pokemonId: 8,
                name: 'Wartortle',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/8_front_Image_5b646edd62.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'water', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '498',
              attributes: {
                pokemonId: 9,
                name: 'Blastoise',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/9_front_Image_e98b7861b7.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'water', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
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
                      attributes: { name: 'bug', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '500',
              attributes: {
                pokemonId: 11,
                name: 'Metapod',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/11_front_Image_b3e5330bf6.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'bug', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '501',
              attributes: {
                pokemonId: 12,
                name: 'Butterfree',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/12_front_Image_5628e1d14a.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'bug', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '502',
              attributes: {
                pokemonId: 13,
                name: 'Weedle',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/13_front_Image_7b75293f32.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'bug', __typename: 'Type' },
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
            {
              id: '503',
              attributes: {
                pokemonId: 14,
                name: 'Kakuna',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/14_front_Image_d654e678af.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'bug', __typename: 'Type' },
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
            {
              id: '504',
              attributes: {
                pokemonId: 15,
                name: 'Beedrill',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/15_front_Image_54db22a1b0.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'bug', __typename: 'Type' },
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
            {
              id: '505',
              attributes: {
                pokemonId: 16,
                name: 'Pidgey',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/16_front_Image_082c23b7bb.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '506',
              attributes: {
                pokemonId: 17,
                name: 'Pidgeotto',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/17_front_Image_d69e5777b2.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '507',
              attributes: {
                pokemonId: 18,
                name: 'Pidgeot',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/18_front_Image_d3aae9ac73.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '508',
              attributes: {
                pokemonId: 19,
                name: 'Rattata',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/19_front_Image_63ecd39835.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '509',
              attributes: {
                pokemonId: 20,
                name: 'Raticate',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/20_front_Image_bf0763fef5.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '510',
              attributes: {
                pokemonId: 21,
                name: 'Spearow',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/21_front_Image_f3009fde2e.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '511',
              attributes: {
                pokemonId: 22,
                name: 'Fearow',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/22_front_Image_7057522fdf.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
                    {
                      attributes: { name: 'flying', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                    {
                      attributes: { name: 'normal', __typename: 'Type' },
                      __typename: 'TypeEntity',
                    },
                  ],
                  __typename: 'TypeRelationResponseCollection',
                },
                __typename: 'Pokemon',
              },
              __typename: 'PokemonEntity',
            },
            {
              id: '512',
              attributes: {
                pokemonId: 23,
                name: 'Ekans',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/23_front_Image_63f2c118ed.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
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
            {
              id: '513',
              attributes: {
                pokemonId: 24,
                name: 'Arbok',
                frontImage: {
                  data: {
                    attributes: {
                      url: '/uploads/24_front_Image_061a8cb941.png',
                      __typename: 'UploadFile',
                    },
                    __typename: 'UploadFileEntity',
                  },
                  __typename: 'UploadFileEntityResponse',
                },
                types: {
                  data: [
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
  },
];
