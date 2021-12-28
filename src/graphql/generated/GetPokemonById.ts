/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemonById
// ====================================================

export interface GetPokemonById_pokemons_data_attributes_officialImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetPokemonById_pokemons_data_attributes_officialImage_data {
  __typename: "UploadFileEntity";
  attributes: GetPokemonById_pokemons_data_attributes_officialImage_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_officialImage {
  __typename: "UploadFileEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_officialImage_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_status {
  __typename: "ComponentPokemonStatus";
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
}

export interface GetPokemonById_pokemons_data_attributes_types_data_attributes {
  __typename: "Type";
  name: string;
}

export interface GetPokemonById_pokemons_data_attributes_types_data {
  __typename: "TypeEntity";
  attributes: GetPokemonById_pokemons_data_attributes_types_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_types {
  __typename: "TypeRelationResponseCollection";
  data: GetPokemonById_pokemons_data_attributes_types_data[];
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_types_data_attributes {
  __typename: "Type";
  name: string;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_types_data {
  __typename: "TypeEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_types_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_types {
  __typename: "TypeRelationResponseCollection";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_types_data[];
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_frontImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_frontImage_data {
  __typename: "UploadFileEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_frontImage_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_frontImage {
  __typename: "UploadFileEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_frontImage_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes {
  __typename: "Pokemon";
  pokemonId: number;
  name: string;
  types: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_types | null;
  frontImage: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes_frontImage;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data {
  __typename: "PokemonEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon {
  __typename: "PokemonEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage {
  __typename: "ComponentPokemonFirstStage";
  pokemon: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage_pokemon | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_types_data_attributes {
  __typename: "Type";
  name: string;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_types_data {
  __typename: "TypeEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_types_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_types {
  __typename: "TypeRelationResponseCollection";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_types_data[];
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_frontImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_frontImage_data {
  __typename: "UploadFileEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_frontImage_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_frontImage {
  __typename: "UploadFileEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_frontImage_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes {
  __typename: "Pokemon";
  pokemonId: number;
  name: string;
  types: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_types | null;
  frontImage: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes_frontImage;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data {
  __typename: "PokemonEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon {
  __typename: "PokemonEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage {
  __typename: "ComponentPokemonFirstStage";
  pokemon: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage_pokemon | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_types_data_attributes {
  __typename: "Type";
  name: string;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_types_data {
  __typename: "TypeEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_types_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_types {
  __typename: "TypeRelationResponseCollection";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_types_data[];
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_frontImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_frontImage_data {
  __typename: "UploadFileEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_frontImage_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_frontImage {
  __typename: "UploadFileEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_frontImage_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes {
  __typename: "Pokemon";
  pokemonId: number;
  name: string;
  types: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_types | null;
  frontImage: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes_frontImage;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data {
  __typename: "PokemonEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon {
  __typename: "PokemonEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon_data | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage {
  __typename: "ComponentPokemonFirstStage";
  pokemon: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage_pokemon | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes {
  __typename: "EvolutionChain";
  fistStage: (GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_fistStage | null)[];
  secondStage: (GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_secondStage | null)[] | null;
  thirdStage: (GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes_thirdStage | null)[] | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain_data {
  __typename: "EvolutionChainEntity";
  attributes: GetPokemonById_pokemons_data_attributes_evolution_chain_data_attributes | null;
}

export interface GetPokemonById_pokemons_data_attributes_evolution_chain {
  __typename: "EvolutionChainEntityResponse";
  data: GetPokemonById_pokemons_data_attributes_evolution_chain_data | null;
}

export interface GetPokemonById_pokemons_data_attributes {
  __typename: "Pokemon";
  pokemonId: number;
  name: string;
  genus: string | null;
  description: string | null;
  weight: number | null;
  height: number | null;
  officialImage: GetPokemonById_pokemons_data_attributes_officialImage;
  status: GetPokemonById_pokemons_data_attributes_status | null;
  types: GetPokemonById_pokemons_data_attributes_types | null;
  evolution_chain: GetPokemonById_pokemons_data_attributes_evolution_chain | null;
}

export interface GetPokemonById_pokemons_data {
  __typename: "PokemonEntity";
  id: string | null;
  attributes: GetPokemonById_pokemons_data_attributes | null;
}

export interface GetPokemonById_pokemons {
  __typename: "PokemonEntityResponseCollection";
  data: GetPokemonById_pokemons_data[];
}

export interface GetPokemonById {
  pokemons: GetPokemonById_pokemons | null;
}

export interface GetPokemonByIdVariables {
  id: number;
}
