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
          <h1>About Us</h1>
          <p>
            <strong>
              ModernTips is here to deliver tips and tricks to live a better
              life.
            </strong>
            We cover a broad range of topics including finance, health, and
            travel to help enhance your everyday life. We’re passionate about
            spreading meaningful content that makes an immediate and noticeable
            difference in your life.
          </p>

          <p>
            Our writers aim to produce content that improves everyday lives. We
            understand how inside tips and tricks in the financial, health, and
            travel world can be extraordinarily powerful. We’re here to educate
            and inform so you can live your best life.
          </p>

          <p>
            <strong>
              ModernTips delivers understandable and usable information for
              people in all stages of life.
            </strong>{" "}
            From seniors to newly married couples who are learning to make a
            family budget, ModernTips has valuable content you need to succeed.
            Our contributors enjoy researching the best in finance, health, and
            travel. We cover content on improving your credit, career,
            investments and how to live frugally, be healthy, and make the most
            of your travels. Look to ModernTips before you make decisions –
            we’re providing the best tips for you and your family.
          </p>

          <p>
            <strong>Contact Us</strong> <br />
            ModernTips
            <br />
            PO Box 515381
            <br />
            Los Angeles, CA 90051-6681
            <br />
            <a href={`mailto:mailinfo@moderntips.com`}>info@moderntips.com</a>
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
