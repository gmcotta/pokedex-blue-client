import { PokemonTypes } from './PokemonType';

export type PokemonGridItemProps = {
  pokemonId: number;
  imgSrc: string;
  name: string;
  pokemonTypes: [PokemonTypes, PokemonTypes?];
};
