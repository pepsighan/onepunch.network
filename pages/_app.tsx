import { CssBaseline } from '@mui/material';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="One Punch Network"
        description="A bridge network to transfer tokens between Ethereum and Shardeum."
      />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
