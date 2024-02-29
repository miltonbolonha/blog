import React, { useState } from "react";
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
}) => {
  const [toggle, setToggle] = useState(false);
  const doc = parseContent;
  const postHeadings =
    doc?.querySelectorAll("h2").length > 0
      ? doc?.querySelectorAll("h2")
      : doc?.querySelectorAll("h3");

  function handleToggle() {
    return setToggle(!toggle);
  }
  const reduce = postHeadings?.length >= 4 ? postHeadings?.length - 3 : 2;
  const timeToRead = text => {
    const words = text.split(" ");
    const minutes = Math.floor(words.length / 200);
    return minutes;
  };
  const searchReplace =
    reduce && postHeadings[reduce]?.id
      ? `<h2 id="${postHeadings[reduce]?.id}`
      : null;
  const replacedHtml = searchReplace
    ? html.replace(
        searchReplace,
        `${ReactDOMServer.renderToString(<div id='rampjs_slot2'></div>)}${searchReplace}`
      )
    : html;
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
    />
  );
};

export default SinglePostBlock;
