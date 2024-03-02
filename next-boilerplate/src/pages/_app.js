import React from "react";

import "@fontsource-variable/inter";
import "../styles/styles.scss";
import Script from "next/script";
import mainInfos from "../configs/main-infos.json";

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://rampjs-cdn.system1.com/ramp.js'
        async
      />
      <Script
        strategy='afterInteractive'
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${mainInfos.business.gaID}`}
      />
      <Script
        id='gtag'
        async
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
      <Script
        id='rampjs'
        async
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,r){w[r]=w[r]||function(){(w[r]['q']=w[r]['q']||[]).push(
            arguments)},w[r]['t']=1*new Date})(window,'_rampJs');
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default App;
