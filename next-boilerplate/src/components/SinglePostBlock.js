import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import Image from "next/image";
import { parse } from "node-html-parser";
import slugify from "slugify";
import AdsList from "../components/AdsList";
import Row from "../containers/RowContainer";

import AdsBoxContainer from "../containers/AdsBoxContainer";
import TOCContainer from "../containers/TOCContainer";

const X = () => (
  <div id={`item-2`} className={`post column-post`}>
    <a href={"/category"} className='media'>
      <div
        className='media'
        style={{ backgroundImage: `url(/posts/post-image.jpg)` }}
      ></div>
    </a>
    <div className='main-post-inner caption'>
      <a href={"category"} alt={"category"} className='post-category author'>
        category
      </a>
      <a href={"/cat"} className='post-link'>
        <h2 className='title'>Here’s What You Need to Know About Medigap</h2>
      </a>
    </div>
  </div>
);

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
}) => {
  const [toggle, setToggle] = useState(false);
  const doc = parse(html);
  const headingsHere = doc.querySelectorAll("h2");
  const pHere = doc.querySelector("p");
  // const supHere = doc.querySelector("sup");

  function handleToggle() {
    return setToggle(!toggle);
  }
  // console.log("headingsHere");
  const reduce = headingsHere?.length >= 4 ? headingsHere?.length - 3 : 2;
  // console.log('doc.querySelectorAll("sup")');
  // console.log(doc.querySelectorAll("sup")[0].childNodes[0].innerText);
  // console.log(html);

  const excerpt = pHere.childNodes[0]._rawText;
  // console.log(pHere.childNodes[0].childNodes[0]._rawText);
  // a function to calculate reading time
  const timeToRead = text => {
    const words = text.split(" ");
    const minutes = Math.floor(words.length / 200);
    return minutes;
  };
  const searchReplace =
    reduce && headingsHere[reduce]?.id
      ? `<h2 id="${headingsHere[reduce]?.id}`
      : null;
  const replacedHtml = searchReplace
    ? html.replace(
        searchReplace,
        `${ReactDOMServer.renderToString(<AdsList promoVisitState={promoVisitState} />)}${searchReplace}`
      )
    : html;

  // useEffect(() => {
  //   window.addEventListener("click", handleUserKeyPress);
  //   return () => {
  //       window.removeEventListener("click", handleUserKeyPress);
  //   };
  // }, [handleUserKeyPress]);

  return (
    <article>
      <div id='rampjs_slot1'></div>
      <div id='rampjs_slot2'></div>
      {/* <AdsBoxContainer dataAdSlot={"2083202812"} /> */}
      <section>
        <div
          className={`main-post ${promoVisitState === true && readMore == false ? "promoVisit" : ""}`}
        >
          <div
            className={`left-column ${promoVisitState === true && readMore === false ? "none" : ""}`}
          >
            <div
              className={`${promoVisitState === true && readMore !== null ? "none" : ""}`}
            >
              <TOCContainer
                tocs={headingsHere}
                // gtag={gtag}
                display={"desktop"}
                toggle={true}
                handleToggle={handleToggle}
              />
            </div>
          </div>

          <div className='container'>
            {promoVisitState === true && readMore == false ? null : (
              <nav className='breadcrumb'>
                <ul>
                  <Link href='/'>
                    <Image
                      src={`/logomark.png`}
                      alt={"Modern Tips search icon"}
                      width={20}
                      height={20}
                    />
                  </Link>
                  <li>
                    <Image
                      src={`/brandimages/right-icon.png`}
                      alt={"Modern Tips search icon"}
                      width={10}
                      height={10}
                      className='search-hold'
                    />
                    <Link href={slugify(category).toLowerCase()}>
                      {category}
                    </Link>
                  </li>
                  <li>
                    <Image
                      src={`/brandimages/right-icon.png`}
                      alt={"Modern Tips search icon"}
                      width={10}
                      height={10}
                      className='search-hold'
                    />
                    <Link href={"/topics/" + slugify(topic).toLowerCase()}>
                      {topic}
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            <h1>{title}</h1>
            <hr className='small-row mobile-only' />

            {promoVisitState === true && readMore == false ? (
              <>
                <p
                  className='excerpt'
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <AdsList promoVisitState={promoVisitState} />
                <a
                  href='#'
                  className='read-more'
                  onClick={() => setReadMore(true)}
                >
                  Read More
                </a>
              </>
            ) : (
              <>
                <Row
                  opt={{
                    numColumns: 2,
                    classes: "post-author-infos mobile-only",
                    isBoxed: true,
                  }}
                >
                  {/* <p className='date'>Published on Feb 2, 2024.</p> */}
                  <time className='post-author-date date' dateTime={date}>
                    {date}
                  </time>
                  <p className='post-author-date read-time'>
                    {timeToRead(doc.text)} minute read
                  </p>
                </Row>

                {/* <nav className='toc-sticky mobile-only'>
                  <button
                    className='toc-toggle'
                    type='button'
                    aria-label='Close Table of Contents'
                    onClick={() => handleToggle()}
                  >
                    <h3>Table of Contents</h3>
                    <span>{toggle ? "X" : "▼"}</span>
                  </button>
                  <div className={`toc-container ${toggle ? "show" : "hide"}`}>
                    <ul className='toc-list'>
                      {Array.from(headingsHere).map((h, indh) => (
                        <li key={indh}>
                          <a href={`#${h.id}`} onClick={() => handleToggle()}>
                            {h.innerText}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav> */}
                <TOCContainer
                  tocs={headingsHere}
                  // gtag={gtag}
                  display={"mobile"}
                  toggle={toggle}
                  handleToggle={handleToggle}
                />
                <Image
                  src={`/posts/${highlightImage}`}
                  alt={title}
                  critical='true'
                  className={"post-highlight-img"}
                  width={560}
                  height={300}
                />
                <AdsList promoVisitState={promoVisitState} />
                <div
                  className='post-article-content'
                  dangerouslySetInnerHTML={{ __html: replacedHtml }}
                ></div>
              </>
            )}
          </div>
          <section
            className={`right-column desktop-only ${promoVisitState === true && readMore === false ? "none" : ""}`}
          >
            <div
              className={`desktop-only ads-right-column ${promoVisitState === true && readMore === false ? "none" : ""}
              ${promoVisitState === false && readMore === false ? "" : "sticky"}
              
              `}
            >
              <h1>ads 1</h1>
              <AdsBoxContainer dataAdSlot={"2083202812"} />
            </div>
            <div
              className={`desktop-only ${promoVisitState === true && readMore !== null ? "none" : ""}`}
            >
              <h2>Related Posts</h2>
              <hr className='small-row' />
              <div className='inner-right-column'>
                <X />
                <X />
                <X />
                <X />
              </div>
            </div>

            <div
              className={`desktop-only ads-right-column second ${promoVisitState === true && readMore === false ? "none" : ""}
              ${promoVisitState === false && readMore === true ? "" : "sticky"}`}
            >
              <h1>ads 2</h1>
            </div>
          </section>
        </div>
        <div
          className={`footer-highlights  ads-bottom-row ${promoVisitState === true && readMore === false ? "none" : ""}
`}
        >
          <h1>ads 3</h1>
        </div>
        <div
          className={`footer-highlights ${promoVisitState === true && readMore !== null ? "none" : ""}`}
        >
          <h2>Explore</h2>
          <hr className='small-row' />
          <div className='inner-footer-highlights'>
            <X />
            <X />
            <X />
            <X />
          </div>
        </div>
      </section>
    </article>
  );
};

export default SinglePostBlock;

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const { frontmatter } = await getArticleFromSlug(slug);
//   const mdxContent = extractHeadings(`/path/to/where/${slug}.mdx`);

//   return {
//     props: {
//       post: {
//         frontmatter,
//         fileContent: mdxContent,
//       },
//     },
//   };
// }
