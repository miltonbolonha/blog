import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <article>
      <section>
        <Row
          opt={{
            isBoxed: false,
            classes: "post-header",
          }}
        >
          <div className='header-post'>
            <Row opt={{ isBoxed: true, classes: "post", alignTo: "center" }}>
              <h1>{title}</h1>
            </Row>
          </div>
        </Row>
        <div className='main-post'>
          {/* <div className='close-btn-single-post'>
            <Link href='/'>X</Link>
            <span>Fechar</span>
          </div> */}
          <div className='container'>
            <Image
              src={`/posts/${highlightImage}`}
              alt={title}
              critical='true'
              className={"post-highlight-img"}
              width={560}
              height={300}
            />
            <div className='post-author'>
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
            </div>
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
