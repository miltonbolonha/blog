import React, { useState } from "react";
import TOC from "../components/TOC";

const TOCContainer = ({ tocs, gtag, display, toggle, handleToggle }) => {
  if (!tocs) {
    return null
  }
  return (
    <TOC
      tocs={tocs}
      gtag={gtag}
      display={display}
      toggle={toggle}
      handleToggle={handleToggle}
    />
  );
};
export default TOCContainer;
