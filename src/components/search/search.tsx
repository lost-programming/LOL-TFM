"use client";

import React from "react";
import { InputBase, Paper, styled } from "@mui/material";

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

const Search = ({ placeholder }: SearchProps) => {
  return (
    <SearchContainer>
      <SearchInput
        sx={{ ml: 1, flex: 1 }}
        autoFocus={true}
        placeholder={placeholder}
        type="search"
      ></SearchInput>
    </SearchContainer>
  );
};

export default Search;
