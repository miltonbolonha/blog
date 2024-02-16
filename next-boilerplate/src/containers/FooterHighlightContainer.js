import React from "react";
import FooterHighlight from "../components/FooterHighlight";

const FooterHighlightContainer = ({
  title,
  paragraph,
  blackBtn,
  blackHole,
  cta,
  blackBtnLink,
  blackGtag,
  ctaGtag,
}) => {
  return (
    <FooterHighlight
      title={title || false}
      paragraph={paragraph || false}
      blackBtn={blackBtn || false}
      blackHole={blackHole || false}
      cta={cta || false}
      blackBtnLink={blackBtnLink || "/#explore"}
      blackGtag={blackGtag}
      ctaGtag={ctaGtag}
    />
  );
};
export default FooterHighlightContainer;
