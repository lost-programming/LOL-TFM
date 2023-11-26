"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import axios from "axios";
import { searchText } from "@/recoil/atom";
import Search from "@/components/search/search";
import { styled } from "@mui/material";

const MainContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Home = () => {
  const router = useRouter();

  const [text, setText] = useRecoilState(searchText);
  const [champData, setChampData] = useState(null);

  useEffect(() => {
    try {
      const getChampData = async () => {
        const res = await axios.get(
          "https://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/champion.json",
        );
        setChampData(res.data);
        console.log(champData);
      };
      getChampData();
    } catch (e) {
      console.log(e);
    }
  }, [champData]);

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const searchEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      router.push(`/champion/${text}`);
      setText("");
    }
  };

  const searchClick = () => {
    router.push(`/champion/${text}`);
    setText("");
  };

  return (
    <MainContainer>
      <Search
        placeholder="챔피언 검색"
        text={text}
        onChange={textChange}
        onKeyDown={searchEnter}
        onClick={searchClick}
      />
    </MainContainer>
  );
};

export default Home;
