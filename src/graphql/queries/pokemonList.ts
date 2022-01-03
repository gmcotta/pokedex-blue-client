import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query GetPokemonList(
    $page: Int!
    $pageSize: Int!
    $filters: PokemonFiltersInput
  ) {
    pokemons(
      sort: "pokemonId:asc"
      pagination: { page: $page, pageSize: $pageSize }
      filters: $filters
    ) {
      data {
        id
        attributes {
          pokemonId
          name
          frontImage {
            data {
              attributes {
                url
              }
            }
          }
          types {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;
