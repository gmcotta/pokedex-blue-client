import { QueryHookOptions, useQuery } from '@apollo/client';

import {
  GetPokemonList,
  GetPokemonListVariables,
} from 'graphql/generated/GetPokemonList';
import { GET_POKEMON_LIST } from 'graphql/queries/pokemonList';

export function usePokemonListQuery(
  options: QueryHookOptions<GetPokemonList, GetPokemonListVariables>
) {
  return useQuery<GetPokemonList, GetPokemonListVariables>(
    GET_POKEMON_LIST,
    options
  );
}
