import React, { useRef, useState, useEffect } from "react";
import mainConfigs from "../configs/main-infos.json";
const website = mainConfigs?.website;

import AdsList from "../components/AdsList";

const FeedbackContainer = () => {
  return <AdsList />;
};
export default FeedbackContainer;
