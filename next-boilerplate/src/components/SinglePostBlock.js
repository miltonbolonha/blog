import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import Image from "next/image";
import { parse } from "node-html-parser";
import slugify from "slugify";
// import AdsList from "../components/AdsList";
import Row from "../containers/RowContainer";
import mainConfigs from '../configs/main-infos.json'
import AdsBoxContainer from "../containers/AdsBoxContainer";
import TOCContainer from "../containers/TOCContainer";
import {Adsense} from '@ctrl/react-adsense';

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
  const headingsHere = doc?.querySelectorAll("h2");
  const pHere = doc?.querySelector("p");
  // const supHere = doc.querySelector("sup");
  function handleToggle() {
    return setToggle(!toggle);
  }
  const reduce = headingsHere?.length >= 4 ? headingsHere?.length - 3 : 2;
  const excerpt = pHere?.childNodes[0]?._rawText;
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
        `${ReactDOMServer.renderToString(<div id='rampjs_slot1'></div>)}${searchReplace}`
      )
    : html;
  const promoNOread = promoVisitState === true && readMore === false;
  const promoNEVERread = promoVisitState === true && readMore !== null;
  const noPromoNEVERread = promoVisitState === false && readMore === null;
  return (
    <article>
      <section>
        <div className={`main-post ${promoNOread ? "promoVisit" : ""}`}>
          <div className={`left-column ${promoNOread ? "none" : ""}`}>
            <div className={`${promoNEVERread ? "none" : ""}`}>
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
            {promoNOread ? null : (
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
                    <Link href={slugify(category || "general").toLowerCase()}>
                      {category || general}
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
                    <span>{topic || "general"}</span>
                  </li>
                </ul>
              </nav>
            )}
            <h1>{title}</h1>
            <hr className='small-row mobile-only' />

            {promoNOread ? (
              <>
                <p
                  className='excerpt'
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <div id='rampjs_slot1'></div>

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
                {/* <AdsList promoVisitState={promoVisitState} /> */}
                <div id='rampjs_slot1'></div>
                <div
                  className='post-article-content'
                  dangerouslySetInnerHTML={{ __html: replacedHtml }}
                ></div>
              </>
            )}
          </div>
          <section
            className={`right-column desktop-only ${promoNOread ? "none" : ""}`}
          >
            <div
              className={`desktop-only ads-right-column ${promoNOread ? "none" : ""}
              ${noPromoNEVERread ? "" : "sticky"}
              
              `}
            >
              <h2>ads 1</h2>
              {/* <Adsense 
                slot={"2083202812"} 
                client={mainConfigs.business.adClient}
                style={{ width: 500, height: 300 }}
                format="responsive"
                layout="auto"
              /> */}
            </div>
            <div className={`desktop-only ${promoNEVERread ? "none" : ""}`}>
              <h2>Related Posts</h2>
              <hr className='small-row' />
              <div className='inner-right-column'>
                {/* <X />
                <X />
                <X />
                <X /> */}
                <h2>Rampjs slot 2</h2>
                <div id='rampjs_slot2'></div>
              </div>
            </div>

            <div
              className={`desktop-only ads-right-column second ${promoNOread ? "none" : ""}
              ${promoVisitState === false && readMore === true ? "" : "sticky"}`}
            >
              <h2>ads 2</h2>
              <AdsBoxContainer dataAdSlot={"2083202812"} />
            </div>
          </section>
        </div>
        <div
          className={`footer-highlights  ads-bottom-row ${promoNOread ? "none" : ""}
`}
        >
          <h2>ads 3</h2>
          {/* <AdsBoxContainer dataAdSlot={"2083202812"} /> */}
        </div>
        <div className={`footer-highlights ${promoNEVERread ? "none" : ""}`}>
          <h2>Explore</h2>
          <hr className='small-row' />
          <div className='inner-footer-highlights'>
            {/* <X />
            <X />
            <X />
            <X /> */}
            <h2>Rampjs slot 2</h2>
            <div id='rampjs_slot2'></div>
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
