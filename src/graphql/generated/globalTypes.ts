/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface DateTimeFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateTimeFilterInput | null;
  eq?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface EvolutionChainFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (EvolutionChainFiltersInput | null)[] | null;
  or?: (EvolutionChainFiltersInput | null)[] | null;
  not?: EvolutionChainFiltersInput | null;
}

export interface IDFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: IDFilterInput | null;
  eq?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface IntFilterInput {
  and?: (number | null)[] | null;
  or?: (number | null)[] | null;
  not?: IntFilterInput | null;
  eq?: number | null;
  ne?: number | null;
  startsWith?: number | null;
  endsWith?: number | null;
  contains?: number | null;
  notContains?: number | null;
  containsi?: number | null;
  notContainsi?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (number | null)[] | null;
  notIn?: (number | null)[] | null;
  between?: (number | null)[] | null;
}

export interface PokemonFiltersInput {
  id?: IDFilterInput | null;
  pokemonId?: IntFilterInput | null;
  name?: StringFilterInput | null;
  genus?: StringFilterInput | null;
  description?: StringFilterInput | null;
  weight?: IntFilterInput | null;
  height?: IntFilterInput | null;
  types?: TypeFiltersInput | null;
  evolution_chain?: EvolutionChainFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  localizations?: PokemonFiltersInput | null;
  locale?: StringFilterInput | null;
  and?: (PokemonFiltersInput | null)[] | null;
  or?: (PokemonFiltersInput | null)[] | null;
  not?: PokemonFiltersInput | null;
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface TypeFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (TypeFiltersInput | null)[] | null;
  or?: (TypeFiltersInput | null)[] | null;
  not?: TypeFiltersInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
