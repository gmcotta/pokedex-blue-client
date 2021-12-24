import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';
import { useApollo } from '@/utils/apollo';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>PokéDex - Blue Edition</title>
          <meta
            name="description"
            content="A simple PokéDex using ReactJS (Next.js)"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
