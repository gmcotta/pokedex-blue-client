/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPokemonTypes
// ====================================================

export interface GetAllPokemonTypes_types_data_attributes {
  __typename: "Type";
  name: string;
}

export interface GetAllPokemonTypes_types_data {
  __typename: "TypeEntity";
  attributes: GetAllPokemonTypes_types_data_attributes | null;
}

export interface GetAllPokemonTypes_types {
  __typename: "TypeEntityResponseCollection";
  data: GetAllPokemonTypes_types_data[];
}

export interface GetAllPokemonTypes {
  types: GetAllPokemonTypes_types | null;
}
