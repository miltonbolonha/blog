import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import Image from "next/image";
import { parse } from "node-html-parser";
import slugify from "slugify";
// import AdsList from "../components/AdsList";
import Row from "../containers/RowContainer";
import mainConfigs from '../configs/main-infos.json'
// import AdsBoxContainer from "../containers/AdsBoxContainer";
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
        `${ReactDOMServer.renderToString(<div id='rampjs_slot2'></div>)}${searchReplace}`
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
                  <time className='post-author-date date' dateTime={date}>
                    {date}
                  </time>
                  <p className='post-author-date read-time'>
                    {timeToRead(doc.text)} minute read
                  </p>
                </Row>

                <TOCContainer
                  tocs={headingsHere || null}
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
                {/* <Adsense 
                slot={"4246417449"} 
                client={mainConfigs.business.adClient}
                style={{ display:'block' }}
                format="fluid"
                layoutKey="-6t+ed+2i-1n-4w"
              /> */}
                
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
              `}
            >
              <Adsense 
                slot={"2083202812"} 
                client={mainConfigs.business.adClient}
                style={{ display:'block', width: '300px', height: '300px'}}
                format="fluid"
                layout="responsive"
              />
            </div>
            <div className={`desktop-only ${promoNEVERread ? "none" : ""}`}>
              <h2>Related Posts</h2>
              <hr className='small-row' />
              <div className='inner-right-column'>
                {/* <X />
                <X />
                <X />
                <X /> */}
                
              </div>
            </div>

            <div
              className={`desktop-only ads-right-column second ${promoNOread ? "none" : ""}
              ${promoVisitState === false && readMore === true ? "" : "sticky"}`}
            >
              <Adsense 
                slot={"2083202812"} 
                client={mainConfigs.business.adClient}
                style={{ display:'block', width: '300px', height: '300px'}}
                format="fluid"
                layout="responsive"
              />
            </div>
          </section>
        </div>
        <div
          className={`footer-highlights  ads-bottom-row ${promoNOread ? "none" : ""}
`}
        >
          <Adsense 
                slot={"2083202812"} 
                client={mainConfigs.business.adClient}
                style={{ display:'block', width: '750px', height: '90px' }}
                format="fluid"
                layout="responsive"
              />
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
