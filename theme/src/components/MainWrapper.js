import mainConfigs from "../configs/main-menu.json";

import HeaderContainer from "../containers/HeaderContainer";
import RowContainer from "../containers/RowContainer";

const MainWrapper = ({
  children,
  hasHeader,
  hasMenu,
  scheduleLink,
  gtag,
  gtagCounter,
}) => (
  <>
    <div className={"main-wrapper"}>
      <RowContainer
        opt={{
          classes: "main-wrapper-inner",
          isBoxed: false,
          bgColor: "#000",
          rowWidth: "100%",
        }}
      >
        {hasHeader !== false ? (
          <HeaderContainer
            opt={{
              mainMenuStatus: mainConfigs.menu.status,
              logoSvg: "logotipoSvg",
              bgOne: "transparent",
              bgTwo: "transparent",
              classes: "header-block",
              pageHasMenu: hasMenu,
            }}
            mainMenu={mainConfigs.menu.items}
            hasMenu={hasMenu}
            scheduleLink={scheduleLink}
            gtag={gtag}
            gtagCounter={gtagCounter}
          />
        ) : null}

        <main className='main-container'>{children}</main>
      </RowContainer>
    </div>
  </>
);

export default MainWrapper;
