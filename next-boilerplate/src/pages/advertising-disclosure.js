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
  slug: "about",
  title: `About Us - ${mainConfigs.business.brandName}`,
  description: "This is a About Us page.",
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
  articleUrl: `${mainConfigs.website.siteUrl}/about`,
  themeColor: website.themeColor,
  sameAs: business.sameAs,
  twitter: business.shortName,
};

const NotFoundPage = () => {
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  return (
    <div className='page'>
      <SeoContainer killSeo={true} data={infos} />

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
      <div className='hero-wrapper page'>
        <div className='hero search-hero'>
          <Image
            src={`/brandimages/hero-img.jpg`}
            alt={"Modern Tips hero image"}
            width={1024}
            height={650}
            className='hero-img'
          />
          <div className='row-config inner-hero'>
            <h2>Search ModernTips</h2>
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
                  alt={"Modern Tips search icon"}
                  width={26}
                  height={26}
                  className='search-hold'
                />
                <Image
                  src={`/brandimages/search-icon-hover.png`}
                  alt={"Modern Tips search icon hover"}
                  width={26}
                  height={26}
                  className='search-hover'
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      <main className='main-container-wrapper'>
        <div className='main-container main-page'>
          <h1>Advertising Disclosure</h1>
          <p>
            ModernTips has a financial relationship with some of the companies
            mentioned throughout the site and this site may be compensated
            through the credit card issuer or advertiser’s partner programs. We
            do not make recommendations based on these relationships alone.
            Compensation may impact which companies we review and write about
            and how and where products appear on this site (including, for
            example, the order in which they appear).
          </p>

          <h2>Disclaimer:</h2>

          <p>
            We try to keep information accurate and up to date, however we
            cannot make warranties regarding the accuracy of our information.
            Opinions expressed here are author’s alone, not those of the
            financial institution, lender, credit card issuer, advertiser,
            business, service provider, etc. and have not been reviewed,
            approved, or otherwise endorsed by the respective company. Please
            verify FDIC Insurance / NCUA Insurance status, credit card
            information, and interest rates during the application process. We
            strongly suggest you read the terms of use and privacy policies of
            advertised companies as they may be substantially different than
            ModernTip’s policies.
          </p>
        </div>
      </main>

      <div className='wrapper-box'></div>
      <div className='footer-wrapper'>
        <FooterContainer label='moderntips.com' link='https://moderntips.com' />
      </div>
    </div>
  );
};

export default NotFoundPage;
