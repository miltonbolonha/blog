import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { parse } from "node-html-parser";

import Row from "../containers/RowContainer";

const SinglePostBlock = ({
  highlightImage,
  authorImg,
  date,
  author,
  html,
  category,
  title,
}) => {
  const [toggle, setToggle] = useState(false);
  const doc = parse(html);
  const headingshere = doc.querySelectorAll("h2");
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
            <h1>{title}</h1>
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

            <nav className='toc toc--sticky mobile-only'>
              <button
                className='toc-toggle'
                type='button'
                aria-label='Close Table of Contents'
                onClick={() => handleToggle()}
              >
                <h3>Table of Content</h3>
                <span>{toggle ? "X" : "▼"}</span>
              </button>
              <div className={`toc-container ${toggle ? "show" : "hide"}`}>
                <ul className='toc-list'>
                  {Array.from(headingshere).map((h, indh) => (
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
            {/* <div className='post-author'>
              <Row opt={{ numColumns: 2, classes: "post-author-infos" }}>
                <div className='inner-post-author-infos'>
                  <Image
                    src={"/brandimages/profile-image.png"}
                    alt={"Profile Image"}
                    critical='true'
                    width={50}
                    height={50}
                    className='profile-image'
                  />
                  <div className='innerauthor-infos'>
                    <p className='post-author-name' rel='author'>
                      {author}
                    </p>
                    <time className='post-author-date' dateTime={date}>
                      {date}
                    </time>
                  </div>
                </div>
              </Row>
            </div> */}
            <ul className='post-ads-ul'>
              <p>See related topics:</p>
              <li>
                <Image
                  src={`/brandimages/search-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
                <a href='#'>Some her thing</a>
                <Image
                  src={`/brandimages/right-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
              </li>
              <li>
                <Image
                  src={`/brandimages/search-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
                <a href='#'>Some her thing</a>
                <Image
                  src={`/brandimages/right-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
              </li>
              <li>
                <Image
                  src={`/brandimages/search-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
                <a href='#'>Some her thing</a>
                <Image
                  src={`/brandimages/right-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
              </li>
              <li>
                <Image
                  src={`/brandimages/search-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
                <a href='#'>Some her thing</a>
                <Image
                  src={`/brandimages/right-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
              </li>
              <li>
                <Image
                  src={`/brandimages/search-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
                <a href='#'>Some her thing</a>
                <Image
                  src={`/brandimages/right-icon.png`}
                  alt={"Modern Tips search icon"}
                  width={20}
                  height={20}
                  className='search-hold'
                />
              </li>
            </ul>
            <div
              className='post-article-content'
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
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
