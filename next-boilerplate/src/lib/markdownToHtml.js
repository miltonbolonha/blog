// import { remark } from "remark";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
// import { rehypeExtendedTable } from "rehype-extended-table";
// import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { unified } from "unified";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";

// import html from "remark-html";
import headings from "remark-autolink-headings";
// import slug from "remark-slug";
import remarkOembed from "remark-oembed";
import rehypeStringify from "rehype-stringify";
import supersub from "remark-supersub";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(supersub)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(remarkOembed)
    .use(rehypeAutolinkHeadings)
    .use(rehypeRaw)
    .use(rehypeExternalLinks, { rel: ["nofollow noopener"] })
    .use(rehypeSanitize)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeSlug)
    // .use(remarkGfm)
    .use(headings, {
      behavior: "wrap",
      linkProperties: {
        className: "anchor",
      },
    })
    .process(markdown);

  return String(result) || markdown;
}
