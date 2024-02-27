import React from "react";

import "@fontsource-variable/inter";
import "../styles/styles.scss";
import Script from "next/script";
import mainInfos from "../configs/main-infos.json";

function App({ Component, pageProps }) {
  return (
    <>
   
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
            _rampJs({testMode: true, subdomain: "develop", requestReferrer: "https://develop.moderntips.com", referrer: "https://develop.moderntips.com", terms: "Test Term 1, Test Term 2, Test Term 3, Test Term 4",
            init: {
            segment: "segment01",
            click_track_url: "https://test.com",
            subid: "1234_test_camp99",
            id: "1234",
            }});
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default App;
