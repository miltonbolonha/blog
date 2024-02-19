import React from "react";
import Link from "next/link";
import Image from "next/image";

const Post = ({ slug, date, title, description, image, number, category }) => {
  return (
    <div id={`item-${number}`} className={`post highlight-0${number}`}>
      <div
        className='media'
        style={{ backgroundImage: `url(/posts/${image})` }}
      ></div>
      {/* <Link href={slug} passHref className='post-link'>
        <Image
          src={`/posts/${image}`}
          alt={title}
          width={280}
          height={150}
          unoptimized
        />
      </Link> */}

      <div className='main-post-inner caption'>
        <Link href={"/cat"} passHref className='post-category author'>
          {category}
        </Link>
        <Link href={slug} passHref className='post-link'>
          <h1 className='title'>{title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default Post;
