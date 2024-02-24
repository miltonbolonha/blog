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
        </div>
        <div className='right footer-bottom'>
          <a href={"/about"}>About Us</a>
          <a href={"/advertising-disclosure"}>Advertising Disclosure</a>
          <a href={"/terms-of-use"}>Terms and Conditions</a>
          <a href={"/privacy-policy"}>Privacy Policy</a>
        </div>
      </Row>
      <div className='bottom'>
        <hr />
        <p>
          <small>
            Disclaimer: The content provided on this site is intended for
            general information purposes only and should not be considered a
            replacement for professional financial and/or medical advice. All
            materials, including text, graphics, images, and information, are
            subject to change without prior notice. The information, materials,
            terms, conditions, and descriptions presented on these pages are
            subject to change without prior notice.
          </small>
        </p>
        <br />
        <p>© 2024 Modern Tips. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
