import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import slugify from "slugify";

import { format } from "date-fns";
import { usa } from "date-fns/locale";

const postsDirectory = join(process.cwd(), "content/posts");
// console.log("postsDirectory");
// console.log(postsDirectory);
export function getPostBySlug(slug) {
  if (!slug) return null;
  const slugIncludes = slug.includes(".md", "");

  const realSlug = slugIncludes ? slug.replace(/\.md$/, "") : slug;
  const fullPath = join(postsDirectory, `${realSlug}.md`) || null;

  var fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (err) {
    fileContents = false;
  }

  if (fileContents) {
    const { data } = fileContents ? matter(fileContents) : null;
    const { content } = fileContents ? matter(fileContents) : null;

    const date = format(new Date(data.date), "MMMM' 'dd', 'yyyy", {
      locale: usa,
    });

    return {
      slug: realSlug,
      date: data.date.toString(),
      frontmatter: { ...data, date },
      type: data ? "posts" : "categories",
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

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );

  return posts;
}
