import React, { useRef, useState, useEffect } from "react";
import Row from "../containers/RowContainer";
// import SeoContainer from "../containers/SeoContainer";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
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
const BlogPost = ({ post, searchParams }) => {
  const [btnGClick, setBtnGClick] = useState(null);
  const [promoVisitState, setPromoVisitState] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);
  console.log("readMore");
  console.log(readMore);
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      setBtnGClick(null);
    }
  };
  const getRef = useSearchParams().getAll("ref");

  console.log("useSearchParams");
  console.log(useSearchParams().getAll("ref"));
  console.log(useSearchParams().getAll("zim"));
  // console.log("usePathname");
  // console.log(usePathname());
  // console.log("searchParams");
  // console.log(searchParams);
  // console.log("useRouter");
  // console.log(useRouter());
  // const searchParamss = searchParams();

  // const search = searchParamss.get("ref");

  useEffect(() => {
    getRef.length === 0 && readMore === false ? null : setPromoVisitState(true);
    console.log("getRef.length;;;;;");
    console.log(getRef.length);
    console.log("readMore....");
    console.log(readMore);
  });
  return (
    <>
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
          promoVisitState={promoVisitState}
          setReadMore={setReadMore}
          readMore={readMore}
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
