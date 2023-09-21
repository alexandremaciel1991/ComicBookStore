import styled from "styled-components";
import MenuMui from "@mui/material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

export const ProfileIcon = styled(AccountCircleIcon)`
  color: #717171;
  font-size: 30px;
  margin-left: 12px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  float: right;
  margin: auto 0;
  align-items: center;
  justify-content: center;
`;
export const ProfileMenu = styled.div`
  display: flex;
  float: right;
  margin: auto 0;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 5px 0px #c0c0c0;
  }
`;

export const MenuDropdown = styled(MenuMui)`
  margin-top: 10px;
`;

export const MIcon = styled(MenuIcon)`
  color: #222222;
  font-size: 20px;
`;
