"use client";

import List from "@/components/list/list";
import Position from "@/components/position/position";
import Search from "@/components/search/search";
import { useDebounce } from "@/hooks/hooks";
import { champion, filteredChampion, searchChampion } from "@/recoil/atom";
import { championType } from "@/types/types";
import { Container, styled } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// const TeamContainer = styled(Container)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: 100,
//   background: "#FFFFFF",
// });

const ChampionContainer = styled(Container)({
  display: "block",
  marginTop: 100,
  background: "#FFFFFF",
});

const ChampionList = styled("ul")({
  display: "block",
  flexWrap: "wrap",
});

const Team = () => {
  const champInfo = useRecoilValue(filteredChampion);
  const [text, setText] = useRecoilState(searchChampion);
  const debounceSearch = useDebounce(text, 500);
  const champData = useRecoilValue(champion);
  const setFilterChamp = useSetRecoilState(filteredChampion);

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const filteredData = champData.filter((champion: championType) => 
      champion.name.replace(/(\s*)/g, "").includes(debounceSearch));
    
    return setFilterChamp(filteredData.length >= 1 ? filteredData : champData);
  }, [setFilterChamp, debounceSearch]);
  
  return (
    <ChampionContainer
      fixed
      maxWidth="xl"
      sx={{ border: 1.5, borderColor: "#E9ECEF" }}
    >
      <div>
        <Position width={25} height={25} />
        <Search
          autoFocus={false}
          placeholder="챔피언 검색"
          text={text}
          width={200}
          showIcon={false}
          onChange={textChange}
        />
      </div>
      <ChampionList>
        {champInfo.map((champ: championType, index: number) => {
          return (
            <List key={index} image={champ.image.full} name={champ.name} />
          );
        })}
      </ChampionList>
    </ChampionContainer>
  );
};

export default Team;
