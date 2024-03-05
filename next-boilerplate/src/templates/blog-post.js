import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import SinglePostContainer from "../containers/SinglePostContainer";
import mainConfigs from "../configs/main-infos.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
import mainMenu from "../configs/main-menu.json";
import { parse } from "node-html-parser";

import BlogList from "../templates/blog-list";

const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const BlogPost = ({ post }) => {
  const [btnGClick, setBtnGClick] = useState(null);
  const [promoVisitState, setPromoVisitState] = useState(null);
  const [readMore, setReadMore] = useState(null);
  const [refUrl, setRefUrl] = useState(null);
  const [city, setCity] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const getRef = useSearchParams().getAll("ref");
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);
  const doc = parse(post.content);
  const pSelect = doc?.querySelector("p");
  const excerpt = pSelect?.childNodes[0]?._rawText;

  let categoriesPosts = post?.categoriesPosts?.filter(
    pc => pc.slug != post.slug
  );

  const title = post?.frontmatter?.title.replace(
    "{{city}}",
    city || "Los Angeles"
  );
  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      setBtnGClick(null);
    }
  };
  const fetchApiData = async () => {
    const res = await fetch(
      `${mainConfigs.website.developmentUrl}/geolocation`
    );
    const data = await res.json();
    // setMensen(data);
    setUserInfos(data);
    return setCity(data?.geo?.city || "Los Angeles");
  };

  const infos = {
    slug: index?.slug,
    title:
      post?.frontmatter?.categories?.length > 0 &&
      post?.frontmatter?.categories[0] === "Hide"
        ? "NO SEO"
        : `${title} - ${business.brandName}`,
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
    topology: "pages",
    articleUrl: `${website.siteUrl}/${index?.slug}`,
    themeColor: website.themeColor,
    sameAs: business.sameAs,
    twitter: business.shortName,
    articleBody: post?.content,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // getRef?.length === 1 ? console.log("arnaldoooooooooooooo") : null;
      getRef?.length === 1 && promoVisitState === null
        ? setPromoVisitState(true)
        : null;
      getRef?.length === 1 && promoVisitState === null
        ? setReadMore(false)
        : null;
    }
    // Fetch data from API if `location` object is set
    if (!city) {
      fetchApiData()
        .then(function (response) {
          if (response.ok) {
            console.log(response);
          } else {
            console.log("response");
            console.log(response);
            console.log("Network response was not ok.");
          }
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
        });
    }
  }, [city, promoVisitState, getRef]);
  // console.log("postpostpost");
  // console.log(post);
  return (
    <>
      <div className='single-post post-container'>
        <SeoContainer
          killSeo={
            post?.frontmatter?.categories?.length > 0 &&
            post?.frontmatter?.categories[0] === "Hide"
              ? true
              : false
          }
          data={infos}
        />

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
        {post?.type === "posts" ? (
          <SinglePostContainer
            highlightImage={post?.frontmatter?.image}
            authorImg={"imgHolder"}
            date={post?.frontmatter?.date}
            author={mainConfigs.business.brandName}
            html={post?.content}
            title={title || post?.frontmatter?.title}
            category={
              post?.frontmatter?.categories[0] || post?.frontmatter?.categories
            }
            wordCount={10}
            promoVisitState={promoVisitState}
            setReadMore={setReadMore}
            readMore={readMore}
            topic={post?.frontmatter?.tag[0]}
            excerpt={excerpt}
            parseContent={doc}
            relatedPosts={categoriesPosts}
            city={city}
          />
        ) : null}

        {post?.type === "categories" && post.relatedPost ? (
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
          <FooterContainer
            label='moderntips.com'
            link='https://moderntips.com'
          />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
