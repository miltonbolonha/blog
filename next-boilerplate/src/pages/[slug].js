import React from "react";
import BlogPost from "../templates/blog-post";
import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import slugify from "slugify";

import _ from "lodash";

const Post = mdFile => {
  return <BlogPost post={mdFile} />;
};

export default Post;

export const getStaticProps = async context => {
  if (!context) {
    throw new Error("Error: No !context!");
  }
  if (!context.params) {
    throw new Error("Error: No !context.params!");
  }

  const slug = context.params.slug;
  if (!slug) {
    throw new Error("Error: No !slug!");
  }

  const post = getPostBySlug(slug);

  const content = await markdownToHtml(post.content || "");
  if (content === "") {
    throw new Error("Error: No !content!");
  }

  const allPosts = getAllPosts();
  if (allPosts === "") {
    throw new Error("Error: No !allPosts!");
  }
  const thePost = allPosts.filter(function f(o) {
    return o.slug === context.params.slug;
  });

  const categoriesPostsFilter = allPosts.filter(
    p =>
      p?.frontmatter?.categories[0] === thePost[0]?.frontmatter?.categories[0]
  );
  let categoriesPosts = categoriesPostsFilter?.map(cat => ({
    date: cat?.date || new Date(),
    title: cat?.frontmatter?.title || "title",
    image: cat?.frontmatter?.image || "plaholder.jpg",
    category: cat?.frontmatter?.categories[0] || "general",
    slug: cat?.slug,
  }));

  return {
    props: {
      ...post,
      content,
      categoriesPosts,
      // nextPost,
      // prevPost,
      // categoryIndex,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const categories = posts?.map(({ frontmatter }) =>
    slugify(frontmatter?.categories[0] || "general").toLowerCase()
  );
  const uniqueCategories = _.uniq(categories);
  const uniqueCategoriesMap = uniqueCategories?.map(category => {
    return {
      params: { slug: category },
    };
  });
  const paths = posts
    .map(({ slug }) => ({ params: { slug: slug } }))
    .concat(uniqueCategoriesMap);
  return {
    paths,
    fallback: false,
  };
};
