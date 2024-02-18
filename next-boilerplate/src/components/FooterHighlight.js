import React from "react";
import Image from "next/image";
import LoadMime from "../containers/LoadMimeContainer";

const FooterHighlight = ({
  title,
  paragraph,
  blackBtn,
  blackBtnLink,
  blackHole,
  cta,
  blackGtag,
  ctaGtag,
}) => {
  return (
    <div className='highlight-wrapper'>
      <div className='highlight-info'>
        {title ? <h2 className='graydient'>{title}</h2> : null}
        {paragraph ? (
          <p
            className='w95 m0auto'
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ) : null}
      </div>
      <div className='highlight-buttons'>
        {blackBtn ? (
          <a
            id={blackGtag}
            href={blackBtnLink}
            alt=''
            className={"cta black-btn"}
          >
            {blackBtn + " "}
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
        ) : null}
        {cta ? (
          <a
            href={cta}
            alt='Schedule a FREE discovery call'
            className={"cta"}
            id={ctaGtag}
            rel='nofollow noreferrer noopener'
            target='_blank'
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
        ) : null}
      </div>
      {blackHole ? (
        <Image
          src={"/brandimages/black-hole-star.jpg"}
          alt={""}
          width={800}
          quality={80}
          height={346}
          className='black-hole-star'
        />
      ) : null}
    </div>
  );
};
export default FooterHighlight;
