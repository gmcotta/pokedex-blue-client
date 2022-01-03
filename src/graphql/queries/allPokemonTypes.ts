import { gql } from '@apollo/client';

export const GET_ALL_POKEMON_TYPES = gql`
  query GetAllPokemonTypes {
    types(sort: "name", pagination: { pageSize: 20 }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`;
