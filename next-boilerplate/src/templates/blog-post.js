import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Cookies from "universal-cookie";

import SinglePostBlock from "../components/SinglePostBlock";
import mainConfigs from "../configs/main-infos.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
import mainMenu from "../configs/main-menu.json";

import BlogList from "../templates/blog-list";

const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const BlogPost = ({ post }) => {
  const [btnGClick, setBtnGClick] = useState(null);
  const [promoVisitState, setPromoVisitState] = useState(null);
  const [readMore, setReadMore] = useState(null);
  const [refUrl, setRefUrl] = useState(null);
  const [city, setCity] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const getRef = useSearchParams().getAll("ref");
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  const title = post?.frontmatter?.title.replace("{{city}}", city);
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      setBtnGClick(null);
    }
  };
  const fetchApiData = async () => {
    const res = await fetch(
      `${mainConfigs.website.developmentUrl}/geolocation`
    );
    const data = await res.json();
    // setMensen(data);
    setUserInfos(data);
    return setCity(data?.geo?.city || "Los Angeles");
  };

  // const cookies = new Cookies();
  // const hasSuccessCookies =
  //   cookies.get("locationValue") ||
  //   cookies.set("locationValue", null, {
  //     path: "/",
  //   });
  // console.log("hasSuccessCookieshasSuccessCookies");
  // console.log(hasSuccessCookies);
  // Pass data to the page via props

  const infos = {
    slug: index?.slug,
    title: `${title} - ${business.brandName}`,
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
    featuredImage: `${website.siteUrl}/brandimages/posts/${post?.frontmatter?.image}`,
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      // getRef?.length === 1 ? console.log("arnaldoooooooooooooo") : null;
      getRef?.length === 1 && promoVisitState === null
        ? setPromoVisitState(true)
        : null;
      getRef?.length === 1 && promoVisitState === null
        ? setReadMore(false)
        : null;
    }
    // Fetch data from API if `location` object is set
    if (!city) {
      fetchApiData()
        .then(function (response) {
          if (response.ok) {
            console.log(response);
          } else {
            console.log("response");
            console.log(response);
            console.log("Network response was not ok.");
          }
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
        });
    }
  }, [city, promoVisitState, getRef]);

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
        {post?.type === "posts" ? (
          <SinglePostBlock
            highlightImage={post?.frontmatter?.image}
            authorImg={"imgHolder"}
            date={post?.frontmatter?.date}
            author={mainConfigs.business.brandName}
            html={post?.content}
            title={title || post?.frontmatter?.title}
            category={
              post?.frontmatter?.categories[0] || post?.frontmatter?.categories
            }
            wordCount={10}
            promoVisitState={promoVisitState}
            setReadMore={setReadMore}
            readMore={readMore}
            topic={post?.frontmatter?.tag[0]}
          />
        ) : null}

        {post?.type === "categories" && post.relatedPost ? (
          <main className='main-container-wrapper'>
            <div className='main-container'>
              <div className='news-grid category'>
                <BlogList
                  posts={post.relatedPost}
                  postsToShow={website.postsToShow}
                  city={city}
                />
              </div>
            </div>
          </main>
        ) : null}

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
