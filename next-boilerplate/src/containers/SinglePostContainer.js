import React, { useEffect, useState, useRef } from "react";
import ReactDOMServer from "react-dom/server";
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
}) => {
  const [toggle, setToggle] = useState(false);

  const rampJSref = useRef(null);

  const script = `
      <script id="social-annex">
      (function () {
        function sa_async_hello () {
          (function(w,r){w[r]=w[r]||function(){(w[r]['q']=w[r]['q']||[]).push(
            arguments)},w[r]['t']=1*new Date})(window,'_rampJs');
            _rampJs({ segment: "rsoc.moderntips.001" });
        }
        sa_async_hello();
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

  const doc = parseContent;
  const postHeadings =
    doc?.querySelectorAll("h2").length > 0
      ? doc?.querySelectorAll("h2")
      : doc?.querySelectorAll("h3");

  function handleToggle() {
    return setToggle(!toggle);
  }
  const reduce = postHeadings?.length >= 4 ? postHeadings?.length - 3 : 1;
  const timeToRead = text => {
    const words = text.split(" ");
    const minutes = Math.floor(words.length / 200);
    return minutes;
  };
  const searchReplace =
    reduce && postHeadings[reduce]?.id
      ? `<h2 id="${postHeadings[reduce]?.id}`
      : null;
  const replacedHtml = html;
  const promoNOread = promoVisitState === true && readMore === false;
  const promoNEVERread = promoVisitState === true && readMore !== null;
  const noPromoNEVERread = promoVisitState === false && readMore === null;

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
      topic={topic}
      excerpt={excerpt}
      promoNOread={promoNOread}
      promoNEVERread={promoNEVERread}
      noPromoNEVERread={noPromoNEVERread}
      postHeadings={postHeadings}
      handleToggle={handleToggle}
      timeToRead={timeToRead(doc.text)}
      toggle={toggle}
      replacedHtml={replacedHtml}
      relatedPosts={relatedPosts}
      city={city}
      killSEO={killSEO}
      rampJSref={rampJSref}
    />
  );
};

export default SinglePostBlock;
