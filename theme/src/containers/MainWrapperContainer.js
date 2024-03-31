import React, { useState, useEffect } from "react";
// import SeoContainer from "./SeoContainer";
import MainWrapper from "../components/MainWrapper";
import mainConfigs from "../configs/main-infos.json";
// import Head from "next/head";

const MainWrapperContainer = ({
  children,
  data,
  killSEO,
  hasMenu,
  scheduleLink,
  gtag,
  gtagCounter,
}) => {
  // const isGithubPages = process.env.IS_GITHUB_PAGE || false;
  // const THEME_FOLDER = isGithubPages ? "/" + process.env.THEME_FOLDER : "";
  const opt = {
    ...mainConfigs,
  };

  return (
    <MainWrapper
      hasHeader={opt.pages.hasHeader}
      killSeo={killSEO}
      hasMenu={hasMenu}
      gtag={gtag}
      scheduleLink={scheduleLink}
      gtagCounter={gtagCounter}
    >
      {children}
    </MainWrapper>
  );
};

export default MainWrapperContainer;
