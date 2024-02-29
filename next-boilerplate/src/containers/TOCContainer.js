import React, { useState } from "react";
import TOC from "../components/TOC";

const TOCContainer = ({ tocs, gtag, display, toggle, handleToggle }) => {
  if (tocs.length <= 0) {
    return null;
  }
  console.log("tocstocstocs");
  console.log(tocs);
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
