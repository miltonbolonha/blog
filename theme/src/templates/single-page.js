import React from "react";
import mainConfigs from "../../settings.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
// import mainMenu from "../configs/main-menu.json";

// const index = mainConfigs?.pages?.index;
const { business, website } = mainConfigs;

const BlogPost = ({ page }) => {
  const { title } = page.frontmatter;
  const infos = {
    slug: "/" + page?.slug,
    title: `${title} - ${business.brandName}`,
    description: page?.frontmatter?.description || business.brandDescription,
    author: website.author,
    brandPerson: website.brandPerson,
    siteUrl: website.siteUrl,
    brandName: business.brandName,
    brandEmail: business.brandEmail,
    brandPhone: business.brandPhone,
    brandDescription: business.brandDescription,
    brandLogo: `${website.siteUrl}/${business.brandLogo}`,
    brandCardImage: `${website.siteUrl}/${business.brandCardImage}`,
    featuredImage: `${website.siteUrl}/posts/${page?.frontmatter?.image}`,
    datePublished: website.datePublished,
    i18n: website.i18n,
    keywords: page?.frontmatter?.tag || website.keywords,
    questions: [],
    topology: "page",
    articleUrl: `${website.siteUrl}/${page?.slug}`,
    themeColor: website.themeColor,
    sameAs: business.sameAs,
    // twitter: business.shortName,
    // articleBody: doc,
  };
  console.log("page");
  // console.log(page);
  return (
    <>
      <div className='single-page'>
        <SeoContainer killSeo={false} data={infos} />
        <HeaderContainer
          opt={{
            bgOne: "transparent",
            bgTwo: "transparent",
            classes: "header-block",
            pageHasMenu: false,
          }}
          // mainMenu={mainMenu}
          hasMenu={false}
          // hasMenu={index?.hasMenu}
          // scheduleLink={index.calendlyLink}
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
