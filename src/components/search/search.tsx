"use client";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper, styled } from "@mui/material";

interface SearchProps {
  autoFocus: boolean;
  placeholder: string;
  text: string;
  width: number;
  showIcon: boolean;
  onChange: React.ChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onClick?: React.MouseEventHandler;
}

const SearchContainer = styled(Paper)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SearchInput = styled(InputBase)({
  padding: 7,
});

const CustomSearchIcon = styled(SearchIcon)({
  marginRight: 10,
  cursor: "pointer",
});

const Search = ({
  autoFocus,
  placeholder,
  text,
  width,
  showIcon,
  onChange,
  onKeyDown,
  onClick,
}: SearchProps) => {
  return (
    <SearchContainer>
      <SearchInput
        type="search"
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
        sx={{ ml: 1, flex: 1, width: {width} }}
      />
      {showIcon && <CustomSearchIcon onClick={onClick} />}
    </SearchContainer>
  );
};

export default Search;
