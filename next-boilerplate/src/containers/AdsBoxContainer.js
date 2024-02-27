// 'use client';
// import React, { useEffect } from "react";

// const AdsBoxContainer = ({ dataAdSlot }) => {
//   useEffect(() => {
//     if (window && !window.adsbygoogle) {
//       (window.adsbygoogle || []).push({});
//     }
//   }, []);

//   return (
//     <>
//       <div style={{ display: "block", width: "280px", height: "280px" }}>
//         <ins
//           className={`adsbygoogle-${dataAdSlot}`}
//           style={{ display: "block", width: "280px", height: "280px" }}
//           data-ad-client='ca-pub-4309295381222992'
//           // data-ad-host={`ca-host-`}
//           data-ad-slot={dataAdSlot}
//           data-ad-format='auto'
//           data-full-width-responsive='true'
//         />
//       </div>
//     </>
//   );
// };

// export default AdsBoxContainer;
// // "use client";
// // import React from "react";
// // import { useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { usePathname, useSearchParams } from "next/navigation";
// // import mainConfigs from "../configs/main-infos.json";

// // const AdsBoxContainer = ({ dataAdSlot }) => {
// //   const router = useRouter();

// //   const pathname = usePathname();
// //   const searchParams = useSearchParams();

// //   if (process.env.NODE_ENV == "development") {
// //     return <></>;
// //   }

// //   useEffect(() => {
// //     const url = `${pathname}?${searchParams}`;
// //     console.log("AdsBoxContainer -> router changed ", url);

// //     const scriptElement = document.querySelector(
// //       `script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${mainConfigs.business.adClient}"]`
// //     );

// //     const handleScriptLoad = () => {
// //       try {
// //         if (window.adsbygoogle) {
// //           console.log("pushing ads ");
// //           adsbygoogle.push({});
// //         } else {
// //           scriptElement.addEventListener("load", handleScriptLoad);
// //           console.log(
// //             "waiting until adsense lib is loaded...This prevents adsbygoogle is not defined error"
// //           );
// //         }
// //       } catch (err) {
// //         console.log(
// //           "error in adsense - This prevents ad already exists error",
// //           err
// //         );
// //       }
// //     };

// //     handleScriptLoad();
// //     // Wait for script to load

// //     return () => {
// //       if (scriptElement) {
// //         scriptElement.removeEventListener("load", handleScriptLoad);
// //       }
// //     };
// //   }, [pathname, searchParams]);

// //   return (
// //     <div style={{ overflow: "hidden", margin: "5px" }}>
// //       Google Ad block
// //       <ins
// //         className='adsbygoogle'
// //         style={{ display: "block" }}
// //         data-ad-client={`ca-${mainConfigs.business.adClient}`}
// //         data-ad-slot={dataAdSlot}
// //         data-ad-format='auto'
// //         data-full-width-responsive='true'
// //       ></ins>
// //     </div>
// //   );
// // };

// // export default AdsBoxContainer;
