import { QueryHookOptions, useQuery } from '@apollo/client';

import { GetAllPokemonTypes } from '@/graphql/generated/GetAllPokemonTypes';
import { GET_ALL_POKEMON_TYPES } from '@/graphql/queries/allPokemonTypes';

export function useAllPokemonTypes(
  options: QueryHookOptions<GetAllPokemonTypes>
) {
  return useQuery<GetAllPokemonTypes>(GET_ALL_POKEMON_TYPES, options);
}
