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
  slug: "privacy-policy",
  title: `Privacy Policy - ${mainConfigs.business.brandName}`,
  description: "This is a Privacy Policy page.",
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
          <h1>Privacy Policy</h1>
          <p>Effective date: December 31, 2019</p>
          <p>
            ModernTips (“us”, “we”, or “our”) operates the
            https://www.moderntips.com website (hereinafter referred to as the
            “Service”).
          </p>
          <p>
            This page informs you of our policies regarding the collection, use
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>
          <p>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, the terms used in this Privacy Policy have the same
            meanings as in our Terms and Conditions, accessible from
            https://www.moderntips.com
          </p>
          <h2>Definitions</h2>
          <ul>
            <li>
              <strong>Service</strong> Service is the https://www.moderntips.com
              website operated by ModernTips
            </li>
            <li>
              <strong>Personal Data</strong> Personal Data means data about a
              living individual who can be identified from those data (or from
              those and other information either in our possession or likely to
              come into our possession).
            </li>
            <li>
              <strong>Usage Data</strong> Usage Data is data collected
              automatically either generated by the use of the Service or from
              the Service infrastructure itself (for example, the duration of a
              page visit).
            </li>
            <li>
              <strong>Cookies</strong> Cookies are small files stored on your
              device (computer or mobile device).
            </li>
            <li>
              <strong>Data Controller</strong> Data Controller means the natural
              or legal person who (either alone or jointly or in common with
              other persons) determines the purposes for which and the manner in
              which any personal information are, or are to be, processed.For
              the purpose of this Privacy Policy, we are a Data Controller of
              your Personal Data.
            </li>
            <li>
              <strong>Data Processors (or Service Providers)</strong> Data
              Processor (or Service Provider) means any natural or legal person
              who processes the data on behalf of the Data Controller. We may
              use the services of various Service Providers in order to process
              your data more effectively.
            </li>
            <li>
              <strong>Data Subject (or User)</strong> Data Subject is any living
              individual who is using our Service and is the subject of Personal
              Data.
            </li>
          </ul>
          <h2>Information Collection and Use</h2>
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <h3>Types of Data Collected</h3>
          <p>
            <strong>Personal Data</strong>
          </p>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (“Personal Data”). Personally identifiable information
            may include, but is not limited to:
          </p>
          <p>* Email address</p>
          <p>
            We may use your Personal Data to contact you with newsletters,
            marketing or promotional materials and other information that may be
            of interest to you. You may opt out of receiving any, or all, of
            these communications from us by following the unsubscribe link or
            the instructions provided in any email we send.
          </p>
          <p>
            <strong>Usage Information</strong>
          </p>
          <p>
            We may also collect information on how the Service is accessed and
            used (“Usage Data”). This Usage Data may include information such as
            your computer’s Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that you visit, the
            time and date of your visit, the time spent on those pages, unique
            device identifiers and other diagnostic data.
          </p>
          <p>
            <strong>Tracking & Cookies Data</strong>
          </p>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our Service and we hold certain information.
          </p>
          <p>
            Cookies are files with a small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Other tracking technologies are
            also used such as beacons, tags and scripts to collect and track
            information and to improve and analyse our Service.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Service.
          </p>
          <p>Examples of Cookies we use:</p>
          <ul>
            <li>
              <strong>Session Cookies.</strong> We use Session Cookies to
              operate our Service.
            </li>
            <li>
              <strong>Preference Cookies.</strong> We use Preference Cookies to
              remember your preferences and various settings.
            </li>
            <li>
              <strong>Security Cookies.</strong> We use Security Cookies for
              security purposes.
            </li>
            <li>
              <strong>Advertising Cookies.</strong> Advertising Cookies are used
              to serve you with advertisements that may be relevant to you and
              your interests on our Website.
            </li>
          </ul>
          <h2>Use of Data</h2>
          <p>ModernTips uses the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our Service
            </li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>
              To provide you with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless you have opted not to receive such information
            </li>
          </ul>
          <p>
            Legal Basis for Processing Personal Data under the General Data
            Protection Regulation (GDPR)
          </p>
          <p>
            If you are from the European Economic Area (EEA), ModernTips legal
            basis for collecting and using the personal information described in
            this Privacy Policy depends on the Personal Data we collect and the
            specific context in which we collect it.
          </p>
          <p>ModernTips may process your Personal Data because:</p>
          <ul>
            <li>We need to perform a contract with you</li>
            <li>You have given us permission to do so</li>
            <li>
              The processing is in our legitimate interests and it is not
              overridden by your rights
            </li>
            <li>To comply with the law</li>
          </ul>
          <h2>Retention of Data</h2>
          <p>
            ModernTips will retain your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes
            and enforce our legal agreements and policies.
          </p>
          <p>
            ModernTips will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of our Service, or we are legally
            obligated to retain this data for longer periods.
          </p>
          <h2>Transfer of Data</h2>
          <p>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ from those of your jurisdiction.
          </p>
          <p>
            If you are located outside United States and choose to provide
            information to us, please note that we transfer the data, including
            Personal Data, to United States and process it there.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of
            such information represents your agreement to that transfer.
          </p>
          <p>
            ModernTips will take all the steps reasonably necessary to ensure
            that your data is treated securely and in accordance with this
            Privacy Policy and no transfer of your Personal Data will take place
            to an organisation or a country unless there are adequate controls
            in place including the security of your data and other personal
            information.
          </p>
          <h2>Disclosure of Data</h2>
          <h3>Business Transaction</h3>
          If ModernTips is involved in a merger, acquisition or asset sale, your
          Personal Data may be transferred. We will provide notice before your
          Personal Data is transferred and becomes subject to a different
          Privacy Policy.
          <h3>Disclosure for Law Enforcement</h3>
          <p>
            Under certain circumstances, ModernTips may be required to disclose
            your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <h3>Legal Requirements</h3>
          <p>
            ModernTips may disclose your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul>
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of ModernTips</li>
            <li>
              To prevent or investigate possible wrongdoing in connection with
              the Service
            </li>
            <li>
              To protect the personal safety of users of the Service or the
              public
            </li>
            <li>To protect against legal liability</li>
          </ul>
          <h2>Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>
          <p>
            Our Policy on “Do Not Track” Signals under the California Online
            Protection Act (CalOPPA)
          </p>
          <p>
            We do not support Do Not Track (“DNT”). Do Not Track is a preference
            you can set in your web browser to inform websites that you do not
            want to be tracked.
          </p>
          <p>
            You can enable or disable Do Not Track by visiting the Preferences
            or Settings page of your web browser.
          </p>
          <p>
            Your Data Protection Rights under the General Data Protection
            Regulation (GDPR)
          </p>
          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. ModernTips aims to take reasonable
            steps to allow you to correct, amend, delete or limit the use of
            your Personal Data.
          </p>
          <p>
            If you wish to be informed about what Personal Data we hold about
            you and if you want it to be removed from our systems, please
            contact us.
          </p>
          <p>
            In certain circumstances, you have the following data protection
            rights:
          </p>
          <ul>
            <li>
              <strong>
                The right to access, update or delete the information we have on
                you.
              </strong>
              Whenever made possible, you can access, update or request deletion
              of your Personal Data directly within your account settings
              section. If you are unable to perform these actions yourself,
              please contact us to assist you.
            </li>
            <li>
              <strong>The right of rectification.</strong> You have the right to
              have your information rectified if that information is inaccurate
              or incomplete.
            </li>
            <li>
              <strong>The right to object.</strong> You have the right to object
              to our processing of your Personal Data.
            </li>
            <li>
              <strong>The right of restriction.</strong> You have the right to
              request that we restrict the processing of your personal
              information.
            </li>
            <li>
              <strong>The right to data portability.</strong> You have the right
              to be provided with a copy of the information we have on you in a
              structured, machine-readable and commonly used format.
            </li>
            <li>
              <strong>The right to withdraw consent.</strong> You also have the
              right to withdraw your consent at any time where ModernTips relied
              on your consent to process your personal information.
            </li>
          </ul>
          <p>
            Please note that we may ask you to verify your identity before
            responding to such requests.
          </p>
          <p>
            You have the right to complain to a Data Protection Authority about
            our collection and use of your Personal Data. For more information,
            please contact your local data protection authority in the European
            Economic Area (EEA).
          </p>
          <h2>Service Providers</h2>
          <p>
            We may employ third party companies and individuals to facilitate
            our Service (“Service Providers”), provide the Service on our
            behalf, perform Service-related services or assist us in analysing
            how our Service is used.
          </p>
          <p>
            These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose.
          </p>
          <h3>Analytics Providers</h3>
          <p>
            We may use third-party Service Providers to monitor and analyse the
            use of our Service.
          </p>
          <ul>
            <li>
              <strong>Google Analytics</strong> Google Analytics is a web
              analytics service offered by Google that tracks and reports
              website traffic. Google uses the data collected to track and
              monitor the use of our Service. This data is shared with other
              Google services. Google may use the collected data to
              contextualise and personalise the ads of its own advertising
              network.You can opt-out of having made your activity on the
              Service available to Google Analytics by installing the Google
              Analytics opt-out browser add-on. The add-on prevents the Google
              Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing
              information with Google Analytics about visits activity.
            </li>
          </ul>
          <p>
            For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms web page: 
            <a
              href='https://policies.google.com/privacy?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://policies.google.com/privacy?hl=en
            </a>
          </p>
          <h3>Advertising</h3>
          <p>
            We may use third-party Service Providers to show advertisements to
            you to help support and maintain our Service.
          </p>
          <ul>
            <li>
              <strong>Google AdSense & DoubleClick Cookie</strong> Google, as a
              third party vendor, uses cookies to serve ads on our Service.
              Google’s use of the DoubleClick cookie enables it and its partners
              to serve ads to our users based on their visit to our Service or
              other websites on the Internet.You may opt out of the use of the
              DoubleClick Cookie for interest-based advertising by visiting the
              Google Ads Settings web page: 
              <a
                href='http://www.google.com/ads/preferences/'
                target='_blank'
                rel='noopener noreferrer'
              >
                http://www.google.com/ads/preferences/
              </a>
            </li>
          </ul>
          <h3>Behavioral Remarketing</h3>
          <ul>
            <li>
              <strong>Google AdWords</strong> Google AdWords remarketing service
              is provided by Google Inc.You can opt-out of Google Analytics for
              Display Advertising and customize the Google Display Network ads
              by visiting the Google Ads Settings page: 
              <a
                href='http://www.google.com/settings/ads'
                target='_blank'
                rel='noopener noreferrer'
              >
                http://www.google.com/settings/ads
              </a>
            </li>
          </ul>
          <p>
            Google also recommends installing the Google Analytics Opt-out
            Browser Add-on – 
            <a
              href='https://tools.google.com/dlpage/gaoptout'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            – for your web browser. Google Analytics Opt-out Browser Add-on
            provides visitors with the ability to prevent their data from being
            collected and used by Google Analytics.
          </p>
          <p>
            For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms web page: 
            <a
              href='https://policies.google.com/privacy?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://policies.google.com/privacy?hl=en
            </a>
          </p>
          <ul>
            <li>
              <strong>Facebook</strong> Facebook remarketing service is provided
              by Facebook Inc.You can learn more about interest-based
              advertising from Facebook by visiting this page: 
              <a
                href='https://www.facebook.com/help/164968693837950'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://www.facebook.com/help/164968693837950
              </a>
            </li>
          </ul>
          <p>
            To opt-out from Facebook’s interest-based ads follow these
            instructions from Facebook: 
            <a
              href='https://www.facebook.com/help/568137493302217'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://www.facebook.com/help/568137493302217
            </a>
          </p>
          <p>
            Facebook adheres to the Self-Regulatory Principles for Online
            Behavioral Advertising established by the Digital Advertising
            Alliance. You can also opt-out from Facebook and other participating
            companies through the Digital Advertising Alliance in the USA 
            <a
              href='http://www.aboutads.info/choices/'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://www.aboutads.info/choices/
            </a>
            , the Digital Advertising Alliance of Canada in Canada 
            <a
              href='http://youradchoices.ca/'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://youradchoices.ca/
            </a>
             or the European Interactive Digital Advertising Alliance in Europe 
            <a
              href='http://www.youronlinechoices.eu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://www.youronlinechoices.eu/
            </a>
            , or opt-out using your mobile device settings.
          </p>
          <p>
            For more information on the privacy practices of Facebook, please
            visit Facebook’s Data Policy: 
            <a
              href='https://www.facebook.com/privacy/explanation'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://www.facebook.com/privacy/explanation
            </a>
          </p>
          <h2>Links to Other Sites</h2>
          <p>
            Our Service may contain links to other sites that are not operated
            by us. If you click a third party link, you will be directed to that
            third party’s site. We strongly advise you to review the Privacy
            Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>
          <h2>Children’s Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 18
            (“Children”).
          </p>
          <p>
            We do not knowingly collect personally identifiable information from
            anyone under the age of 18. If you are a parent or guardian and you
            are aware that your Child has provided us with Personal Data, please
            contact us. If we become aware that we have collected Personal Data
            from children without verification of parental consent, we take
            steps to remove that information from our servers.
          </p>
          <p>Changes to This Privacy Policy</p>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our
            Service, prior to the change becoming effective and update the
            “effective date” at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul>
            <li>By email: info@moderntips.com</li>
            <li>
              By visiting this page on our website:
              https://www.moderntips.com/about/
            </li>
            <li>By mail: PO Box 515381, Los Angeles, CA 90051-6681</li>
          </ul>
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
