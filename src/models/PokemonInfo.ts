import { PokemonTypes } from './PokemonType';

type PokemonStatus = {
  hp: string | undefined;
  attack: string | undefined;
  defense: string | undefined;
  speed: string | undefined;
  specialAttack: string | undefined;
  specialDefense: string | undefined;
};

type PokemonEvolutionStage = {
  pokemonId: number | undefined;
  name: string | undefined;
  frontImageUrl: string | undefined;
};

export type PokemonInfo = {
  pokemonId: number | undefined;
  name: string | undefined;
  genus: string | undefined;
  description: string | undefined;
  weight: number | undefined;
  height: number | undefined;
  officialImageUrl: string | undefined;
  status: PokemonStatus | undefined;
  pokemonTypes: [PokemonTypes, PokemonTypes?] | undefined;
  evolutionChain: {
    firstStage: PokemonEvolutionStage[] | undefined;
    secondStage: PokemonEvolutionStage[] | undefined;
    thirdStage: PokemonEvolutionStage[] | undefined;
  };
};
