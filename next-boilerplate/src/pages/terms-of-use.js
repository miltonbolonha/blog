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
          <h1>Terms and Conditions</h1>
          <p>Last updated: December 31, 2019</p>

          <p>
            Please read these Terms and Conditions (“Terms”, “Terms and
            Conditions”) carefully before using the https://www.moderntips.com
            website (the “Service”) operated by ModernTips (“us”, “we”, or
            “our”).
          </p>

          <p>
            Your access to and use of the Service is conditioned upon your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who wish to access or use the
            Service.
          </p>

          <p>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you do not
            have permission to access the Service.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features and functionality are
            and will remain the exclusive property of ModernTips and its
            licensors. The Service is protected by copyright, trademark, and
            other laws of both the United States and foreign countries. Our
            trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of ModernTips.
          </p>

          <h2>Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third party web sites or services
            that are not owned or controlled by ModernTips.
          </p>

          <p>
            ModernTips has no control over, and assumes no responsibility for
            the content, privacy policies, or practices of any third party web
            sites or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </p>

          <p>
            You acknowledge and agree that ModernTips shall not be responsible
            or liable, directly or indirectly, for any damage or loss caused or
            alleged to be caused by or in connection with use of or reliance on
            any such content, goods or services available on or through any such
            third party web sites or services.
          </p>

          <p>
            We strongly advise you to read the terms and conditions and privacy
            policies of any third party web sites or services that you visit.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately,
            without prior notice or liability, under our sole discretion, for
            any reason whatsoever and without limitation, including but not
            limited to a breach of the Terms.
          </p>

          <p>
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify and hold harmless ModernTips and its
            licensee and licensors, and their employees, contractors, agents,
            officers and directors, from and against any and all claims,
            damages, obligations, losses, liabilities, costs or debt, and
            expenses (including but not limited to attorney’s fees), resulting
            from or arising out of a) your use and access of the Service, or b)
            a breach of these Terms.
          </p>

          <h2>Limitation Of Liability</h2>
          <p>
            In no event shall ModernTips, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Service; (ii) any conduct or
            content of any third party on the Service; (iii) any content
            obtained from the Service; and (iv) unauthorized access, use or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence) or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose.
          </p>

          <h2>Disclaimer</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is
            provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement
            or course of performance.
          </p>

          <p>
            ModernTips its subsidiaries, affiliates, and its licensors do not
            warrant that a) the Service will function uninterrupted, secure or
            available at any particular time or location; b) any errors or
            defects will be corrected; c) the Service is free of viruses or
            other harmful components; or d) the results of using the Service
            will meet your requirements.
          </p>

          <h2>Exclusions</h2>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties
            or the exclusion or limitation of liability for consequential or
            incidental damages, so the limitations above may not apply to you.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of California, United States, without regard to its conflict of
            law provisions.
          </p>

          <p>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have had between us regarding the Service.
          </p>

          <h2>Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will provide
            at least 30 days notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion.
          </p>

          <p>
            By continuing to access or use our Service after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            the Service.
          </p>
          <p>
            ModernTips
            <br />
            PO Box 515381
            <br />
            Los Angeles, CA 90051
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
