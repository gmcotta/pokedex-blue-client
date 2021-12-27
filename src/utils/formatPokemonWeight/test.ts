import formatPokemonWidth from '.';

describe('formatPokemonWidth', () => {
  it('should return a formatted width', () => {
    const width = 4;
    expect(formatPokemonWidth(width)).toBe('0.4 kg');
  });
});
