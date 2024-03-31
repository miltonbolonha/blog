import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import SinglePostContainer from "../containers/SinglePostContainer";
import mainConfigs from "../configs/main-infos.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
import mainMenu from "../configs/main-menu.json";
import { parse } from "node-html-parser";
// import Script from "next/script";
// import ReactDOMServer from "react-dom/server";

import BlogList from "../containers/BlogListContainer";

const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const SinglePost = ({ post }) => {
  const [btnGClick, setBtnGClick] = useState(null);
  const [promoVisitState, setPromoVisitState] = useState(null);
  const [readMore, setReadMore] = useState(null);
  const [refUrl, setRefUrl] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const getRef = useSearchParams().getAll("ref");
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);
  const doc = parse(post.content);
  // console.log(post);

  const fetchApiData = async () => {
    const res = await fetch(
      `${mainConfigs.website.developmentUrl}/geolocation`
    );
    const data = await res.json();
    // setMensen(data);
    setUserInfos(data);
    setState(data?.geo?.subdivision?.name || "California");
    return setCity(data?.geo?.city || "Los Angeles");
  };
  // const strongSelect = doc?.querySelector("strong");
  // console.log("strongSelect");
  // console.log(
  //   strongSelect?.childNodes?.forEach(str => {
  //     if (str?.innerText?.includes("Fact")) return null;
  //   })
  // );

  // const x = strongSelect.length <= 0
  // const  y = strongSelect.includes('Myth: ')
  // const  c = strongSelect.includes('Fact: ')

  const pSelect = doc?.querySelector("p");
  const excerpt = pSelect?.childNodes[0]?._rawText || "";
  const killSEO =
    post?.frontmatter?.categories?.length > 0 &&
    post?.frontmatter?.categories[0] === "Hide";
  // let categoriesPosts = post?.categoriesPosts?.filter(
  //   pc => pc.slug != post.slug
  // );

  let title = post?.frontmatter?.title.replace(
    "{{city}}",
    city || "Los Angeles"
  );
  title = title.replace("{{state}}", state || "California");

  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      setBtnGClick(null);
    }
  };

  const postHeadings =
    doc?.querySelectorAll("h2").length > 0
      ? doc?.querySelectorAll("h2")
      : doc?.querySelectorAll("h3");

  let headingsTexts = [];
  postHeadings.forEach(
    e =>
      (headingsTexts +=
        e.innerText.replace("Myth: ", "") + ", " || e.innerText + ", ")
  );

  const infos = {
    slug: "/" + post?.slug,
    title: killSEO ? "NO SEO" : `${title} - ${business.brandName}`,
    description: excerpt || post?.frontmatter.description,
    author: website.author,
    brandPerson: website.brandPerson,
    siteUrl: website.siteUrl,
    brandName: business.brandName,
    brandEmail: business.brandEmail,
    brandPhone: business.brandPhone,
    brandDescription: business.brandDescription,
    brandLogo: `${website.siteUrl}/${business.brandLogo}`,
    brandCardImage: `${website.siteUrl}/${business.brandCardImage}`,
    featuredImage: `${website.siteUrl}/posts/${post?.frontmatter?.image}`,
    datePublished: website.datePublished,
    i18n: website.i18n,
    keywords: post?.frontmatter?.tag || website.keywords,
    questions: [],
    topology: "post",
    articleUrl: `${website.siteUrl}/${post.slug}`,
    themeColor: website.themeColor,
    sameAs: business.sameAs,
    twitter: business.shortName,
    articleBody: doc,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getRef?.length === 1 && promoVisitState === null
        ? setPromoVisitState(true)
        : null;
      getRef?.length === 1 && promoVisitState === null
        ? setReadMore(false)
        : null;
    }
    // Fetch data from API if `location` object is set
    if (!city || !state) {
      fetchApiData()
        .then(function (response) {
          if (!response.ok) {
            // console.log("response");
            // console.log(response);
            // console.log("Network response was not ok.");
            return null;
          }
        })
        .catch(function () {
          // console.log(
          //   "There has been a problem with your fetch operation: " +
          //     error.message
          // );
          return null;
        });
    }
  }, [city, state, promoVisitState, getRef]);
  return (
    <>
      <div className='single-post post-container'>
        <SeoContainer killSeo={killSEO ? true : false} data={infos} />
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
        {post?.frontmatter.layout === "post" ? (
          <SinglePostContainer
            siteKeywords={website.keywords}
            highlightImage={post?.frontmatter?.image || null}
            authorImg={"imgHolder"}
            date={post?.frontmatter?.date || null}
            author={mainConfigs.business.brandName}
            html={post?.content || null}
            title={title || post?.frontmatter?.title}
            category={
              post?.frontmatter?.categories[0] ||
              post?.frontmatter?.categories ||
              []
            }
            wordCount={10}
            promoVisitState={promoVisitState}
            setReadMore={setReadMore}
            readMore={readMore}
            topic={post?.frontmatter?.tag[0] || []}
            keywords={post?.frontmatter?.keywords || []}
            excerpt={excerpt}
            parseContent={doc}
            relatedPosts={[]}
            city={city}
            state={state}
            killSEO={killSEO}
            rampSegment={business.ramp.segment}
          />
        ) : null}

        {post?.type === "categories" &&
        post.relatedPost &&
        !post?.frontmatter?.layout ? (
          <main className='main-container-wrapper'>
            <div className='main-container'>
              <div className='news-grid category'>
                <BlogList
                  posts={post.relatedPost}
                  postsToShow={website.postsToShow}
                  city={city}
                />
              </div>
            </div>
          </main>
        ) : null}

        <div className='footer-wrapper'>
          <FooterContainer />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
