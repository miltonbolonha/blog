import React, { useRef, useState, useEffect } from "react";
// import Head from "next/head";
import Cookies from "universal-cookie";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
// import { usePathname } from "next/navigation";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import SearchInputContainer from "../containers/SearchInputContainer";
// import Slider from "react-slick";
import Image from "next/image";

import SeoContainer from "../containers/SeoContainer";
import Row from "../containers/RowContainer";
import HeaderContainer from "../containers/HeaderContainer";
// import TopRibbonContainer from "../containers/TopRibbonContainer";
// import FAQContainer from "../containers/FAQContainer";
// import FeedbackContainer from "../containers/FeedbackContainer";
// import LoadMime from "../containers/LoadMimeContainer";
// import FooterHighlightContainer from "../containers/FooterHighlightContainer";
import FooterContainer from "../containers/FooterContainer";
import mainMenu from "../configs/main-menu.json";
import mainConfigs from "../configs/main-infos.json";
// import * as ga from "../lib/ga";

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
  brandCardImage: `${website.siteUrl}/${business.brandCardImage}`,
  featuredImage: `${website.siteUrl}/${index.featureImage}`,
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

const Home = ({ posts, searchParams }) => {
  const [btnGClick, useBtnGClick] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [city, setCity] = useState(null);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  const fetchApiData = async () => {
    const res = await fetch(
      `${mainConfigs.website.developmentUrl}/geolocation`
    );
    const data = await res.json();
    // setMensen(data);
    setUserInfos(data);
    return setCity(data?.geo?.city || "Los Angeles");
  };

  const cookies = new Cookies();
  const hasSuccessCookies =
    cookies.get("locationValue") ||
    cookies.set("locationValue", null, {
      path: "/",
    });

  // Pass data to the page via props
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      useBtnGClick(null);
    }
  };
  useEffect(() => {
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
            return null;
          }
        })
        .catch(function (error) {
          console.log(
            "There hass been a problem with your fetch operation: " +
              error.message
          );
          return null;
        });
    }
  }, [city]);
  return (
    <div className='index-page'>
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
      <div className='hero-wrapper'>
        <div className='hero search-hero'>
          <Image
            src={`/brandimages/hero-img.jpg`}
            alt={"Modern Tips hero image"}
            width={1024}
            height={650}
            className='hero-img'
          />
          <div className='row-config inner-hero'>
            <h1>Search ModernTips</h1>
            {/* <p>A modern way to find your trend topics.</p> */}
            <SearchInputContainer
              siteUrl={website.siteUrl}
              subDomain={"search"}
            />

            {/* 
          <a href='#' target='_blank' rel='noopener noreferrer'>
            Trend me now
          </a> */}
          </div>
        </div>
      </div>

      <main className='main-container-wrapper'>
        <div className='main-container'>
          <div className='news-grid'>
            <BlogList
              posts={posts}
              postsToShow={website.postsToShow}
              city={city || "Los Angeles"}
            />
          </div>
        </div>
      </main>

      <div className='wrapper-box'></div>
      <div className='footer-wrapper'>
        <FooterContainer label='moderntips.com' link='https://moderntips.com' />
      </div>
    </div>
  );
};
export default Home;
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
