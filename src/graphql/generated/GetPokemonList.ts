/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemonList
// ====================================================

export interface GetPokemonList_pokemons_data_attributes_frontImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetPokemonList_pokemons_data_attributes_frontImage_data {
  __typename: "UploadFileEntity";
  attributes: GetPokemonList_pokemons_data_attributes_frontImage_data_attributes | null;
}

export interface GetPokemonList_pokemons_data_attributes_frontImage {
  __typename: "UploadFileEntityResponse";
  data: GetPokemonList_pokemons_data_attributes_frontImage_data | null;
}

export interface GetPokemonList_pokemons_data_attributes_types_data_attributes {
  __typename: "Type";
  name: string;
}

export interface GetPokemonList_pokemons_data_attributes_types_data {
  __typename: "TypeEntity";
  attributes: GetPokemonList_pokemons_data_attributes_types_data_attributes | null;
}

export interface GetPokemonList_pokemons_data_attributes_types {
  __typename: "TypeRelationResponseCollection";
  data: GetPokemonList_pokemons_data_attributes_types_data[];
}

export interface GetPokemonList_pokemons_data_attributes {
  __typename: "Pokemon";
  pokemonId: number;
  name: string;
  frontImage: GetPokemonList_pokemons_data_attributes_frontImage;
  types: GetPokemonList_pokemons_data_attributes_types | null;
}

export interface GetPokemonList_pokemons_data {
  __typename: "PokemonEntity";
  id: string | null;
  attributes: GetPokemonList_pokemons_data_attributes | null;
}

export interface GetPokemonList_pokemons_meta_pagination {
  __typename: "Pagination";
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface GetPokemonList_pokemons_meta {
  __typename: "ResponseCollectionMeta";
  pagination: GetPokemonList_pokemons_meta_pagination;
}

export interface GetPokemonList_pokemons {
  __typename: "PokemonEntityResponseCollection";
  data: GetPokemonList_pokemons_data[];
  meta: GetPokemonList_pokemons_meta;
}

export interface GetPokemonList {
  pokemons: GetPokemonList_pokemons | null;
}

export interface GetPokemonListVariables {
  page: number;
  pageSize: number;
}
