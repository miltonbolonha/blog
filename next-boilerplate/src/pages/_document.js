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
          {/* <Script
            async
            strategy='beforeInteractive'
            crossOrigin='anonymous'
            data-ad-client='ca-pub-4309295381222992'
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          /> */}
          <link rel='icon prefetch' href='/favicon.png' sizes='any' />
        </Head>
        <body className='theme-one'>
          <Script
            id='googletagmanager'
            crossOrigin='anonymous'
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${mainInfos.business.gaID}`}
          />
          <Main />
          <NextScript />
          <Script
            id=''
            async
            dangerouslySetInnerHTML={{
              __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", (user) => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
        `,
            }}
          />
          <Script
            strategy='afterInteractive'
            id='rampjs'
            async
            crossOrigin='anonymous'
            onLoad={() => {
              console.log("RamJS started");
            }}
            dangerouslySetInnerHTML={{
              __html: `
            _rampJs({});
        `,
            }}
          />
        </body>
      </Html>
    );
  }
}
