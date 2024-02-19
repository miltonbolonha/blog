import { remark } from "remark";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { unified } from "unified";

// import html from "remark-html";
import headings from "remark-autolink-headings";
import slug from "remark-slug";
import remarkOembed from "remark-oembed";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkOembed)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(slug)
    .use(headings, {
      behavior: "wrap",
      linkProperties: {
        className: "anchor",
      },
    })
    .process(markdown);
  console.log("result");
  console.log(result);
  return String(result) || markdown;
}
