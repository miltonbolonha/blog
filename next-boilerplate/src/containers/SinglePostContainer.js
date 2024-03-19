import React, { useEffect, useState, useRef } from "react";
import SinglePost from "../components/SinglePostBlock";

const SinglePostBlock = ({
  highlightImage,
  authorImg,
  date,
  author,
  html,
  category,
  title,
  promoVisitState,
  setReadMore,
  readMore,
  topic,
  excerpt,
  parseContent,
  relatedPosts,
  city,
  killSEO,
  adsTerms,
  state,
  siteKeywords,
  rampSegment,
}) => {
  const [toggle, setToggle] = useState(false);
  const rampJSref = useRef(null);
  const doc = parseContent;
  const postHeadings =
    doc?.querySelectorAll("h2").length > 0
      ? doc?.querySelectorAll("h2")
      : doc?.querySelectorAll("h3");

  function handleToggle() {
    return setToggle(!toggle);
  }
  const timeToRead = text => {
    const words = text.split(" ");
    const minutes = Math.floor(words.length / 200);
    return minutes;
  };
  // const searchReplace =
  //   reduce && postHeadings[reduce]?.id
  //     ? `<h2 id="${postHeadings[reduce]?.id}`
  //     : null;
  // const replacedHtml = `${ReactDOMServer.renderToString(<div id='rampjs_slot1'></div>)}${html}`;
  const promoNOread = promoVisitState === true && readMore === false;
  const promoNEVERread = promoVisitState === true && readMore !== null;
  const noPromoNEVERread = promoVisitState === false && readMore === null;
  let termsCount = adsTerms.split(",").length <= 5;
  let termsString = [];
  postHeadings.forEach(x =>
    x?.innerText.split(" ").length <= 1
      ? null
      : termsString.push(x?.innerText.replace("Myth: ", " "))
  );
  termsString = termsCount
    ? adsTerms.concat(termsString)
    : adsTerms.concat(siteKeywords);
  termsString =
    termsString.length >= 6
      ? termsString.split(",").slice(0, 5).toString()
      : termsString;
  const newTerms = ` terms: "${termsString}", init: {segment: "${rampSegment}"}`;
  const script = `
        <script id="social-annex">
        (function () {
          function ramjsInt () {
            (function(w,r){w[r]=w[r]||function(){(w[r]['q']=w[r]['q']||[]).push(
              arguments)},w[r]['t']=1*new Date})(window,'_rampJs');
              _rampJs({ terms: "${termsString}", init: {segment: "${rampSegment}"} });
          }
          ramjsInt();
          console.log('ramp init');
      })();
        </script>
    `;
  useEffect(() => {
    if (rampJSref) {
      // creates a document range (grouping of nodes in the document). In this case, we instantiate it as empty, on purpose
      const range = document.createRange();
      // creates a mini-document (lightweight version), in our range with our script in it
      const documentFragment = range.createContextualFragment(script);
      // appends it on the same level of annex div - so that it renders in the correct location
      rampJSref.current?.appendChild(documentFragment);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rampJSref]);

  return (
    <SinglePost
      highlightImage={highlightImage}
      authorImg={authorImg}
      date={date}
      author={author}
      category={category}
      title={title}
      promoVisitState={promoVisitState}
      setReadMore={setReadMore}
      readMore={readMore}
      topic={topic || "General"}
      excerpt={excerpt}
      promoNOread={promoNOread}
      promoNEVERread={promoNEVERread}
      noPromoNEVERread={noPromoNEVERread}
      postHeadings={postHeadings}
      handleToggle={handleToggle}
      timeToRead={timeToRead(doc.text)}
      toggle={toggle}
      replacedHtml={html}
      relatedPosts={relatedPosts}
      city={city}
      state={state}
      killSEO={killSEO}
      rampJSref={rampJSref}
      adsTerms={termsString}
      newTerms={newTerms}
    />
  );
};

export default SinglePostBlock;
