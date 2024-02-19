import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Row from "../containers/RowContainer";
// import SeoContainer from "../containers/SeoContainer";
import SinglePostBlock from "../components/SinglePostBlock";
import mainConfigs from "../configs/main-infos.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
// import MainWrapperContainer from "../containers/MainWrapperContainer";
import mainMenu from "../configs/main-menu.json";

const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const infos = {
  slug: index?.slug,
  title: `${index?.title} - ${business.brandName}`,
  description: index?.description,
  author: website.author,
  brandPerson: website.brandPerson,
  siteUrl: website.siteUrl,
  brandName: business.brandName,
  brandEmail: business.brandEmail,
  brandPhone: business.brandPhone,
  brandDescription: business.brandDescription,
  brandLogo: `${website.siteUrl}/${business.brandLogo}`,
  brandCardImage: `${website.siteUrl}/brandimages/pages/${business.brandCardImage}`,
  featuredImage: `${website.siteUrl}/brandimages/pages/${index.featureImage}`,
  datePublished: website.datePublished,
  i18n: website.i18n,
  keywords: website.keywords,
  questions: index.faq,
  topology: null,
  articleUrl: `${website.siteUrl}/${index?.slug}`,
  themeColor: website.themeColor,
  sameAs: business.sameAs,
  twitter: business.shortName,
};
const BlogPost = ({ post }) => {
  const [btnGClick, useBtnGClick] = useState(null);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      useBtnGClick(null);
    }
  };

  return (
    <>
      {/* <SeoContainer
      killSeo={false}
      data={{
        slug: post.slug,
        title: `${post.frontmatter.title} - ${mainConfigs.business.brandName}`,
        author: mainConfigs.website.author,
        siteUrl: mainConfigs.website.siteUrl,
        brandName: mainConfigs.business.brandName,
        brandEmail: mainConfigs.business.brandEmail,
        brandLogo: mainConfigs.business.brandLogo,
        brandPhone: mainConfigs.business.brandPhone,
        brandDescription: mainConfigs.business.brandDescription,
        brandCardImage: mainConfigs.business.brandCardImage,
        featuredImage: `${mainConfigs.website.siteUrl}${slugPrefix}/favicon-32x32.png`,
        dateCreated: "dateCreated",
        dateNow: "dateNow",
        articleBody: "articleBody",
        datePublished: "04/02/2022",
        i18n: "pt-BR",
        keywords: ["keywords"],
        questions: ["questions:answer"],
        topology: "pages",
        articleUrl: "https://miltonbolonha.com.br/contato",
        description: post.frontmatter.description,
        themeColor: mainConfigs.website.themeColor,
        fbAppID: null,
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    /> */}
      {/* <h2>Postagem sobre: {post.frontmatter.categories.join("; ")}.</h2> */}
      <div className='single-post post-container'>
        <SeoContainer killSeo={false} data={infos} />

        <HeaderContainer
          opt={{
            bgOne: "transparent",
            bgTwo: "transparent",
            classes: "header-block",
            pageHasMenu: index?.hasMenu,
          }}
          mainMenu={mainMenu.menu.items}
          hasMenu={false}
          // hasMenu={index?.hasMenu}
          scheduleLink={index.calendlyLink}
          gtag={"gtag"}
          gtagCounter={gtagCounter}
          pathname={pathname}
        />

        <SinglePostBlock
          highlightImage={post.frontmatter.image}
          authorImg={"imgHolder"}
          date={post.frontmatter.date}
          author={mainConfigs.business.brandName}
          html={post.content}
          title={post.frontmatter.title}
          category={post.frontmatter.category}
          wordCount={10}
        />
        <div className='footer-wrapper'>
          <FooterContainer
            label='moderntips.com'
            link='https://moderntips.com'
          />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
