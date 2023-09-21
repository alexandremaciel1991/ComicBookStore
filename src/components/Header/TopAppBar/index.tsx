import { Box } from "@mui/material";
import { AppBarStyle, ToolbarStyle } from "./styles";
import { useState } from "react";
import { Logo } from "@/components/Header/Logo";
import { Search } from "../Search";
import { Profile } from "../Profile";

export const TopAppBar = () => {
  return (
    <Box>
      <AppBarStyle>
        <ToolbarStyle>
          <Logo />
          <Search />
          <Profile />
        </ToolbarStyle>
      </AppBarStyle>
    </Box>
  );
};
