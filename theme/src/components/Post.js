import React from "react";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";

const Post = ({ slug, date, title, description, image, number, category }) => {
  return (
    <div id={`item-${number}`} className={`post highlight-0${number}`}>
      <Link href={slug} passHref className='media'>
        <div
          className='media'
          style={{
            backgroundImage: image.includes("http")
              ? `url(${image})`
              : `url(/posts/${image})`,
          }}
        ></div>
      </Link>
      <div className='main-post-inner caption'>
        <Link
          href={slugify(category).toLowerCase()}
          alt={category}
          passHref
          className='post-category author'
        >
          {category}
        </Link>
        <Link href={slug} passHref className='post-link'>
          <h2 className='title'>{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Post;
