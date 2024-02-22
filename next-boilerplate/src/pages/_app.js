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
        id='adsbygoogle-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: 'ca-pub-4309295381222992',
            enable_page_level_ads: true
       });
          `,
        }}
      /> */}

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
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,r){w[r]=w[r]||function(){(w[r]['q']=w[r]['q']||[]).push(
            arguments)},w[r]['t']=1*new Date})(window,'_rampJs');
            /*_rampJs();*/
        `,
        }}
      />

      {/* <Script
      strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${mainInfos.business.gaID}`}
      />
      <Script
       id="gtag"
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
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default App;

/*
<!-- Google tag (gtag.js) -->
<scriptasyncsrc="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  functiongtag(){dataLayer.push(arguments);}
  gtag('js', newDate());
  gtag('config', 'G-NHVWK8L97D');
</script>









<Script strategy="afterInteractive"src={`https://www.googletagmanager.com/gtag/js?id=${mainInfos.gaId}`}/>

gtag('config', ${mainInfos.gaId}







*/
