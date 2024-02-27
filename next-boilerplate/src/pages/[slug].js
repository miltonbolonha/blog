import React from "react";
import BlogPost from "../templates/blog-post";
import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import slugify from "slugify";
import mainConfigs from "../configs/main-infos.json";
import _ from "lodash";
import Cookies from "universal-cookie";

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

  const cookies = new Cookies();
  const hasSuccessCookies =
    cookies.get("locationValue") ||
    cookies.set("locationValue", null, {
      path: "/",
    });

  const res =
    hasSuccessCookies ||
    (await fetch(`${mainConfigs.website.developmentUrl}/geolocation`)
      .then(function (response) {
        if (response.ok) {
          return response;
        } else {
          cookies.remove("locationValue");
          return null;
        }
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        cookies.remove("locationValue");
        console.log("33333333333");

        return null;
      }));

  const dataLocation = await res.json();
  dataLocation
    ? cookies.set("locationValue", dataLocation, {
        path: "/",
      })
    : null;
  // Pass data to the page via props
  return {
    props: {
      ...post,
      content,
      dataLocation,
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
