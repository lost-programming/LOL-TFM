"use client";

import Search from "@/components/search/search";
import { champion, patch, searchText } from "@/recoil/atom";
import { styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const MainContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Home = () => {
  const router = useRouter();

  const [text, setText] = useRecoilState(searchText);
  const [patchVersion, setPatchVersion] = useRecoilState(patch);
  const setChampData = useSetRecoilState(champion);

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
      const sortbyChampionName = Object.values(data.data).sort(
        (a: any, b: any) => (a.name > b.name ? 1 : -1),
      );
      setChampData(sortbyChampionName);
    };
    getChampData();
  }, [patchVersion, setChampData]);

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
        autoFocus={true}
        placeholder="챔피언 검색"
        text={text}
        width={400}
        showIcon={true}
        onChange={textChange}
        onKeyDown={searchEnter}
        onClick={searchClick}
      />
    </MainContainer>
  );
};

export default Home;
