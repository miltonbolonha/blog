import React from "react";

import "@fontsource-variable/inter";
import "../styles/styles.scss";
import Script from "next/script";
import mainInfos from "../configs/main-infos.json";
import { usePathname } from "next/navigation";

function App({ Component, pageProps }) {
  const location = usePathname();
  return (
    <>
      <Script
        strategy='afterInteractive'
        crossOrigin='anonymous'
        src='https://rampjs-cdn.system1.com/ramp.js'
        async
      />
      <Script
        strategy='beforeInteractive'
        id='rampjs'
        async
        crossOrigin='anonymous'
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,r){w[r]=w[r]||function(){(w[r]['q']=w[r]['q']||[]).push(
            arguments)},w[r]['t']=1*new Date})(window,'_rampJs');
            _rampJs({});
        `,
        }}
      />
      <Script
        strategy='afterInteractive'
        async
        crossOrigin='anonymous'
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${mainInfos.business.gaID}`}
      />
      <Script
        id='gtag'
        async
        crossOrigin='anonymous'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${mainInfos.business.gaID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      {/* <Script
        id='rampjs'
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,r){w[r]=w[r]||function(){(w[r]['q']=w[r]['q']||[]).push(
            arguments)},w[r]['t']=1*new Date})(window,'_rampJs');
            _rampJs({ subdomain: "find" });
        `,
        }}
      /> */}

      {location === "/admin/" ? (
        <Script
          async
          strategy='beforeInteractive'
          crossOrigin='anonymous'
          src='https://identity.netlify.com/v1/netlify-identity-widget.js'
        />
      ) : null}
      <Component {...pageProps} />
    </>
  );
}

export default App;
