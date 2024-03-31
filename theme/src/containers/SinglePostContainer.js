import React, { useEffect, useState, useRef } from "react";
import SinglePost from "../components/SinglePostBlock";
import { useRemarkSync } from "react-remark";

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
  state,
  siteKeywords,
  rampSegment,
}) => {
  const [toggle, setToggle] = useState(false);
  const injectionJSref = useRef(null);
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

  const content = useRemarkSync(doc || "", {
    rehypeReactOptions: {
      components: {
        img: props => {
          const { src, alt } = props;
          return (
            <span className={styles.imgContainer}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes='(min-width: 784px) 784px, 100vw'
              />
            </span>
          );
        },
      },
    },
  });
  // console.log(content);
  // const searchReplace =
  //   reduce && postHeadings[reduce]?.id
  //     ? `<h2 id="${postHeadings[reduce]?.id}`
  //     : null;
  // const replacedHtml = `${ReactDOMServer.renderToString(<div id='rampjs_slot1'></div>)}${html}`;
  const promoNOread = promoVisitState === true && readMore === false;
  const promoNEVERread = promoVisitState === true && readMore !== null;
  const noPromoNEVERread = promoVisitState === false && readMore === null;

  const script = `
        <script id="js-injection">
          console.log('script injection init');
        </script>
    `;
  useEffect(() => {
    if (injectionJSref) {
      // creates a document range (grouping of nodes in the document). In this case, we instantiate it as empty, on purpose
      const range = document.createRange();
      // creates a mini-document (lightweight version), in our range with our script in it
      const documentFragment = range.createContextualFragment(script);
      // appends it on the same level of annex div - so that it renders in the correct location
      injectionJSref.current.appendChild(documentFragment);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [injectionJSref]);

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
      injectionJSref={injectionJSref}
    />
  );
};

export default SinglePostBlock;
