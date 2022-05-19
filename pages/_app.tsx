import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '~/utility/createEmotionCache';
import themes from '~/theme/theme';
import '../styles/globals.css';
import { NextAppProps } from '~/types/NextApp';
import Head from 'next/head';
import { AuthContextProvider } from '~/hooks/context/AuthContext';
import Layout from '~/components/global/layout/Layout';
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: NextAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>HangNow</title>
        <meta name="description" content="HangNow - Meet friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={themes.lightTheme}>
            <CssBaseline />
            <AuthContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthContextProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
