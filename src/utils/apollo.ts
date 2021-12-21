import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const isOnServer = typeof window === 'undefined';

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache(),
    ssrMode: isOnServer,
  });
}

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = apolloClient ?? createApolloClient();
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }
  if (isOnServer) return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;
  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
