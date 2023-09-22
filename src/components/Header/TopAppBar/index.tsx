import { useMediaQuery } from "@mui/material";
import { AppBarStyle, BoxStyle, MobileTop, ToolbarStyle } from "./styles";
import { Logo } from "@/components/Header/Logo";
import { Search } from "../Search";
import { Profile } from "../Profile";
import { useState, useEffect } from "react";

export const TopAppBar = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (matches) {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 10;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <BoxStyle>
      <AppBarStyle>
        <ToolbarStyle>
          {matches ? (
            <>
              <MobileTop>
                <Logo />
                <Profile />
              </MobileTop>
              {isVisible && <Search />}
            </>
          ) : (
            <>
              <Logo />
              <Search />
              <Profile />
            </>
          )}
        </ToolbarStyle>
      </AppBarStyle>
    </BoxStyle>
  );
};
