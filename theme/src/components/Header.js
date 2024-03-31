import React from "react";

import Row from "../containers/RowContainer";
import Image from "next/image";
import Link from "next/link";

import MainMenuContainer from "../containers/MainMenuContainer";

const Header = ({
  refState,
  wrapperRef,
  bgOne,
  hasMenu,
  mainMenu,
  logotype,
  handleRefState,
  scheduleLink,
  gtag,
  gtagCounter,
  pathname,
}) => {
  const firstBtn = pathname === "convertion" ? "pricing" : "project-results";
  return (
    <header>
      <div className={`main-header ${hasMenu ? "full-menu" : ""}`}>
        <div className={`header-logo`}>{logotype}</div>

        {hasMenu === true ? (
          <>
            <ul className='main-menu-list desktop-only'>
              <li>
                <Link
                  id={`${pathname}-menu-${firstBtn}`}
                  onClick={() => gtagCounter(`${pathname}-menu-${firstBtn}`)}
                  alt={firstBtn}
                  href={`#${firstBtn}`}
                >
                  {pathname === "convertion" ? "Pricing" : "Results"}
                </Link>
              </li>
              <li>
                <Link
                  href='#process'
                  onClick={() => gtagCounter(`${pathname}-menu-process`)}
                  alt={"Process"}
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href='#benefits'
                  onClick={() => gtagCounter(`${pathname}-menu-benefits`)}
                  alt={"Benefits"}
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href='/#explore'
                  onClick={() => gtagCounter(`${pathname}-menu-services`)}
                  alt={"Benefits"}
                >
                  Services
                </Link>
              </li>
            </ul>
            <div
              className={`main-header-${!refState ? "visible" : "not-visible"}`}
            >
              <div className='header-columns toggle-menu mobile-only'>
                <button
                  type='button'
                  id='check-toggle-icon'
                  onFocus={handleRefState}
                  onClick={() => gtagCounter(`${pathname}-menu-schedule`)}
                  aria-haspopup='true'
                  aria-controls='mainmenu'
                  aria-expanded={refState}
                  aria-label='Alternar visibilidade do menu'
                  className={`door resetButton  ${
                    !refState ? "active opened" : "not-active"
                  }`}
                >
                  <Image
                    src={"/brandimages/hamburguer.png"}
                    alt={"Open Menu"}
                    critical='true'
                    width={27}
                    height={18}
                  />
                </button>
              </div>
            </div>

            <div
              className={`main-menu main-menu-${
                !refState ? "visible" : "not-visible"
              }`}
            >
              <MainMenuContainer
                wrapperRef={wrapperRef}
                refState={refState}
                isMobile={false}
                mainMenuItems={mainMenu}
                handleRefState={handleRefState}
                pathname={pathname}
              />
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
