import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BlogList from "../containers/BlogListContainer";
import { getAllPosts } from "../lib/api";
import SearchInputContainer from "../containers/SearchInputContainer";
import Image from "next/image";

import SeoContainer from "../containers/SeoContainer";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import mainMenu from "../configs/main-menu.json";
// import mainConfigs from "../configs/main-infos.json";
import mainConfigs2 from "../../settings.json";
// const index = mainConfigs?.pages?.index;
const business = mainConfigs2?.business;
const website = mainConfigs2?.website;

const infos = {
  slug: "",
  title: `${"Home"} - ${business?.brandName}`,
  description: business?.description,
  author: business?.brandName,
  brandPerson: business?.brandName,
  siteUrl: website?.siteUrl,
  brandName: business?.brandName,
  brandEmail: business?.brandEmail,
  brandPhone: business?.brandPhone,
  brandDescription: business?.brandDescription,
  brandLogo: `${website?.siteUrl}/${business?.brandLogo}`,
  brandCardImage: `${website?.siteUrl}/${business?.brandCardImage}`,
  featuredImage: `${website?.siteUrl}/${business?.brandCardImage}`,
  datePublished: website?.date,
  i18n: website?.i18n,
  keywords: website?.keywords,
  questions: [],
  topology: "page",
  articleUrl: `${website?.siteUrl}/${"index?.slug"}`,
  themeColor: website?.themeColor,
  sameAs: business?.sameAs,
  // twitter: business?.shortName,
};

const Home = ({ posts }) => {
  const [btnGClick, useBtnGClick] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);

  const fetchApiData = async () => {
    const res = await fetch(`${website?.siteUrl}/geolocation`);
    const data = await res.json();
    // setMensen(data);
    setUserInfos(data);
    setState(data?.geo?.subdivision?.name || "California");
    return setCity(data?.geo?.city || "Los Angeles");
  };

  // Pass data to the page via props
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      useBtnGClick(null);
    }
  };
  useEffect(() => {
    // Fetch data from API if `location` object is set
    if (!city || !state) {
      fetchApiData()
        .then(function (response) {
          if (!response.ok) {
            return null;
          }
        })
        .catch(function () {
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
          pageHasMenu: true,
        }}
        mainMenu={mainMenu.menu.items}
        hasMenu={false}
        scheduleLink={"index?.calendlyLink"}
        gtag={"gtag"}
        gtagCounter={gtagCounter}
        pathname={pathname}
      />
      <div className='hero-wrapper'>
        <div className='hero search-hero'>
          <Image
            src={`/brandimages/hero-img.jpg`}
            alt={"Hero image"}
            width={1024}
            height={650}
            className='hero-img'
          />
          <div className='row-config inner-hero'>
            <h1>Search {business?.brandName}</h1>
            <SearchInputContainer
              siteUrl={website?.siteUrl}
              subDomain={"search"}
            />
          </div>
        </div>
      </div>

      <main className='main-container-wrapper'>
        <div className='main-container'>
          <div className='news-grid'>
            <BlogList
              posts={posts}
              postsToShow={website?.postsToShow}
              city={city || "Los Angeles"}
              state={state || "California"}
            />
          </div>
        </div>
      </main>

      <div className='wrapper-box'></div>
      <div className='footer-wrapper'>
        <FooterContainer />
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
