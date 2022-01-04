import { formatQueryObjectToGraphQLParams } from '.';

describe('formatQueryObjectToGraphQLParams', () => {
  it('should return type filter params', () => {
    const queryObj = {
      types: 'bug,grass',
    };
    const result = formatQueryObjectToGraphQLParams(queryObj);
    expect(result).toEqual({
      types: {
        or: [{ name: { eq: 'bug' } }, { name: { eq: 'grass' } }],
      },
    });
  });

  it('should return empty filter', () => {
    const queryObj = {};
    const result = formatQueryObjectToGraphQLParams(queryObj);
    expect(result).toEqual({});
  });
});
