import { QueryHookOptions, useQuery } from '@apollo/client';

import { GetAllPokemonNames } from '@/graphql/generated/GetAllPokemonNames';
import { GET_ALL_POKEMON_NAMES } from '@/graphql/queries/allPokemonNames';

export function useAllPokemonNames(
  options: QueryHookOptions<GetAllPokemonNames>
) {
  return useQuery<GetAllPokemonNames>(GET_ALL_POKEMON_NAMES, options);
}
