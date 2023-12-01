"use client";

import React from "react";
import { InputBase, Paper, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  placeholder: string;
  text: string;
  onChange: React.ChangeEventHandler;
  onKeyDown: React.KeyboardEventHandler;
  onClick: React.MouseEventHandler;
}

const SearchContainer = styled(Paper)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SearchInput = styled(InputBase)({
  width: 400,
  padding: 7,
  sx = { ml: 1, flex: 1 },
});

const CustomSearchIcon = styled(SearchIcon)({
  marginRight: 10,
  cursor: "pointer",
});

const Search = ({
  placeholder,
  text,
  onChange,
  onKeyDown,
  onClick,
}: SearchProps) => {
  return (
    <SearchContainer>
      <SearchInput
        autoFocus={true}
        placeholder={placeholder}
        type="search"
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <CustomSearchIcon onClick={onClick} />
    </SearchContainer>
  );
};

export default Search;
