import "../styles/globals.css";
import type { AppProps } from "next/app";
import createEmotionCache from "../theme/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { theme } from "../theme/theme";
import { Layout } from "./components/Layout/Presneter";

const clientSideEmotionCache = createEmotionCache();

type MaAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

function MyApp(props: MaAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
