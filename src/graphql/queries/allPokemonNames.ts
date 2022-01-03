import { gql } from '@apollo/client';

export const GET_ALL_POKEMON_NAMES = gql`
  query GetAllPokemonNames {
    pokemons(sort: "name", pagination: { pageSize: 900 }) {
      data {
        attributes {
          name
          pokemonId
        }
      }
    }
  }
`;
