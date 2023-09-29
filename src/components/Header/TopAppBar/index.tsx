import { useMediaQuery } from "@mui/material";
import {
  AppBarStyle,
  BoxStyle,
  MobileTop,
  ToolbarStyle,
  UserContainer,
} from "./styles";
import { Logo } from "@/components/Header/Logo";
import { Search } from "../Search";
import { Profile } from "../Profile";
import { useState, useEffect } from "react";
import { HeaderCart } from "../Cart";

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
                <HeaderCart />
                <Profile />
              </MobileTop>
              {isVisible && <Search />}
            </>
          ) : (
            <>
              <Logo />
              <Search />
              <UserContainer>
                <HeaderCart />
                <Profile />
              </UserContainer>
            </>
          )}
        </ToolbarStyle>
      </AppBarStyle>
    </BoxStyle>
  );
};
