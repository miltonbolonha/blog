import React, { useRef, useState, useEffect } from "react";
import Row from "../containers/RowContainer";
import fetch from "cross-fetch";

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
const checkStatus = res => {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
};
const index = mainConfigs?.pages?.index;
const business = mainConfigs?.business;
const website = mainConfigs?.website;

const BlogPost = ({ post, searchParams, categoryIndex, type }) => {
  const [mensen, setMensen] = useState([]);
  const [location, setLocation] = useState();
  const [firstRun, setFirstRun] = useState(null);
  const [btnGClick, setBtnGClick] = useState(null);
  const [promoVisitState, setPromoVisitState] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const pathname = usePathname() === "/" ? "home" : usePathname().slice(1, -1);
  // console.log("categoryIndex");
  // console.log(categoryIndex);

  const fetchApiData = async ({ latitude, longitude }) => {
    const res = await fetch(
      `https://openmensa.org/api/v2/canteens?near[lat]=${latitude}&near[lng]=${longitude}&near[dist]=50000`
    );
    const data = await res.json();
    setMensen(data);
  };

  const gtagCounter = id => {
    if (btnGClick === null && typeof window !== "undefined") {
      window?.gtag("event", id);
      setBtnGClick(null);
    }
  };
  console.log("relatedPostrelatedPost");
  console.log(post.relatedPost);

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
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator?.geolocation?.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }

    getRef?.length === 0 && readMore === false
      ? null
      : setPromoVisitState(true);
    // if (firstRun !== true && typeof window !== "undefined") {
    //   const fetchData = async () =>
    //     await fetch(`https://mtcom.netlify.app/.netlify/functions/geo`, {
    //       method: "GET",
    //     }).then(resp => {
    //       console.log("resp isss:");
    //       console.log(resp);
    //     });
    //   const jsonData = async () => await fetchData?.json();
    //   console.log(jsonData);
    //   return () => {};
    //   // await fetch(`https://mtcom.netlify.app/.netlify/functions/geo`, {
    //   //   method: "GET",
    //   //   headers: {
    //   //     "Access-Control -Allow-Origin": "*",
    //   //     "Access-Control-Allow-Credentials": "true",
    //   //     "Content-Type": "application/json",
    //   //     Authorization: `None`,
    //   //     Accept: "application/json",
    //   //   },
    //   //   body: JSON.stringify("Hi"),
    //   // })
    //   //   .then(res => {
    //   //     if (res.status >= 400) {
    //   //       throw new Error("Bad response from server");
    //   //     }

    //   //     console.log("resresresresresresresres");
    //   //     console.log(res.json());

    //   //     return setFirstRun(true);
    //   //   })
    //   //   .catch(err => {
    //   //     console.error(err);
    //   //   });
    // }
  }, []);
  // console.log("type");
  // console.log(type);
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
        <h1>aquiui</h1>
        {mensen?.length > 0 &&
          mensen.map(mensa => (
            <Link href={`/mensen/${mensa.id}`} key={mensa.id}>
              <a className={styles.single}>
                <h3>{mensa.name}</h3>
              </a>
            </Link>
          ))}
        {post?.type === "posts" ? (
          <SinglePostBlock
            highlightImage={post?.frontmatter?.image}
            authorImg={"imgHolder"}
            date={post?.frontmatter?.date}
            author={mainConfigs.business.brandName}
            html={post?.content}
            title={post?.frontmatter?.title}
            category={post?.frontmatter?.category}
            wordCount={10}
            promoVisitState={promoVisitState}
            setReadMore={setReadMore}
            readMore={readMore}
            topic={post?.frontmatter?.topic}
          />
        ) : (
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
        )}
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
