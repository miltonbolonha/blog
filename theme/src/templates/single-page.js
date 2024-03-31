import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import SinglePostContainer from "../containers/SinglePostContainer";
import mainConfigs from "../configs/main-infos.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
import mainMenu from "../configs/main-menu.json";
import { parse } from "node-html-parser";
// import Script from "next/script";
// import ReactDOMServer from "react-dom/server";

import BlogList from "../containers/BlogListContainer";

const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const BlogPost = ({ page }) => {
  const { title } = page.frontmatter;
  // const infos = {
  //   slug: "/" + page?.slug,
  //   title: killSEO ? "NO SEO" : `${title} - ${business.brandName}`,
  //   description: excerpt || page?.frontmatter.description,
  //   author: website.author,
  //   brandPerson: website.brandPerson,
  //   siteUrl: website.siteUrl,
  //   brandName: business.brandName,
  //   brandEmail: business.brandEmail,
  //   brandPhone: business.brandPhone,
  //   brandDescription: business.brandDescription,
  //   brandLogo: `${website.siteUrl}/${business.brandLogo}`,
  //   brandCardImage: `${website.siteUrl}/${business.brandCardImage}`,
  //   featuredImage: `${website.siteUrl}/posts/${page?.frontmatter?.image}`,
  //   datePublished: website.datePublished,
  //   i18n: website.i18n,
  //   keywords: termsString || page?.frontmatter?.tag || website.keywords,
  //   questions: [],
  //   topology: "post",
  //   articleUrl: `${website.siteUrl}/${page?.slug}`,
  //   themeColor: website.themeColor,
  //   sameAs: business.sameAs,
  //   twitter: business.shortName,
  //   articleBody: doc,
  // };
  console.log("page");
  // console.log(page);
  return (
    <>
      <div className='single-page'>
        <SeoContainer killSeo={true} data={null} />
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
          // gtagCounter={gtagCounter}
          // pathname={pathname}
        />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        <div className='footer-wrapper'>
          <FooterContainer />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
