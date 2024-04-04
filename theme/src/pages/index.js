import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BlogList from "../containers/BlogListContainer";
import { getAllPosts } from "../lib/api";
import SearchInputContainer from "../containers/SearchInputContainer";
import Image from "next/image";

import SeoContainer from "../containers/SeoContainer";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import mainConfigs from "../../../content/public/manifest.json";

const { business, website, linkTree } = mainConfigs;
const brandCardImage = business?.brandCardImage?.includes("http")
  ? business?.brandCardImage
  : mainConfigs.scope + "/" + business?.brandCardImage;
const infos = {
  slug: "",
  title: `${"Home"} - ${mainConfigs?.name}`,
  description: business?.description,
  author: mainConfigs?.name,
  brandPerson: mainConfigs?.name,
  siteUrl: mainConfigs.scope,
  brandName: mainConfigs?.name,
  brandEmail: business?.brandEmail,
  brandPhone: business?.brandPhone,
  brandDescription: business?.brandDescription,
  brandLogo: `${mainConfigs.scope}/${business?.brandLogo}`,
  brandCardImage: brandCardImage,
  featuredImage: brandCardImage,
  datePublished: website?.date,
  i18n: website?.i18n,
  keywords: website?.keywords,
  questions: [],
  topology: "page",
  articleUrl: `${mainConfigs.scope}/${"index?.slug"}`,
  themeColor: website?.themeColor,
  sameAs: linkTree,
  // twitter: business?.shortName,
};

const Home = ({ posts }) => {
  const [btnGClick, handleBtnGClick] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [searchClick, setSearchClick] = useState(null);
  const pathnameVAR = usePathname();
  const pathname = pathnameVAR === "/" ? "home" : pathnameVAR.slice(1, -1);

  const fetchApiData = async () => {
    const res = await fetch(`${mainConfigs.scope}/geolocation`);
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
      handleBtnGClick(null);
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
  }, [city, state]);
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
        // mainMenu={mainMenu}
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
            <h1>Search {mainConfigs?.name || ""}</h1>
            <SearchInputContainer
              siteUrl={mainConfigs.scope || ""}
              subDomain={"search"}
            />
            <label htmlFor='post-chooser'>Search for yput post:</label>
            <input list='post-items' id='post-chooser' name='post-chooser' />
            <datalist id='post-items'>
              {posts.map((p, pi) => {
                if (!p?.frontmatter) return null;
                if (
                  !p?.frontmatter?.categories ||
                  p?.frontmatter?.categories[0] === "Hide"
                ) {
                  return null;
                }

                return (
                  <option key={pi} id={p?.slug || "none"}>
                    {p?.frontmatter?.title}
                  </option>
                );
              })}
            </datalist>
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
