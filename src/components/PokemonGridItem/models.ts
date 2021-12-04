export type PokemonTypes =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type PokemonGridItemProps = {
  pokemonId: number;
  imgSrc: string;
  name: string;
  pokemonTypes: [PokemonTypes, PokemonTypes?];
};
