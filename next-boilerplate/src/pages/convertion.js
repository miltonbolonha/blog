import React, { useState, useEffect } from "react";
// import Head from "next/head";
import { usePathname } from "next/navigation";
import SeoContainer from "../containers/SeoContainer";

// import Link from "next/link";
import Image from "next/image";

import { YouTubeEmbed } from "@next/third-parties/google";

import Slider from "react-slick";
import HeaderContainer from "../containers/HeaderContainer";

import Row from "../containers/RowContainer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import { slugPrefix } from "../lib/utils";
import FAQContainer from "../containers/FAQContainer";
import FeedbackContainer from "../containers/FeedbackContainer";
import FooterHighlightContainer from "../containers/FooterHighlightContainer";
import TopRibbonContainer from "../containers/TopRibbonContainer";

import FooterContainer from "../containers/FooterContainer";
import mainMenu from "../configs/main-menu.json";
import mainConfigs from "../configs/main-infos.json";

const convertion = mainConfigs?.pages?.convertion;
const converionLogos = convertion?.logosSlider;
const projects = convertion?.projects;

const { website, business } = mainConfigs;

const logoSettings = {
  dots: false,
  arrows: false,
  pauseOnHover: false,
  draggable: false,
  swipe: false,
  infinite: true,
  autoplay: true,
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

const projectSettings = {
  dots: true,
  arrows: true,
  pauseOnHover: false,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 6000,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  centerMode: false,
  centerPadding: 30,
  appendDots: dots => (
    <div
      style={{
        position: "absolute",
        left: "-130px",
        top: "300px",
        width: "500px",
        height: "50px",
        zIndex: "99999",
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
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const mobileTestimonialSettings = {
  dots: false,
  arrows: false,
  pauseOnHover: false,
  draggable: true,
  swipe: true,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  centerMode: true,
  centerPadding: 30,
};

const mobilePricingSettings = {
  dots: true,
  arrows: true,
  pauseOnHover: false,
  draggable: true,
  swipe: true,
  infinite: false,
  autoplay: false,
  variableWidth: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: 50,
  appendDots: dots => (
    <div
      style={{
        position: "absolute",
        left: "-130px",
        top: "300px",
        width: "500px",
        height: "50px",
        zIndex: "99999",
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
  responsive: [
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const infos = {
  slug: convertion.slug,
  title: `${convertion.title} - ${business.brandName}`,
  description: convertion.description,
  author: website.author,
  brandPerson: website.brandPerson,
  siteUrl: website.siteUrl,
  brandName: business.brandName,
  brandEmail: business.brandEmail,
  brandPhone: business.brandPhone,
  brandDescription: business.brandDescription,
  brandLogo: `${website.siteUrl}${slugPrefix}/${business.brandLogo}`,
  brandCardImage: `${website.siteUrl}${slugPrefix}/brandimages/pages/${business.brandCardImage}`,
  featuredImage: `${website.siteUrl}${slugPrefix}/brandimages/pages/${convertion.featureImage}`,
  datePublished: website.datePublished,
  i18n: website.i18n,
  keywords: website.keywords,
  questions: convertion.faq,
  topology: null,
  articleUrl: `${website.siteUrl}/${convertion.slug}`,
  themeColor: website.themeColor,
  sameAs: business.sameAs,
  twitter: business.shortName,
};
const Convertion = () => {
  const [btnGClick, useBtnGClick] = useState(null);
  const [overlayState, handleOverlayState] = useState(0);

  const pathname = usePathname().slice(1, -1);
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      useBtnGClick(null);
    }
  };
  function handleVideoClick(e) {
    e.preventDefault();
    return handleOverlayState(1);
  }
  function handleOverlayClick(e) {
    return handleOverlayState(0);
  }

  return (
    <div className='convertion-page'>
      <SeoContainer killSeo={true} data={infos} />
      <TopRibbonContainer
        text={convertion.topRibbon.text}
        highlight={convertion.topRibbon.highlight}
        linkHighlight={convertion?.topRibbon?.linkHighlight}
        arrow={true}
      />
      <HeaderContainer
        opt={{
          bgOne: "transparent",
          bgTwo: "transparent",
          classes: "header-block",
          pageHasMenu: convertion?.hasMenu,
        }}
        mainMenu={mainMenu.menu.items}
        hasMenu={convertion?.hasMenu}
        scheduleLink={convertion.calendlyLink}
        gtag={"gtag"}
        gtagCounter={gtagCounter}
        pathname={pathname}
      />

      {/* <MainWrapperContainer
        killSeo={false}
        data={infos}
        hasMenu={convertion?.hasMenu}
        scheduleLink={convertion?.calendlyLink}
        gtag={"cro-menubtn-consultation"}
      > */}
      <Row
        opt={{
          isBoxed: true,
          classes: "section-wrapper hero highlight-info cro-highlight",
        }}
      >
        <p className='five-stars-wrapper'>
          <Image
            src={"/brandimages/five-white-stars.png"}
            alt={"Modern way to find your trend topics."}
            className={"five-stars"}
            width={90}
            height={18}
          />
          {` `}
          Rated 4.9/5 by 300+ Satisfied Clients!
        </p>
        <h1 className='graydient cro-heading desktop-only'>
          Same Clicks{" "}
          <Image
            src={"/brandimages/heading-right-arrow.png"}
            alt={"Modern way to find your trend topics."}
            className='heading-cro-arrow'
            width={55}
            height={55}
            unoptimized
          />{" "}
          <span>More Conversions</span>
          <br />
          With our tested <span>CRO solutions</span>
        </h1>
        <h1 className='graydient cro-heading mobile-only'>
          Same Clicks{" "}
          <Image
            src={"/brandimages/heading-down-arrow.png"}
            alt={"Modern way to find your trend topics."}
            className=''
            width={29}
            height={35}
            unoptimized
          />
          <br />
          <span>More Conversions</span>
        </h1>
        <p
          className='main-paragraph w95'
          dangerouslySetInnerHTML={{
            __html: convertion?.secondHeadline,
          }}
        />
        <a
          href={convertion.videoCTA}
          target='_blank'
          rel='nofollow noopener'
          className='w95 cro-hero-img'
          alt=''
          onClick={e => handleVideoClick(e)}
        >
          <Image
            src={"/brandimages/pages/cro-hero.jpg"}
            alt={"Modern way to find your trend topics."}
            width={365}
            height={205}
          />
        </a>

        <a
          href={convertion?.calendlyLink}
          target='_blank'
          rel='nofollow noopener'
          alt=''
          className={"cta"}
          id={"cro-mainbtn-call"}
          onClick={() => gtagCounter("cro-mainbtn-call")}
        >
          Schedule a FREE discovery call{" "}
          <span>
            <Image
              src={"/brandimages/right-arrow.png"}
              alt={"Modern way to find your trend topics."}
              width={22}
              height={22}
              unoptimized
            />
          </span>
        </a>
      </Row>
      {/* </MainWrapperContainer> */}

      <div
        className={`overlay overlay-${overlayState}`}
        onClick={e => handleOverlayClick(e)}
      ></div>

      <div className={`overlay-${overlayState} modal-open youtube-wrapper`}>
        <div className='close-btn' onClick={e => handleOverlayClick(e)}>
          x
        </div>
        <div className='inner-modal youtube'>
          {overlayState ? (
            <YouTubeEmbed videoid={convertion?.videoCTA} height={400} />
          ) : null}
        </div>
      </div>
      <h2 className='heading graydient small'>Trusted Client</h2>

      <Slider {...logoSettings} className='section-wrapper logo-slider'>
        {converionLogos.map((logo, lindx) => (
          <Image
            key={lindx}
            src={`/brandimages/logos/${logo.img}.png`}
            alt={logo.img}
            width={logo.w}
            height={logo.h}
          />
        ))}
      </Slider>
      <h2 className='heading graydient'>Other projects</h2>
      <div className='section-wrapper project-slider-wrapper'>
        <Slider {...projectSettings} className='project-slider'>
          {projects.map((project, pindx) => (
            <Image
              key={pindx}
              src={`/brandimages/pages/${project.img}.png`}
              width={project.w}
              height={project.h}
              alt={project.alt}
              className='project-img'
            />
          ))}
        </Slider>
      </div>

      <h2 className='heading graydient w95'>
        Our team members have helped in making
      </h2>

      <Row
        opt={{
          classes: "section-wrapper-small statics graydient-border",
          numColumns: 4,
          isBoxed: true,
        }}
      >
        <div className='border-graydient exclude'></div>
        <div className='static-hack'></div>
        <div className='inner-statics'>
          <p className='graydient'>+350</p>
          <h3>Split Tests</h3>
        </div>
        <div className='inner-statics'>
          <p className='graydient'>+100</p>
          <h3>Optimized Websites</h3>
        </div>
        <div className='inner-statics'>
          <p className='graydient'>+30%</p>
          <h3>Avg. Conversion Rate Increase</h3>
        </div>
        <div className='inner-statics'>
          <p className='graydient'>+13%</p>
          <h3>Avg. Revenue Increased</h3>
        </div>
      </Row>
      <Row
        opt={{
          classes: "section-wrapper btns-center",
          isBoxed: true,
          numColumns: 1,
        }}
      >
        <a
          href={convertion?.calendlyLink}
          target='_blank'
          alt=''
          className={"cta"}
          rel='nofollow noopener'
          id='cro-statsbtn-call'
          onClick={() => gtagCounter("cro-mainbtn-call")}
        >
          Schedule a FREE discovery call{" "}
          <span>
            <Image
              src={"/brandimages/right-arrow.png"}
              alt={"Modern way to find your trend topics."}
              width={22}
              height={22}
            />
          </span>
        </a>
      </Row>
      <h2 className='heading graydient'>
        Look what our clients have to say about us!
      </h2>
      <div className='section-wrapper testimonial-wrapper mobile-only'>
        <Slider
          {...mobileTestimonialSettings}
          className='testimonials mobile-only mobile-testimonial-slider'
        >
          <div className='testimonial-inner'>
            <Image
              src={`/brandimages/pages/cro-profile-01.png`}
              alt={"Renato"}
              width={75}
              height={75}
              className='testimonial-img'
            />
            <div className='orange-stars'>
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
            </div>
            <p>
              Modern Tips re-designed our landing page and BOOM! These guys
              managed to increase our conversion rate by 21% with the new
              landing page. Plus, i never seen nothing being designed and
              developed this fast. Ultra recommended! Thanks to the team!
            </p>

            <br />

            <div className='bottom'>
              <div className='left-column'>
                <h3>Mannuel K.</h3>
                <p>Business Owner</p>
              </div>
              <div className='right-column'>
                <Image
                  src={`/brandimages/pages/cro-like.png`}
                  alt={"Renato"}
                  width={17}
                  height={17}
                  className=''
                />{" "}
                Testimonial
              </div>
            </div>
          </div>

          <div className='testimonial-inner'>
            <Image
              src={`/brandimages/pages/cro-profile-02.png`}
              alt={"Renato"}
              width={75}
              height={75}
              className='testimonial-img'
            />
            <div className='orange-stars'>
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
              <Image
                src={`/brandimages/pages/cro-star.png`}
                alt={"Star"}
                width={18}
                height={18}
              />
            </div>
            <p>
              Creativity team is now with us for 4 only months now and we
              already doubled our store revenue!!
            </p>
            <p>
              Never tought that design could impact our numbers this much..
              thanks CB is all I can say
            </p>
            <br />
            <br />
            <br />
            <div className='bottom'>
              <div className='left-column'>
                <h3>Verni J.</h3>
                <p>Business Owner</p>
              </div>
              <div className='right-column'>
                <Image
                  src={`/brandimages/pages/cro-like.png`}
                  alt={"Renato"}
                  width={17}
                  height={17}
                  className=''
                />{" "}
                Testimonial
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <Row
        opt={{
          classes: "section-wrapper testimonials desktop-only",
          isBoxed: true,
          numColumns: 2,
        }}
      >
        <div className='testimonial-inner'>
          <Image
            src={`/brandimages/pages/cro-profile-01.png`}
            alt={"Renato"}
            width={75}
            height={75}
            className='testimonial-img'
          />
          <div className='orange-stars'>
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
          </div>
          <p>
            Modern Tips re-designed our landing page and BOOM! These guys
            managed to increase our conversion rate by 21% with the new landing
            page. Plus, i never seen nothing being designed and developed this
            fast. Ultra recommended! Thanks to the team!
          </p>
          <br />
          <div className='bottom'>
            <div className='left-column'>
              <h3>Mannuel K.</h3>
              <p>Business Owner</p>
            </div>
            <div className='right-column'>
              <Image
                src={`/brandimages/pages/cro-like.png`}
                alt={"Renato"}
                width={17}
                height={17}
                className=''
              />{" "}
              Testimonial
            </div>
          </div>
        </div>

        <div className='testimonial-inner'>
          <Image
            src={`/brandimages/pages/cro-profile-02.png`}
            alt={"Renato"}
            width={75}
            height={75}
            className='testimonial-img'
          />
          <div className='orange-stars'>
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
            <Image
              src={`/brandimages/pages/cro-star.png`}
              alt={"Star"}
              width={18}
              height={18}
            />
          </div>
          <p>
            creativity team is now with us for 4 only months now and we already
            doubled our store revenue!! Never tought that design could impact
            our numbers this much.. thanks CB is all I can say
          </p>
          <div className='bottom'>
            <div className='left-column'>
              <h3>Verni J.</h3>
              <p>Business Owner</p>
            </div>
            <div className='right-column'>
              <Image
                src={`/brandimages/pages/cro-like.png`}
                alt={"Renato"}
                width={17}
                height={17}
                className=''
              />{" "}
              Testimonial
            </div>
          </div>
        </div>
      </Row>
      <h2 className='heading graydient'>Why work with us?</h2>
      <Row opt={{ classes: "section-wrapper orangeSection", isBoxed: true }}>
        <div className='inner-section'>
          <Image
            src={`/brandimages/pages/cro-orange-check.png`}
            alt={"Star"}
            width={64}
            height={64}
            className='icon'
          />
          <Image
            src={`/brandimages/pages/cro-orange-box-img-1.png`}
            alt={"Star"}
            width={398}
            height={299}
            className='float-right desktop-only'
          />
          <p>
            Don't make the same costly mistakes that other business owners do.
            Invest in optimizing your website for higher conversions instead of
            relying on guesswork.
          </p>

          <p className='hack-title'>
            Experience the power of CRO with tailored funnels and custom pages
            for your products/services.
          </p>
        </div>
      </Row>
      <h2 className='heading graydient'>But we get it</h2>
      <Row
        opt={{ classes: "section-wrapper-small orangeSection", isBoxed: true }}
      >
        <div className='inner-section'>
          <Image
            src={`/brandimages/pages/cro-orange-check.png`}
            alt={"Star"}
            width={64}
            height={64}
            className='icon'
          />

          <Image
            src={`/brandimages/pages/cro-orange-box-img-2.png`}
            alt={"Star"}
            width={398}
            height={299}
            className='float-right img-bottom desktop-only'
          />
          <p>
            Not everyone has the expertise to leverage analytics for funnel and
            page optimization. Rest assured, each member of our team boasts a
            minimum of 7 years of formidable experience in either Design,
            Technology and Data Analytics
          </p>
          <p>
            Unlock the power of data-driven website optimization with our
            seasoned team.
          </p>
        </div>
      </Row>
      <Row
        opt={{
          classes: "section-wrapper btns-center",
          isBoxed: true,
          numColumns: 1,
        }}
      >
        <a
          href={convertion?.calendlyLink}
          alt=''
          className={"cta"}
          rel='nofollow noopener'
          target='_blank'
          id='cro-whyus-call'
          onClick={() => gtagCounter("cro-mainbtn-call")}
        >
          Schedule a FREE discovery call{" "}
          <span>
            <Image
              src={"/brandimages/right-arrow.png"}
              alt={"Modern way to find your trend topics."}
              width={22}
              height={22}
            />
          </span>
        </a>
      </Row>
      <div>
        <h2 className='heading graydient' id='benefits'>
          This means that when working with us you’ll have
        </h2>

        <div className='section-wrapper border-orange-gray'>
          <Row opt={{ isBoxed: true, classes: "six-box" }}>
            <div className='border-orange-gradient exclude'></div>

            <Row opt={{ numColumns: 3, classes: "six-box-inner" }}>
              <div className='box'>
                <Image
                  src={"/brandimages/pages/cro-six-box-1.png"}
                  alt={"Modern way to find your trend topics."}
                  width={24}
                  height={24}
                />

                <h3>Guaranteed Results Process</h3>
                <p>
                  Clear and straightforward process with guaranteed results.
                </p>
              </div>
              <div className='box'>
                <Image
                  src={"/brandimages/pages/home-icon-kanban-fill.png"}
                  alt={"Modern way to find your trend topics."}
                  width={24}
                  height={24}
                />
                <h3>Detailed Audit & Custom Video</h3>
                <p>Detailed website audit and report w/ custom video.</p>
              </div>
              <div className='box'>
                <Image
                  src={"/brandimages/pages/cro-six-box-3.png"}
                  alt={"Modern way to find your trend topics."}
                  width={24}
                  height={24}
                />
                <h3>Top-notch Design & Development</h3>
                <p>Top-notch design and development in any platform.</p>
              </div>
              <div className='box'>
                <Image
                  src={"/brandimages/pages/cro-six-box-4.png"}
                  alt={"Modern way to find your trend topics."}
                  width={24}
                  height={24}
                />

                <h3>Higher Conversions & Order Value</h3>
                <p>Increased conversion rates and average order value.</p>
              </div>
              <div className='box'>
                <Image
                  src={"/brandimages/pages/cro-six-box-5.png"}
                  alt={"Modern way to find your trend topics."}
                  width={24}
                  height={24}
                />
                <h3>Maximized ROAS for Scaling Ads</h3>
                <p>Better ROAS that allows you to scale your ads.</p>
              </div>
              <div className='box'>
                <Image
                  src={"/brandimages/pages/cro-six-box-6.png"}
                  alt={"Modern way to find your trend topics."}
                  width={24}
                  height={24}
                />
                <h3>Tailored Content</h3>
                <p>
                  Tailored content strategies for optimal engagement and
                  conversions.
                </p>
              </div>
            </Row>
          </Row>
        </div>
      </div>
      <div>
        <h2 className='heading graydient'>We work with</h2>

        <Row
          opt={{ numColumns: 2, classes: "section-wrapper two-boxes-wrapper" }}
        >
          <div className='two-boxes-img'>
            <Image
              src={"/brandimages/pages/cro-two-imgs-1.jpg"}
              alt={"Modern way to find your trend topics."}
              width={588}
              height={201}
            />
            <div className='paragraph-wrapper'>
              <p>
                While many of our clients are E-Commerce or SaaS brands, our
                solutions cater to various industries and business types. We
                maintain a straightforward approach in our processes to assist
                business owners of all backgrounds in achieving their conversion
                goals while understanding how our optimizations have positively
                affected and influenced their brand.
              </p>
            </div>
          </div>
          <div className='two-boxes-img'>
            <Image
              src={"/brandimages/pages/cro-two-imgs-2.jpg"}
              alt={"Modern way to find your trend topics."}
              width={588}
              height={201}
            />
            <div className='paragraph-wrapper'>
              <p>
                We have in-house teams dedicated to every step of the
                optimization process. Data analysts handling the audits,
                designers that craft your pages and developers that give life to
                those same pages. When working with us, you don’t have to do a
                thing … except choosing the right solution for your business.
              </p>
            </div>
          </div>
        </Row>
      </div>
      <h2 id='pricing' className='heading graydient'>
        Pricing
      </h2>
      <div className='section-wrapper pricing desktop-only'>
        <Row opt={{ classes: "pricing-inner", numColumns: 3, isBoxed: true }}>
          <div className='price-box white'>
            <div className='inner-price-box'>
              <Image
                src={"/brandimages/pages/cro-price-icon-1.png"}
                className={`float-right`}
                alt={"Modern way to find your trend topics."}
                width={46}
                height={46}
              />
              <h2>CRO Audit and Report</h2>
              <h3>For Brands of all sizes.</h3>
              <h4>Delivery Time: Max. 5 Days</h4>
              <p className='price'>€499</p>
              <hr className='gray-hr' />

              <p className='b-paragraph'>
                You'll receive a personalized video-report from one of our
                analysts, detailing every leak and bad-performer on your
                website's funnel.
              </p>
              <p className='b-paragraph'>
                In addition you'll also get a document with TONS of custom
                recommendations, suggested A/B tests, and immediate fixes to to
                squeeze the most revenue out of each visitor.
              </p>
              <a
                href={convertion?.calendlyLink}
                className='cta whiteBtn'
                rel='nofollow noopener'
                id='cro-price-audit'
                onClick={() => gtagCounter("cro-price-audit")}
                target='_blank'
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className='price-box orange'>
            <div className='inner-price-box'>
              <Image
                src={"/brandimages/pages/cro-price-icon-2.png"}
                className={`float-right`}
                alt={"Modern way to find your trend topics."}
                width={46}
                height={46}
              />
              <h2>
                On-Going Optimization <span>Popular</span>
              </h2>
              <h3>Monthly Regular Split Testing</h3>
              <h4>For brands with at least 20,000 monthly website visitors.</h4>
              <h5>Let’s Talk</h5>
              {/* <hr className='black-hr' /> */}
              <p className='b-paragraph'>
                This is our killer offer for those who already have a stablished
                store and want to take the big step.
              </p>

              <p className='b-paragraph'>
                On a monthly basis, our team will conduct audits, create new
                designs, and try at least 2-3 split tests.
              </p>
              <p className='b-paragraph'>
                This will allow us to consistently implement data-backed
                optimizations based on user-behaviour.
              </p>

              <a
                href={convertion?.calendlyLink}
                rel='nofollow noopener'
                target='_blank'
                id='cro-price-ongoing'
                onClick={() => gtagCounter("cro-price-ongoing")}
                className='cta'
              >
                Book a FREE Strategic Call Now{" "}
                <Image
                  src={"/brandimages/heading-right-arrow.png"}
                  alt={"Modern way to find your trend topics."}
                  className='heading-cro-arrow'
                  width={22}
                  height={22}
                  unoptimized
                />{" "}
              </a>
            </div>
          </div>
          <div className='price-box white'>
            <div className='inner-price-box'>
              <Image
                src={"/brandimages/pages/cro-price-icon-1.png"}
                className={`float-right`}
                alt={"Pricing"}
                width={46}
                height={46}
              />
              <h2>Landing Page Design and Development</h2>
              <h3>For Brands of all sizes.</h3>
              <h4>Delivery Time: From 14 Days</h4>
              <p className='price'>
                €2999 <span>Unlimited Revisions</span>
              </p>
              <hr className='gray-hr' />

              <p className='b-paragraph'>
                If you already have a landing page or plan to launch a new one
                for your product/service, this is for you.
              </p>

              <p className='b-paragraph'>
                Our team will design and develop a hyper-converting landing
                page, tailored to your branding and niche. Expect a
                fully-functional, responsive and user-centered website.
              </p>

              <a
                href={convertion?.calendlyLink}
                className='cta whiteBtn'
                rel='nofollow noopener'
                id='cro-price-landing'
                onClick={() => gtagCounter("cro-price-landing")}
                target='_blank'
              >
                Get Started Now
              </a>
            </div>
          </div>
        </Row>
      </div>
      <div className='section-wrapper mobile-only pricing'>
        <Slider className='' {...mobilePricingSettings}>
          <Row opt={{ classes: "pricing-inner", numColumns: 1, isBoxed: true }}>
            <div className='price-box white'>
              <div className='inner-price-box mobile'>
                <Image
                  src={"/brandimages/pages/cro-price-icon-1.png"}
                  alt={"Pricing"}
                  className={`float-right`}
                  width={46}
                  height={46}
                />
                <h2>CRO Audit and Report</h2>
                <h3>For Brands of all sizes.</h3>
                <h4>Delivery Time: Max. 5 Days</h4>
                <p className='price'>€499</p>
                <hr className='gray-hr' />

                <p className='b-paragraph'>
                  You'll receive a personalized video-report from one of our
                  analysts, detailing every leak and bad-performer on your
                  website's funnel.
                </p>
                <p className='b-paragraph'>
                  In addition you'll also get a document with TONS of custom
                  recommendations, suggested A/B tests, and immediate fixes to
                  to squeeze the most revenue out of each visitor.
                </p>
                <a
                  href={convertion?.calendlyLink}
                  className='cta whiteBtn'
                  rel='nofollow noopener'
                  id='cro-price-audit'
                  onClick={() => gtagCounter("cro-price-audit")}
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </Row>
          <Row opt={{ classes: "pricing-inner", numColumns: 1, isBoxed: true }}>
            <div className='price-box orange'>
              <div className='inner-price-box mobile'>
                <Image
                  src={"/brandimages/pages/cro-price-icon-2.png"}
                  alt={"Pricing"}
                  className={`float-right`}
                  width={46}
                  height={46}
                />
                <h2>
                  On-Going Optimization <span>Popular</span>
                </h2>
                <h3>Monthly Regular Split Testing</h3>
                <h4>
                  For brands with at least 20,000 monthly website visitors.
                </h4>
                <h5>Let’s Talk</h5>
                {/* <hr className='black-hr' /> */}
                <p className='b-paragraph'>
                  This is our killer offer for those who already have a
                  stablished store and want to take the big step. On a monthly
                  basis, our team will conduct audits, create new designs, and
                  try at least 2-3 split tests.
                </p>

                <p className='b-paragraph'>
                  If your website is under 150,000 monthly visitors, for the
                  first 90 days we guarantee you an increase of 30% in your
                  conversion rate or you'll get your money back, no questions
                  asked.
                </p>
                <a
                  href={convertion?.calendlyLink}
                  rel='nofollow noopener'
                  target='_blank'
                  className='cta'
                  onClick={() => gtagCounter("cro-price-ongoing")}
                  id='cro-price-ongoing'
                >
                  Book a FREE Strategic Call Now{" "}
                  <Image
                    src={"/brandimages/heading-right-arrow.png"}
                    alt={"Modern way to find your trend topics."}
                    className='heading-cro-arrow'
                    width={22}
                    height={22}
                    unoptimized
                  />{" "}
                </a>
              </div>
            </div>
          </Row>
          <Row opt={{ classes: "pricing-inner", numColumns: 1, isBoxed: true }}>
            <div className='price-box white'>
              <div className='inner-price-box mobile'>
                <Image
                  src={"/brandimages/pages/cro-price-icon-1.png"}
                  alt={"Modern way to find your trend topics."}
                  width={46}
                  height={46}
                  className='float-right'
                />
                <h2>Landing Page Design and Development</h2>
                <h3>For Brands of all sizes.</h3>
                <h4>Delivery Time: From 14 Days</h4>
                <p className='price'>
                  €2999 <span>Unlimited Revisions</span>
                </p>
                <hr className='gray-hr' />

                <p className='b-paragraph'>
                  If you already have a landing page or plan to launch a new one
                  for your product/service, this is for you.
                </p>

                <p className='b-paragraph'>
                  Our team will design and develop a hyper-converting landing
                  page, tailored to your branding and niche. Expect a
                  fully-functional, responsive and user-centered website.
                </p>

                <a
                  href={convertion?.calendlyLink}
                  className='cta whiteBtn'
                  rel='nofollow noopener'
                  onClick={() => gtagCounter("cro-price-landing")}
                  id='cro-price-landing'
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </Row>
        </Slider>
      </div>
      <h2 className='heading graydient listing-heading w95' id='process'>
        The process that will allow us to help your business growing
      </h2>
      <Row
        opt={{
          classes: "section-wrapper-small listing",
          numColumns: 2,
          isBoxed: true,
        }}
      >
        <Image
          src={"/brandimages/pages/cro-listing.png"}
          alt={"Modern way to find your trend topics."}
          width={428}
          height={428}
          className=''
        />
        <div className='inner-listing'>
          <ol>
            <li>Choose the solution that suits you the best</li>
            <li>Book a free meeting with us to discuss your needs</li>
            <li>
              Let our team deliver you everything you need to increase your
              conversion rates
            </li>
            <li>
              Sit back and enjoy the show of turning your clicks into more
              revenue
            </li>
          </ol>
        </div>
      </Row>
      <Row
        opt={{
          classes: "section-wrapper btns-center",
          isBoxed: true,
          numColumns: 1,
        }}
      >
        <a
          href={convertion?.calendlyLink}
          target='_blank'
          alt=''
          className={"cta"}
          rel='nofollow noopener'
          id='ssm-list-call'
          onClick={() => gtagCounter("ssm-list-call")}
        >
          Schedule a FREE discovery call{" "}
          <span>
            <Image
              src={"/brandimages/right-arrow.png"}
              alt={"Modern way to find your trend topics."}
              width={22}
              height={22}
            />
          </span>
        </a>
      </Row>
      <FAQContainer
        faqs={mainConfigs?.pages?.convertion.faq}
        gtag={"cro-faq-btn"}
      />
      <Row opt={{ classes: "footer-wrapper", isBoxed: true }}>
        <FooterHighlightContainer
          // title='CRO - Designs that sell'
          // paragraph='We help brands converting their website visitors into actual customers
          // Increase your conversion rates and make more money without spending more on ads'
          title={convertion.footerHighlight.title}
          paragraph={convertion.footerHighlight.paragraph}
          blackHole={true}
          cta={convertion.calendlyLink}
        />

        <hr className='half-hr' />

        <FeedbackContainer
          emailPage={convertion?.feedbackEmail}
          emailFolder={`convertion`}
          subject={convertion?.feedBackSubject}
          gtag={"cro-bottom-request"}
        />

        <hr />
        <FooterContainer
          label='generalmoderntips.com'
          link='https://generalmoderntips.com'
        />
      </Row>
    </div>
  );
};

export default Convertion;
