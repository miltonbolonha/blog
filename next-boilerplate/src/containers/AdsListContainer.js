import React, { useRef, useState, useEffect } from "react";
import mainConfigs from "../configs/main-infos.json";
const website = mainConfigs?.website;

import AdsList from "../components/AdsList";

const AdsListContainer = () => {
  return <AdsList />;
};
export default AdsListContainer;
