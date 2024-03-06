import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import Image from "next/image";
import { parse } from "node-html-parser";
import slugify from "slugify";
// import AdsList from "../components/AdsList";
import Row from "../containers/RowContainer";
import mainConfigs from "../configs/main-infos.json";
// import AdsBoxContainer from "../containers/AdsBoxContainer";
import TOCContainer from "../containers/TOCContainer";
import { Adsense } from "@ctrl/react-adsense";

const RelatedPostsContainer = ({ slug, image, category, title }) => (
  <div id={`item-2`} className={`post column-post`}>
    <a href={"/" + slug} className='media'>
      <div
        className='media'
        style={{ backgroundImage: `url(/posts/${image})` }}
      ></div>
    </a>
    <div className='main-post-inner caption'>
      <a
        href={"/" + slugify(category).toLowerCase()}
        alt={category}
        className='post-category author'
      >
        {category}
      </a>
      <a href={"/" + slug} className='post-link'>
        <h2 className='title'>{title}</h2>
      </a>
    </div>
  </div>
);

const SinglePostBlock = ({
  highlightImage,
  authorImg,
  date,
  author,
  category,
  title,
  promoVisitState,
  setReadMore,
  readMore,
  topic,
  excerpt,
  promoNOread,
  promoNEVERread,
  noPromoNEVERread,
  postHeadings,
  handleToggle,
  toggle,
  timeToRead,
  replacedHtml,
  relatedPosts,
  city,
  killSEO,
}) => {
  return (
    <article>
      <section>
        <div className={`main-post ${promoNOread ? "promoVisit" : ""}`}>
          <div className={`left-column ${promoNOread ? "none" : ""}`}>
            <div className={`${promoNOread ? "none" : ""}`}>
              <TOCContainer
                tocs={postHeadings}
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
              </>
            ) : null}
            {!killSEO ? <div id='rampjs_slot1'></div> : null}
            {!promoNOread ? (
              <>
                <Row
                  opt={{
                    numColumns: 2,
                    classes: "post-author-infos",
                    isBoxed: true,
                  }}
                >
                  <time className='post-author-date date' dateTime={date}>
                    {date}
                  </time>
                  <p className='post-author-date read-time'>
                    {timeToRead} minute read
                  </p>
                </Row>

                <TOCContainer
                  tocs={postHeadings || null}
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
                format="auto"
                layoutKey="-6t+ed+2i-1n-4w"
              /> */}

                <div
                  className='post-article-content'
                  dangerouslySetInnerHTML={{ __html: replacedHtml }}
                ></div>
              </>
            ) : null}
            {promoNOread ? (
              <a
                href='#'
                className='read-more'
                onClick={() => setReadMore(true)}
              >
                Read More
              </a>
            ) : null}
          </div>
          <section className={`right-column ${promoNOread ? "none" : ""}`}>
            <div
              className={`ads ads-right-column ${promoNOread ? "none" : ""}             
              `}
            >
              {!promoNOread && !killSEO ? (
                <Adsense
                  slot={"2083202812"}
                  client={mainConfigs.business.adClient}
                  style={{ display: "block", width: "300px", height: "300px" }}
                  format='auto'
                  layout='responsive'
                />
              ) : null}
            </div>
            <div
              className={`desktop-only ${promoNOread || relatedPosts.length <= 1 ? "none" : ""}`}
            >
              <h2>Related Posts</h2>
              <hr className='small-row' />
              <div className='inner-right-column'>
                {relatedPosts.map((rp, rind) => {
                  if (rind >= 0 && rind <= 4) {
                    return (
                      <RelatedPostsContainer
                        slug={rp.slug}
                        image={rp.image}
                        category={rp.category}
                        title={rp?.title?.replace(
                          "{{city}}",
                          city || "Los Angeles"
                        )}
                        key={rind}
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div
              className={`ads ads-right-column second ${promoNOread ? "none" : ""}
              ${promoVisitState === false && readMore === true ? "" : "sticky"}`}
            >
              {!promoNOread && !killSEO ? (
                <Adsense
                  slot={"2083202812"}
                  client={mainConfigs.business.adClient}
                  style={{ display: "block", width: "300px", height: "300px" }}
                  format='auto'
                  layout='responsive'
                />
              ) : null}
            </div>
          </section>
        </div>
        <div className='post-footer-wrapper'>
          <div
            className={`ads footer-highlights ads-bottom-row ${promoNOread ? "none" : ""}
`}
          >
            {!promoNOread && !killSEO ? (
              <Adsense
                slot={"2083202812"}
                client={mainConfigs.business.adClient}
                style={{ display: "block", width: "750px", height: "120px" }}
                format='auto'
                layout='responsive'
              />
            ) : null}
          </div>
          <div
            className={`footer-highlights ${promoNOread || relatedPosts.length <= 6 ? "none" : ""}`}
          >
            <h2>Explore</h2>
            <hr className='small-row' />
            <div className='inner-footer-highlights'>
              {relatedPosts.map((rp, rind) => {
                if (rind >= 5 && rind <= 8) {
                  return (
                    <RelatedPostsContainer
                      slug={rp.slug}
                      image={rp.image}
                      category={rp.category}
                      title={rp?.title?.replace(
                        "{{city}}",
                        city || "Los Angeles"
                      )}
                      key={rind}
                    />
                  );
                }
              })}
            </div>
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
