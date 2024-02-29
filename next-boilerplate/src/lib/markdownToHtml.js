// import { remark } from "remark";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
// import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { unified } from "unified";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";

// import html from "remark-html";
import headings from "remark-autolink-headings";
import slug from "remark-slug";
import remarkOembed from "remark-oembed";
import rehypeStringify from "rehype-stringify";
import supersub from "remark-supersub";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(supersub)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeFigure, { className: "my-figure" })
    .use(remarkOembed)
    // .use(remarkGfm)
    .use(rehypeAutolinkHeadings)
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(headings, {
      behavior: "wrap",
      linkProperties: {
        className: "anchor",
      },
    })
    .process(markdown);
  // console.log("result");
  // console.log(result);
  return String(result) || markdown;
}
