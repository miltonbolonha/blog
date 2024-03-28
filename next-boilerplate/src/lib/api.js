import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import slugify from "slugify";

import { format } from "date-fns";
import { usa } from "date-fns/locale";

const contentDirectory = join(process.cwd(), "content");
const postsDirectory = join(process.cwd(), "content/posts");
const pagesDirectory = join(process.cwd(), "content/pages");
// console.log("postsDirectory");
// console.log(postsDirectory);
export function getPostBySlug(slug) {
  if (!slug) return null;
  const slugIncludes = slug.includes(".md", "");

  const realSlug = slugIncludes ? slug.replace(/\.md$/, "") : slug;
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  null;

  let fileContents;
  let filePageContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8") || null;
  } catch (err) {
    fileContents = false;
  }

  const fullPagePath = join(pagesDirectory, `${realSlug}.md`);
  null;

  try {
    filePageContents = fs.readFileSync(fullPagePath, "utf8") || null;
  } catch (err) {
    filePageContents = false;
  }

  if (fileContents || filePageContents) {
    const { data, content } = fileContents
      ? matter(fileContents)
      : matter(filePageContents) || null;

    const date = format(new Date(data.date), "MMMM' 'dd', 'yyyy", {
      locale: usa,
    });
    // console.log(data?.frontmatter?.layout || "layout type");
    return {
      slug: realSlug,
      date: data.date.toString(),
      frontmatter: { ...data, date },
      type: data?.frontmatter?.layout ? "posts" : "categories",
      content,
      relatedPost: null,
    };
  } else {
    const allPosts = getAllPosts();

    const x = allPosts.filter(function f(o) {
      if (
        slugify(o.frontmatter.categories[0] || o.frontmatter.categories)
          .toLowerCase()
          .includes(slug)
      ) {
        return true;
      }
      if (o.children) {
        return (o.children = o.children.filter(f)).length;
      }
    });
    return {
      slug: realSlug,
      date: "2023-08-16 00:00:01",
      frontmatter: {
        layout: "",
        title: "",
        image: "",
        description: "",
        category: realSlug,
        topic: "",
        date: "2023-08-16 00:00:01",
      },
      type: "categories",
      content: "category",
      relatedPost: x,
    };
  }
}
export function getPageBySlug(slug) {
  if (!slug) return null;
  const slugIncludes = slug.includes(".md", "");

  const realSlug = slugIncludes ? slug.replace(/\.md$/, "") : slug;
  const fullPath = join(pagesDirectory, `${realSlug}.md`) || null;
  // console.log("fullPath");
  // console.log(fullPath);
  var fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8") || null;
  } catch (err) {
    fileContents = false;
  }

  if (fileContents) {
    const { data } = fileContents ? matter(fileContents) : null;
    const { content } = fileContents ? matter(fileContents) : null;

    const date = format(new Date(data.date), "MMMM' 'dd', 'yyyy", {
      locale: usa,
    });
    console.log("datadata");
    console.log(data || "no type");

    return {
      slug: realSlug,
      date: data.date.toString(),
      frontmatter: { ...data, date },
      type: data.type || "pages",
      content,
      relatedPost: null,
    };
  } else {
    const allPages = getAllPosts();

    const x = allPages.filter(function f(o) {
      if (
        slugify(o.frontmatter.categories[0] || o.frontmatter.categories)
          .toLowerCase()
          .includes(slug)
      ) {
        return true;
      }
      if (o.children) {
        return (o.children = o.children.filter(f)).length;
      }
    });
    return {
      slug: realSlug,
      date: "2023-08-16 00:00:01",
      frontmatter: {
        layout: "",
        title: "",
        image: "",
        description: "",
        category: realSlug,
        topic: "",
        date: "2023-08-16 00:00:01",
      },
      type: "pages",
      content: "category",
      relatedPost: x,
    };
  }
}

export function getAllPosts() {
  // const slugsPosts = fs.readdirSync(postsDirectory);
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}

export function getAllPages() {
  const slugsPages = fs.readdirSync(pagesDirectory);
  const pages = slugsPages
    .map(slug => getPageBySlug(slug))
    .sort((page1, page2) =>
      new Date(page1.date) > new Date(page2.date) ? -1 : 1
    );

  return pages;
}
