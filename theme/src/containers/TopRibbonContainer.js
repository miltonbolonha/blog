import React from "react";
import TopRibbon from "../components/TopRibbon";

const TopRibbonContainer = ({
  text,
  highlight,
  linkHighlight,
  arrow,
  externalLink,
  gtagCounter,
  id,
}) => {
  return (
    <TopRibbon
      text={text}
      highlight={highlight}
      linkHighlight={linkHighlight}
      arrow={arrow}
      externalLink={externalLink}
      gtagCounter={gtagCounter}
      id={id}
    />
  );
};
export default TopRibbonContainer;
