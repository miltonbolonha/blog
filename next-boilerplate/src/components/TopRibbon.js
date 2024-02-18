import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopRibbon = ({
  text,
  highlight,
  linkHighlight,
  arrow,
  externalLink,
  gtagCounter,
  id,
}) => {
  return (
    <div className='top-ribbon'>
      <p>
        {text + ` `}
        <strong>
          {!externalLink ? (
            <Link
              id={id}
              onClick={() => gtagCounter(id)}
              alt={text}
              href={linkHighlight || "/#explore"}
            >
              <u>
                {highlight + " "}
                {arrow ? (
                  <span className='topribbon-right-arrow'>
                    <Image
                      src={"/brandimages/right-arrow.png"}
                      alt={"Modern way to find your trend topics."}
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </span>
                ) : null}
              </u>
            </Link>
          ) : (
            <a
              href={externalLink || "/#explore"}
              alt={text}
              rel='nofollow noreferrer noopener'
              target='_blank'
              onClick={() => gtagCounter(id)}
              id={id}
            >
              <u>
                {highlight + " "}
                {arrow ? (
                  <span className='topribbon-right-arrow'>
                    <Image
                      src={"/brandimages/right-arrow.png"}
                      alt={"Modern way to find your trend topics."}
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </span>
                ) : null}
              </u>
            </a>
          )}
        </strong>
      </p>
    </div>
  );
};
export default TopRibbon;
