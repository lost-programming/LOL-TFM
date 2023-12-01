"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { searchText, patch, champion } from "@/recoil/atom";
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
  const [patchVersion, setPatchVersion] = useRecoilState(patch);
  const [champData, setChampData] = useRecoilState(champion);

  useEffect(() => {
    const latestPatchVersion = async () => {
      const res = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json",
      );
      const data = await res.json();
      setPatchVersion(data[0]);
    };
    latestPatchVersion();
  }, [setPatchVersion]);

  useEffect(() => {
    const getChampData = async () => {
      const res = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${patchVersion}/data/ko_KR/champion.json`,
      );
      const data = await res.json();
      setChampData(data.data);
    };
    getChampData();
  }, [patchVersion, setChampData]);

  useEffect(() => {
    const sortChampData = [...champData].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    setChampData(sortChampData);
  }, [champData, setChampData]);

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
