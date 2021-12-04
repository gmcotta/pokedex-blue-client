import formatPokemonName from '.';

describe('formatPokemonName', () => {
  it('should return a formatted pokemon name', () => {
    const id = 1;
    const name = 'Bulbasaur';
    expect(formatPokemonName(id, name)).toBe('#001 - Bulbasaur');
  });
});
