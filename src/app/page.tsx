"use client";

import Search from "@/components/search/search";
import { styled } from "@mui/material";
import React from "react";

const MainContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Home = () => {
  return (
    <MainContainer>
      <Search placeholder="챔피언 검색" />
    </MainContainer>
  );
};

export default Home;
