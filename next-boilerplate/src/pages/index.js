import React, { useRef, useState, useEffect } from "react";
// import Head from "next/head";
import { usePathname } from "next/navigation";
import BlogList from "../templates/blog-list";
import { getAllPosts, slugPrefix } from "../lib/api";

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

const homeLogos = index?.logosSlider;
const homeTeam = index?.team;

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
  brandLogo: `${website.siteUrl}${slugPrefix}/${business.brandLogo}`,
  brandCardImage: `${website.siteUrl}${slugPrefix}/brandimages/pages/${business.brandCardImage}`,
  featuredImage: `${website.siteUrl}${slugPrefix}/brandimages/pages/${index.featureImage}`,
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
const logoSettings = {
  dots: false,
  arrows: false,
  pauseOnHover: false,
  draggable: false,
  swipe: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const testimonialSettings = {
  dots: false,
  arrows: false,
  pauseOnHover: true,
  draggable: true,
  swipe: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        centerPadding: 30,
      },
    },
  ],
};

const teamSettings = {
  dots: true,
  arrows: true,
  pauseOnHover: true,
  infinite: false,
  draggable: true,
  swipe: true,
  autoplay: true,
  autoplaySpeed: 6000,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  rows: 1,
  // centerPadding: 70,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        centerPadding: 20,
        slidesToShow: 1,
      },
    },
  ],
  appendDots: dots => (
    <div
      style={{
        position: "absolute",
        left: "-120px",
        top: "-40px",
        width: "500px",
        height: "50px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "20px",
        height: "2px",
        background: "rgba(255,255,255,0.5)",
        margin: "0 8px",
      }}
      className='zuming'
    ></div>
  ),
};
const Home = () => {
  const [btnGClick, useBtnGClick] = useState(null);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  // const gCount = id => {
  //   if (typeof window !== "undefined") {
  //     useBtnGClick(id);
  //   }
  // };
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      useBtnGClick(null);
    }
  };

  return (
    <div className='index-page'>
      <SeoContainer killSeo={false} data={infos} />
      {/* <TopRibbonContainer
        text={index?.topRibbon?.text}
        highlight={index?.topRibbon?.highlight}
        linkHighlight={index?.topRibbon?.linkHighlight}
        arrow={true}
        gtagCounter={gtagCounter}
        id='home-btn-topribbon'
      /> */}
      <HeaderContainer
        opt={{
          bgOne: "transparent",
          bgTwo: "transparent",
          classes: "header-block",
          pageHasMenu: index?.hasMenu,
        }}
        mainMenu={mainMenu.menu.items}
        hasMenu={index?.hasMenu}
        scheduleLink={index.calendlyLink}
        gtag={"gtag"}
        gtagCounter={gtagCounter}
        pathname={pathname}
      />
      <div className={"isBoxed main-wrapper hero highlight-info"}>
        <p className='five-stars-wrapper'>
          <Image
            src={"/brandimages/five-white-stars.png"}
            alt={"The Five Stars Agency"}
            className={"five-stars"}
            width={90}
            height={18}
          />
          {` `}
          Rated 4.9/5 by 300+ Satisfied Clients!
        </p>
        <h1
          className='graydient'
          dangerouslySetInnerHTML={{
            __html: index?.headline,
          }}
        />
        <p className='main-paragraph'>
          <strong
            dangerouslySetInnerHTML={{
              __html: index?.secondHeadline,
            }}
          />
        </p>
        <a
          id='home-btn-servicestop'
          href='/#explore'
          alt='Explore Our Services Now'
          className={"cta"}
          onClick={() => gtagCounter("home-btn-servicestop")}
        >
          Explore Our Services Now!
          <span>
            <Image
              src={"/brandimages/right-arrow.png"}
              alt={"Explore Our Services Now"}
              width={21}
              height={21}
              unoptimized
            />
          </span>
        </a>
      </div>
      {/* <main className='main-container'></main> */}

      <h2>Lista: {mainConfigs?.pages?.index.title}</h2>
      <div className='wrapper-box'>
        <div className='post'>
          <BlogList posts={posts} />
        </div>
      </div>

      <FooterContainer
        label='generalmoderntips.com'
        link='https://generalmoderntips.com'
      />
    </div>
  );
};
export default Home;
