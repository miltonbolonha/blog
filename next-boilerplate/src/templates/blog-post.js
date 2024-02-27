import React, { useRef, useState, useEffect } from "react";
import Row from "../containers/RowContainer";
import fetch from "cross-fetch";
import Link from "next/link";

// import SeoContainer from "../containers/SeoContainer";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import SinglePostBlock from "../components/SinglePostBlock";
import mainConfigs from "../configs/main-infos.json";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import SeoContainer from "../containers/SeoContainer";
// import MainWrapperContainer from "../containers/MainWrapperContainer";
import mainMenu from "../configs/main-menu.json";

import BlogList from "../templates/blog-list";
const preContext = {
  context: {
    geo: {
      city: "Los Angeles",
      country: {
        code: "USA",
        name: "United States",
      },
      subdivision: {
        code: "CA",
        name: "California",
      },
      latitude: 0,
      longitude: 0,
      timezone: "America/Los_Angeles",
    },
  },
};
const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const BlogPost = ({
  post,
  searchParams,
  categoryIndex,
  type,
  dataLocation = preContext,
}) => {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [firstRun, setFirstRun] = useState(null);
  const [btnGClick, setBtnGClick] = useState(null);
  const [promoVisitState, setPromoVisitState] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);
  // const [mensen, setMensen] = useState([]);
  console.log("dataLocation");
  console.log(dataLocation);

  // const fetchApiData = async () => {
  //   const res = await fetch(`https://mtcom.netlify.app/geolocation`);
  //   const data = await res.json();
  //   // setMensen(data);
  //   console.log("data");
  //   console.log(data);
  //   console.log("data fimm");
  //   setLocation(data);
  //   return setCity(data?.city || data.geo.city || "Los Angeles");
  // };

  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      setBtnGClick(null);
    }
  };
  // console.log("relatedPostrelatedPost");
  // console.log(post.relatedPost);

  const getRef = useSearchParams().getAll("ref");

  const infos = {
    slug: index?.slug,
    title: `${post?.frontmatter?.title} - ${business.brandName}`,
    description: index?.description,
    author: website.author,
    brandPerson: website.brandPerson,
    siteUrl: website.siteUrl,
    brandName: business.brandName,
    brandEmail: business.brandEmail,
    brandPhone: business.brandPhone,
    brandDescription: business.brandDescription,
    brandLogo: `${website.siteUrl}/${business.brandLogo}`,
    brandCardImage: `${website.siteUrl}/brandimages/pages/${business.brandCardImage}`,
    featuredImage: `${website.siteUrl}/brandimages/posts/${post?.frontmatter?.image}`,
    datePublished: website.datePublished,
    i18n: website.i18n,
    keywords: website.keywords,
    questions: index.faq,
    topology: null,
    articleUrl: `${website.siteUrl}/${index?.slug}`,
    themeColor: website.themeColor,
    sameAs: business.sameAs,
    twitter: business.shortName,
  };
  useEffect(() => {
    // if ("geolocation" in navigator) {
    //   // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    //   navigator?.geolocation?.getCurrentPosition(({ coords }) => {
    //     // console.log("navigator");
    //     // console.log(navigator);
    //     // console.log("coords");
    //     // console.log(coords);
    //     // const { latitude, longitude } = coords;
    //     // setLocation({ latitude, longitude });
    //   });
    // }

    getRef?.length === 0 && readMore === false
      ? null
      : setPromoVisitState(true);
  }, []);
  // console.log("type");
  // console.log(type);

  // useEffect(() => {
  //   // Fetch data from API if `location` object is set
  //   if (!location) {
  //     fetchApiData()
  //       .then(function (response) {
  //         if (response.ok) {
  //           response;
  //         } else {
  //           console.log("response");
  //           console.log(response);
  //           console.log("Network response was not ok.");
  //           return null;
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(
  //           "There has been a problem with your fetch operation: " +
  //             error.message
  //         );
  //         return null;
  //       });
  //   }
  // }, [location]);
  // console.log("location here");
  // console.log("{{city}}");
  // console.log(post.relatedPost);
  // console.log(post?.frontmatter?.image);
  // console.log(post?.frontmatter?.date);
  // console.log(post?.frontmatter?.title);
  // console.log(post?.frontmatter?.title);
  // console.log(post?.frontmatter?.categories);
  // console.log(post?.frontmatter?.categories[0]);
  // console.log(post?.frontmatter?.tag[0]);

  return (
    <>
      <div className='single-post post-container'>
        <SeoContainer killSeo={true} data={infos} />

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

        {/* <SinglePostBlock
            highlightImage={post?.frontmatter?.image}
            authorImg={"imgHolder"}
            date={post?.frontmatter?.date}
            author={mainConfigs.business.brandName}
            html={post?.content}
            title={
              post?.frontmatter?.title.replace("{{city}}", city) ||
              post?.frontmatter?.title
            }
            category={
              post?.frontmatter?.categories[0] || post?.frontmatter?.categories
            }
            wordCount={10}
            promoVisitState={promoVisitState}
            setReadMore={setReadMore}
            readMore={readMore}
            topic={post?.frontmatter?.topic}
          /> */}

        {post?.type === "posts" ? (
          <SinglePostBlock
            highlightImage={post?.frontmatter?.image}
            authorImg={"imgHolder"}
            date={post?.frontmatter?.date}
            author={mainConfigs.business.brandName}
            html={post?.content}
            title={
              post?.frontmatter?.title.replace(
                "{{city}}",
                city || "Los Angeles"
              ) || post?.frontmatter?.title
            }
            category={
              post?.frontmatter?.categories[0] || post?.frontmatter?.categories
            }
            wordCount={10}
            promoVisitState={promoVisitState}
            setReadMore={setReadMore}
            readMore={readMore}
            topic={post?.frontmatter?.tag[0]}
          />
        ) : null}

        {post?.type === "categories" && post.relatedPost ? (
          <main className='main-container-wrapper'>
            <div className='main-container'>
              <div className='news-grid category'>
                <BlogList
                  posts={post.relatedPost}
                  postsToShow={website.postsToShow}
                />
              </div>
            </div>
          </main>
        ) : null}

        {/* {post.relatedPost.map((rel, indRel) => (
          <div>{rel.frontmatter.title}</div>
        ))} */}

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

export async function getServerSideProps() {
  console.log("hiiiiiiii");

  const res = await fetch(`${mainConfigs.website.developmentUrl}/geolocation`)
    .then(function (response) {
      if (response.ok) {
        return response;
      } else {
        console.log("response");
        console.log(response);
        console.log("Network response was not ok.");
        return preContext;
      }
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
      return preContext;
    });

  const repo = await res.json();
  console.log("repo");
  console.log(repo);
  // Pass data to the page via props
  return { props: { dataLocation } };
}
