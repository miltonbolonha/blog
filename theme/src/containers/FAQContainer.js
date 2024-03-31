import React, { useState } from "react";
import FAQ from "../components/FAQ";

const FAQContainer = ({ faqs, anchorSlide, gtag }) => {
  const [faqFocus, handleFaqFocus] = useState(null);
  function handleClickFaq(focusN) {
    if (faqFocus === focusN) {
      return handleFaqFocus(null);
    }
    return handleFaqFocus(focusN);
  }

  return (
    <FAQ
      faqs={faqs}
      faqFocus={faqFocus}
      handleClickFaq={handleClickFaq}
      anchorSlide={anchorSlide}
      gtag={gtag}
    />
  );
};
export default FAQContainer;
