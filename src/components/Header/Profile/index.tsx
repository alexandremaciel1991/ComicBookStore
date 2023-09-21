import { Divider, MenuItem, MenuList } from "@mui/material";
import {
  MIcon,
  MenuDropdown,
  ProfileContainer,
  ProfileIcon,
  ProfileMenu,
} from "./styles";
import { useState } from "react";

export const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProfileContainer>
      <ProfileMenu onClick={handleClick}>
        <MIcon />
        <ProfileIcon />
        <MenuDropdown
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
            onKeyDown={handleClose}
          >
            <MenuItem onClick={handleClose}>Cadastrar</MenuItem>
            <MenuItem onClick={handleClose}>Entrar</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Central de Ajuda</MenuItem>
          </MenuList>
        </MenuDropdown>
      </ProfileMenu>
    </ProfileContainer>
  );
};
