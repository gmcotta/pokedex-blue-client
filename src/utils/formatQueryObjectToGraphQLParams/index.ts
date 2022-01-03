import { ParsedUrlQuery } from 'querystring';

export function formatQueryObjectToGraphQLParams(queryObj: ParsedUrlQuery) {
  let finalFilter = {};
  if (queryObj.types) {
    const typeFilter = [];
    const typesSelected = (queryObj.types as string).split(',');
    for (const type of typesSelected) {
      typeFilter.push({
        name: {
          eq: type,
        },
      });
    }
    finalFilter = {
      types: {
        or: typeFilter,
      },
    };
  }
  return finalFilter;
}
