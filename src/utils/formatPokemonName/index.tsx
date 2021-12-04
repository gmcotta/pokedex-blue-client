function formatPokemonName(id: number, name: string): string {
  return `#${id.toString().padStart(3, '0')} - ${name}`;
}

export default formatPokemonName;
