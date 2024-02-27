import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import mainInfos from "../configs/main-infos.json";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => <App {...props} />,
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
      };
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link
            rel='stylesheet prefetch'
            type='text/css'
            charSet='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet prefetch'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
          <Script
            strategy='beforeInteractive'
            src='https://rampjs-cdn.system1.com/ramp.js'
            onError={e => {
              console.error("Script failed to load", e);
            }}
            crossOrigin='anonymous'
            async
          />

          {/* <Script
            strategy='beforeInteractive'
            crossOrigin='anonymous'
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4309295381222992'
          />
          <Script
            async
            strategy='afterInteractive'
            onError={e => {
              console.error("Script failed to load", e);
            }}
            crossOrigin='anonymous'
            data-ad-client='ca-pub-4309295381222992'
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          /> */}
          <link rel='icon prefetch' href='/favicon.png' sizes='any' />
        </Head>
        <body className='theme-one'>
          <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${mainInfos.business.gaID}`}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
