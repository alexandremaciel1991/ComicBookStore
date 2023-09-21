import { SearchContainer, SearchIconWrapper, StyledInputBase } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
};
