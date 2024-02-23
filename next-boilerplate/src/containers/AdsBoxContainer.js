import React, { useEffect } from "react";

const AdsBoxContainer = ({ dataAdSlot }) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <>
      <ins
        // className='adsbygoogle'
        style={{ display: "block", width: "728px", height: "280px" }}
        data-ad-client='ca-pub-4309295381222992'
        // data-ad-host={`ca-host-`}
        data-ad-slot={dataAdSlot}
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    </>
  );
};

export default AdsBoxContainer;
