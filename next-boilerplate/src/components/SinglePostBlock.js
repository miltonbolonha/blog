import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { parse } from "node-html-parser";
import slugify from "slugify";
import AdsList from "../components/AdsList";
import Row from "../containers/RowContainer";

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
}) => {
  const [toggle, setToggle] = useState(false);
  const doc = parse(html);
  const headingsHere = doc.querySelectorAll("h2");
  const pHere = doc.querySelector("p");
  function handleToggle() {
    return setToggle(!toggle);
  }
  console.log("date");
  console.log(date);
  // a function to calculate reading time
  const timeToRead = text => {
    const words = text.split(" ");
    const minutes = Math.floor(words.length / 200);
    return minutes;
  };

  return (
    <article>
      <section>
        {/* <Row
          opt={{
            isBoxed: false,
            classes: "post-header",
          }}
        >
          <div className='header-post'>
            <Row opt={{ isBoxed: true, classes: "post", alignTo: "center" }}>
            </Row>
          </div>
        </Row> */}
        <div className='main-post'>
          {/* <div className='close-btn-single-post'>
            <Link href='/'>X</Link>
            <span>Fechar</span>
          </div> */}
          <div className='container'>
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
                  <Link href={slugify(category).toLowerCase()}>{category}</Link>
                </li>
                <li>
                  <Image
                    src={`/brandimages/right-icon.png`}
                    alt={"Modern Tips search icon"}
                    width={10}
                    height={10}
                    className='search-hold'
                  />
                  <Link href={"#"}>Second</Link>
                </li>
              </ul>
            </nav>
            <h1>{title}</h1>
            <hr className='small-row mobile-only' />

            {promoVisitState === true && readMore == false ? (
              <>
                <p className='excerpt'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  officia ipsum, blanditiis ullam obcaecati sit. Distinctio
                  autem, impedit tempore obcaecati nulla consequuntur eveniet
                  praesentium rerum temporibus eligendi. Dicta, tempora aperiam!
                </p>
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
                    Published on {" " + date}
                  </time>
                  <p className='post-author-date read-time'>
                    {timeToRead(doc.text)} minute read
                  </p>
                </Row>

                <nav className='toc-sticky mobile-only'>
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
                </nav>

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
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </>
            )}
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
