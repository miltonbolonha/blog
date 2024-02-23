import React from "react";
import BlogPost from "../templates/blog-post";
import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import slugify from "slugify";
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

  const content = post ? await markdownToHtml(post.content || "") : null;
  // const { frontmatter } = post;
  // console.log("post");
  // console.log(post);
  if (!content) {
    throw new Error("Error: No !content!");
  }
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
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  // const categories = posts.map(({ category }) => ({ params: { category } }));
  console.log("posts");
  console.log(posts);
  // const categories = posts.map(({ category }) => ({
  //   params: { frontmatter: category },
  // }));
  // console.log("categories");
  // console.log(categories);

  return {
    paths,
    fallback: false,
  };
};
