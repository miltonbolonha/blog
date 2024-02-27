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
  // console.log("context.params.slug");
  // console.log(context);

  if (!slug) {
    throw new Error("Error: No !slug!");
  }

  const post = getPostBySlug(slug);

  const content = await markdownToHtml(post.content || "");
  // const { frontmatter } = post;
  // console.log("post");
  // console.log(post);
  if (content === "") {
    throw new Error("Error: No !content!");
  }

  // console.log("context");
  // console.log(context);
  // get prev/next posts
  // const allPosts = getAllPosts();
  // if (!allPosts) {
  //   throw new Error("Error: No !allPosts!");
  // }
  // const currentAllPostIndex = allPosts.filter(
  //   p => p?.frontmatter.layout === "post"
  // );
  // const currentPostIndex = currentAllPostIndex.findIndex(p => p?.slug === slug);
  // const categoryIndex = allPosts.filter(
  //   p => slugify(p?.frontmatter.category) === slug
  // );
  // const postCategoryIndex = allPosts.filter(
  //   p => slugify(p?.frontmatter.category) === slug
  // );

  // const nextPost = allPosts[currentPostIndex - 1] ?? null;
  // const prevPost = allPosts[currentPostIndex + 1] ?? null;

  return {
    props: {
      ...post,
      content,
      // nextPost,
      // prevPost,
      // categoryIndex,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const categories = posts.map(({ frontmatter }) =>
    slugify(frontmatter?.categories[0] || "general").toLowerCase()
  );

  const uniqueCategories = _.uniq(categories);

  const uniqueCategoriesMap = uniqueCategories.map(category => {
    console.log("categorycategory");
    console.log(category);
    return {
      params: { slug: category },
    };
  });
  console.log("uniqueCategoriesMapuniqueCategoriesMap");
  console.log(uniqueCategoriesMap);
  // const x = uniqueCategories.forEach(uc =>
  //   console.log({ params: { slug: uc } })
  // );
  const paths = posts
    .map(({ slug }) => ({ params: { slug: slug } }))
    .concat(uniqueCategoriesMap);
  console.log("paths");
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
