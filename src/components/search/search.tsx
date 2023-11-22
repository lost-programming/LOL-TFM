"use client";

import React from "react";
import { InputBase, Paper, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  placeholder: string;
}

const SearchContainer = styled(Paper)({
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled(InputBase)({
  width: 400,
  padding: 7,
});

const CustomSearchIcon = styled(SearchIcon)({
  marginRight: 10,
});

const Search = ({ placeholder }: SearchProps) => {
  return (
    <SearchContainer>
      <SearchInput
        sx={{ ml: 1, flex: 1 }}
        autoFocus={true}
        placeholder={placeholder}
        type="search"
      />
      <CustomSearchIcon />
    </SearchContainer>
  );
};

export default Search;
