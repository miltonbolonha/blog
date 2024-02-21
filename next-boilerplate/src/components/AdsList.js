import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdsList = ({ promoVisitState }) => {
  return (
    <ul className={`post-ads-ul ${promoVisitState ? "promoVisit" : ""}`}>
      <p>
        <small>See related topics:</small>
      </p>
      <li>
        <Image
          src={`/brandimages/${promoVisitState ? "right-icon" : "search-icon"}.png`}
          alt={"Modern Tips search icon"}
          width={20}
          height={20}
          className='search-hold'
        />
        <a href='#'>Some hers thing</a>
        <Image
          src={`/brandimages/right-icon.png`}
          alt={"Modern Tips search icon"}
          width={20}
          height={20}
          className='search-hold'
        />
      </li>
    </ul>
  );
};
export default AdsList;
