"use client";

import React from "react";
import { InputBase, Paper, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilState } from "recoil";
import { searchText } from "@/recoil/atom";
import { useRouter } from "next/navigation";

interface SearchProps {
  placeholder: string;
}

const SearchContainer = styled(Paper)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SearchInput = styled(InputBase)({
  width: 400,
  padding: 7,
});

const CustomSearchIcon = styled(SearchIcon)({
  marginRight: 10,
});

const Search = ({ placeholder }: SearchProps) => {
  const router = useRouter();

  const [text, setText] = useRecoilState(searchText);

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const searchEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      router.push(`/champion/${text}`);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        autoFocus={true}
        placeholder={placeholder}
        type="search"
        value={text}
        onChange={textChange}
        onKeyDown={searchEnter}
        sx={{ ml: 1, flex: 1 }}
      />
      <CustomSearchIcon />
    </SearchContainer>
  );
};

export default Search;
