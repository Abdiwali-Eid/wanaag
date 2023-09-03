import '@/styles/globals.css';

import { StoreProvider } from '@/utils/Store';

import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="google-site-verification"
        content="yrb_uJ-LQ_JxLLRmEgOW_Dp2cFsCGttQUvX4_QgETJ8"
      />
      <meta
        name="description"
        content="Get all your sports fishing equipment at One Place Fishing. Open Monday to Friday, 9 to 5, in the Great Lake area."
      />
      <meta name="og:title" content="One Place Fishing" />
      <meta name="og:description" content="some description here" />
      <meta
        property="og:image"
        content="https://i.ibb.co/L156pv9/studio-image.jpg"
      />

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WPV2LN75VB"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WPV2LN75VB');
                `}
      </Script>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
