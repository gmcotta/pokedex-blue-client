/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPokemonNames
// ====================================================

export interface GetAllPokemonNames_pokemons_data_attributes {
  __typename: "Pokemon";
  name: string;
  pokemonId: number;
}

export interface GetAllPokemonNames_pokemons_data {
  __typename: "PokemonEntity";
  attributes: GetAllPokemonNames_pokemons_data_attributes | null;
}

export interface GetAllPokemonNames_pokemons {
  __typename: "PokemonEntityResponseCollection";
  data: GetAllPokemonNames_pokemons_data[];
}

export interface GetAllPokemonNames {
  pokemons: GetAllPokemonNames_pokemons | null;
}
