import formatPokemonHeight from '.';

describe('formatPokemonHeight', () => {
  it('should return a formatted height', () => {
    const height = 4;
    expect(formatPokemonHeight(height)).toBe('0.4 m');
  });
});
