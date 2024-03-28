import React from "react";
import Link from "next/link";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import Row from "../containers/RowContainer";
import SeoContainer from "../containers/SeoContainer";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";
import mainMenu from "../configs/main-menu.json";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const infos = {
  slug: "/404",
  title: `Error Page - ${mainConfigs.business.brandName}`,
  description: "This is a 404 error page.",
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
  articleUrl: `${mainConfigs.website.siteUrl}/404`,
  themeColor: website.themeColor,
  sameAs: business.sameAs,
  twitter: business.shortName,
};

const NotFoundPage = ({ type }) => {
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);
  console.log("type");
  console.log(type);
  return (
    <div className='error-page'>
      <SeoContainer killSeo={false} data={infos} />

      <HeaderContainer
        opt={{
          bgOne: "transparent",
          bgTwo: "transparent",
          classes: "header-block",
          pageHasMenu: index?.hasMenu,
        }}
        // mainMenu={mainMenu.menu.items}
        hasMenu={false}
        // hasMenu={index?.hasMenu}
        // scheduleLink={index.calendlyLink}
        // gtag={"gtag"}
        // gtagCounter={gtagCounter}
        pathname={pathname}
      />
      <div className='hero-wrapper'>
        <div className='hero search-hero'>
          <Image
            src={`/brandimages/hero-img.jpg`}
            alt={"Mil Textos hero image"}
            width={1024}
            height={650}
            className='hero-img'
          />
          <div className='row-config inner-hero'>
            <h2>Error page</h2>
            <h1>Search Mil Textos</h1>
            <form action='#' method='post'>
              <input
                type='text'
                name='something'
                id='here'
                placeholder='Search'
              />
              <button className='search-icon'>
                <Image
                  src={`/brandimages/search-icon.png`}
                  alt={"Mil Textos search icon"}
                  width={26}
                  height={26}
                  className='search-hold'
                />
                <Image
                  src={`/brandimages/search-icon-hover.png`}
                  alt={"Mil Textos search icon hover"}
                  width={26}
                  height={26}
                  className='search-hover'
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='wrapper-box'></div>
      <div className='footer-wrapper'>
        <FooterContainer label='miltextos.com' link='https://miltextos.com' />
      </div>
    </div>
  );
};

export default NotFoundPage;
