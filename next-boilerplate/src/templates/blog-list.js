import React, { useState } from "react";

import Post from "../components/Post";

const BlogList = ({ posts, postsToShow }) => {
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  );

  const [count] = useState({
    prev: 0,
    next: 10,
  });
  const [current] = useState(sortedPosts.slice(count.prev, count.next));
  // console.log("current");
  // console.log(current);
  return (
    <>
      {current.map((post, i) => {
        if (i >= postsToShow) {
          return null;
        }
        const x = i + 1;
        return (
          <Post
            key={x}
            number={x}
            slug={post.slug}
            title={post.frontmatter.title}
            image={post.frontmatter.image}
            timeToRead={post.timeToRead}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            category={post.frontmatter.category}
          />
        );
      })}
    </>
  );
};

export default BlogList;
