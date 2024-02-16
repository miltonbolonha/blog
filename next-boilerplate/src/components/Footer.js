import React from "react";
import Row from "../containers/RowContainer";
import Image from "next/image";

const Footer = ({ label, link }) => {
  return (
    <footer>
      <Row opt={{ isBoxed: true, numColumns: 2, classes: "main-footer" }}>
        <div className='left footer-bottom'>
          <a href='/'>
            <Image
              src={"/android-chrome-512x512.png"}
              alt={"cb mark"}
              width={52}
              height={52}
            />
          </a>
          <a
            href='https://www.linkedin.com/company/creativityblk/'
            rel='nofollow noreferrer noopener'
            target='_blank'
            alt='CB LinkedIn'
          >
            <Image
              src={"/brandimages/linkedin.png"}
              alt={"creativityblk"}
              width={22}
              height={22}
            />
          </a>
          <a
            href='https://www.instagram.com/the.moderntips/'
            rel='nofollow noreferrer noopener'
            target='_blank'
            alt='CN Instagram'
          >
            <Image
              src={"/brandimages/instagram.png"}
              alt={"the.moderntips"}
              width={22}
              height={22}
            />
          </a>
          <a
            href='https://www.tiktok.com/@creativityblk'
            rel='nofollow noreferrer noopener'
            target='_blank'
            alt='CB TikTok'
          >
            <Image
              src={"/brandimages/tiktok.png"}
              alt={"@creativityblk"}
              width={22}
              height={22}
            />
          </a>
        </div>
        <div className='right footer-bottom'>
          <a href={link}>{label}</a>
          <p>Portugal</p>
        </div>
      </Row>
    </footer>
  );
};
export default Footer;
