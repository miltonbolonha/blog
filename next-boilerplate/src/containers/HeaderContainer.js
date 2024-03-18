import React, { useState, useRef } from "react";

import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HeaderContainer = ({
  mainMenu,
  opt,
  hasMenu,
  scheduleLink,
  gtag,
  gtagCounter,
  pathname,
}) => {
  const [refState, setRefState] = useState(true);
  const wrapperRef = useRef(null);
  function handleRefState() {
    setRefState(!refState);
  }

  const logoHeader = opt ? opt.logoHeader : null;

  // const menuActive = refState ? "visible" : "not-visible";

  const logoLightImage = "/brandimages/logo.png";
  const logoImage = "/brandimages/logo.png";
  const logotype = (
    <>
      <Link
        href={"/"}
        className='logo-link desktop-only'
        onClick={() => gtagCounter(`${pathname}-logo-link`)}
        id={`${pathname}-logo-link`}
      >
        <Image
          src={opt.isDarkLogo ? logoImage : logoLightImage}
          alt={"Business logo"}
          critical='true'
          className={"main-logo"}
          width={183}
          height={32}
        />
      </Link>
      <Link
        href={"/"}
        className='logo-link mobile-only'
        onClick={() => gtagCounter("small-logo-link")}
        id={"small-logo-link"}
      >
        <Image
          src={opt.isDarkLogo ? logoImage : logoLightImage}
          alt={"Business logo"}
          critical='true'
          className={"main-logo"}
          width={183}
          height={32}
        />
      </Link>
    </>
  );
  return (
    <Header
      pageHasMenu={opt.pageHasMenu}
      refState={refState}
      handleRefState={handleRefState}
      logoComponent={logoHeader}
      mainMenu={mainMenu}
      logotype={logotype}
      wrapperRef={wrapperRef}
      bgOne={opt.bgOne || "#e9e9ed"}
      hasMenu={hasMenu}
      scheduleLink={scheduleLink}
      gtag={gtag}
      gtagCounter={gtagCounter}
      pathname={pathname}
    />
  );
};
export default HeaderContainer;
