import React, { useState } from "react";

import Post from "../components/Post";

const BlogList = ({ posts, postsToShow, city, state }) => {
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  );

  const [count] = useState({
    prev: 0,
    next: 10,
  });
  const [current] = useState(sortedPosts.slice(count.prev, count.next));
  return (
    <>
      {current?.map((post, i) => {
        if (i >= postsToShow) {
          return null;
        }
        if (!post?.frontmatter) return null;
        console.log("post?.frontmatter");
        console.log(post?.frontmatter);
        if (
          !post?.frontmatter?.categories &&
          post?.frontmatter?.categories[0] === "Hide"
        ) {
          return null;
        }
        const x = i + 1;
        let title = post?.frontmatter?.title.replace("{{city}}", city);
        title = post?.frontmatter?.title.replace("{{state}}", state);

        return (
          <Post
            key={x}
            number={x}
            slug={post?.slug || "/"}
            title={title}
            image={post?.frontmatter?.image}
            date={post?.frontmatter?.date}
            description={post?.frontmatter?.description}
            category={
              post?.frontmatter?.categories[0] || post?.frontmatter?.categories
            }
          />
        );
      })}
    </>
  );
};

export default BlogList;
