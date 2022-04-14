import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '~/utility/createEmotionCache';
import themes from '~/theme/theme';
import '../styles/globals.css';
import { NextAppProps } from '~/types/NextApp';
import Head from 'next/head';

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
        <ThemeProvider theme={themes.darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
