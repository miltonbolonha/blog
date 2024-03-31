import React from "react";
import Link from "next/link";
import Row from "../containers/RowContainer";
import Image from "next/image";
import mainInfos from "../../settings.json";
const Footer = () => {
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
        </div>
        <div className='right footer-bottom'>
          {mainInfos.mainMenu.map((item, itemIndx) => (
            <Link key={itemIndx} href={"/" + item.href}>
              {item.label}
            </Link>
          ))}
          {/* <a href={"/about"}>About Us</a>
          <a href={"/advertising-disclosure"}>Advertising Disclosure</a>
          <a href={"/terms-of-use"}>Terms and Conditions</a>
          <a href={"/privacy-policy"}>Privacy Policy</a> */}
        </div>
      </Row>
      <div className='bottom'>
        <hr />
        <p>
          <small>{mainInfos.website.footerMessage}</small>
        </p>
        <br />
        <p>
          © {new Date().getFullYear()} {mainInfos.business.brandName}. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
