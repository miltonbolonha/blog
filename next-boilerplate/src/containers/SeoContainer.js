import React from "react";
import SEO from "../components/SEO";
import Head from "next/head";
import mainInfos from "../configs/main-infos.json";
const SeoContainer = ({ data, killSeo = true }) => {
  // const isBrowser = () => typeof window !== "undefined";
  // if (!isBrowser) {
  //   return null;
  // }
  if (killSeo) {
    return (
      <Head>
        <title>NO SEO</title>
        <meta name='robots' content={"noindex, nofollow"} />
      </Head>
    );
  }
  const authorType =
    data?.author === data?.brandName ? "Organization" : "Person";
  let socialValues = [];
  for (const key in data?.sameAs) {
    if (Object.hasOwn(data?.sameAs, key)) {
      socialValues.push(data?.sameAs[key]);
    }
  }
  const orgSchema = [
    {
      "@type": ["Organization"],
      "@context": "https://schema.org",
      name: data?.brandName,
      url: data?.siteUrl,
      email: data?.brandEmail,
      description: data?.brandDescription,
      sameAs: socialValues,
      logo: data?.brandLogo,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: data?.brandPhone,
          contactType: "Serviço Ao Cliente",
        },
      ],
    },
  ];

  const webSiteSchema = [
    {
      "@type": "WebSite",
      "@context": "https://schema.org",
      name: data?.brandName,
      description: data?.brandDescription,
      url: data?.siteUrl,
      keywords: [mainInfos?.website.keywords.map(e => e)],
      inLanguage: data?.i18n,
      copyrightYear: new Date().getFullYear(),
      datePublished: data?.dateCreated,
      dateModified: data?.dateNow,
      image: data?.brandCardImage,
      sameAs: socialValues,
    },
  ];

  const articleSchema = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      name: data?.title,
      headline: data?.description,
      description: data?.description,
      author: {
        "@type": authorType,
        name: data?.brandPerson,
        url: data?.siteUrl,
      },
      image: {
        "@type": "ImageObject",
        url: data?.featuredImage || data?.brandCardImage,
        height: 1200,
        width: 630,
      },
      articleBody: data?.articleBody || data?.description,
      publisher: {
        "@type": "Organization",
        name: data?.brandName,
        url: data?.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: data?.brandLogo,
          width: 156,
          height: 156,
        },
      },
      datePublished: data?.datePublished,
    },
  ];

  let arrayQuestions = [];
  data?.questions?.forEach(question => {
    return arrayQuestions.push({
      "@type": "Question",
      name: question.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: `<p>${question.a}</p>`,
      },
    });
  });

  const questionSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [arrayQuestions],
    },
  ];
  return (
    <SEO
      data={{
        author: data?.author,
        siteUrl: data?.siteUrl,
        brandName: data?.brandName,
        brandEmail: data?.brandEmail,
        brandLogo: data?.brandLogo,
        brandPhone: data?.brandPhone,
        title: data?.title,
        brandDescription: data?.brandDescription,
        dateCreated: data?.dateCreated,
        dateNow: data?.dateNow,
        articleBody: data?.articleBody,
        datePublished: data?.datePublished,
        album: data?.album,
        track: data?.track,
        i18n: data?.i18n,
        keywords: data?.keywords,
        topology: data?.topology,
        articleUrl: data?.articleUrl,
        description: data?.description,
        brandCardImage: data?.brandCardImage,
        featuredImage: data?.featuredImage,
        themeColor: data?.themeColor,
        slug: data?.slug,
        fbAppID: data?.fbAppID,
        twitter: data?.twitter,
        articleSchema: articleSchema,
        webSiteSchema: webSiteSchema,
        orgSchema: orgSchema,
        questionSchema: questionSchema,
        brandPerson: data?.brandPerson,
      }}
    />
  );
};

export default SeoContainer;
