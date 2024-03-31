import React from "react";

import "@fontsource-variable/inter";
import "../styles/styles.scss";
import Script from "next/script";
import { usePathname } from "next/navigation";
import mainInfos from "../../../theme/settings.json";
function App({ Component, pageProps }) {
  const location = usePathname();
  return (
    <>
      <Script
        strategy='afterInteractive'
        async
        crossOrigin='anonymous'
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
          mainInfos?.business?.gaID || "G-XXXXXXXXXX"
        }`}
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
        
          gtag('config', '${mainInfos?.business?.gaID || "G-XXXXXXXXXX"}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

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
