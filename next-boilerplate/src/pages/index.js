import React, { useRef, useState, useEffect } from "react";
// import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";

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

const Home = ({ posts }) => {
  const [btnGClick, useBtnGClick] = useState(null);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      useBtnGClick(null);
    }
  };

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
            <h1>Get in touch</h1>
            <p>A modern way to find your trend topics.</p>
            <form action='#' method='post'>
              <input
                type='text'
                name='something'
                id='here'
                placeholder='Ribeirão Preto Living Room...'
              />
              <input type='submit' value='search' />
            </form>
            {/* 
          <a href='#' target='_blank' rel='noopener noreferrer'>
            Trend me now
          </a> */}
          </div>
        </div>
      </div>

      <main className='main-container-wrapper'>
        <div className='main-container'>
          {/* <div className='post highlight-01 news-grid'>
            <Link href={"/"} passHref className='post-link'>
              <Image
                src={`/brandimages/hero-img.jpg`}
                alt={"title"}
                width={280}
                height={150}
                unoptimized
              />
            </Link>
            <div className='main-post-inner'>
              <Link href={"/cat"} passHref className='post-category'>
                Category
              </Link>
              <Link href={"/"} passHref className='post-link'>
                <h1 className=''>News here more then words</h1>
              </Link>
            </div>
          </div> */}

          <div className='news-grid'>
            {/* {console.log(posts)} */}
            <BlogList posts={posts} postsToShow={website.postsToShow} />
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
