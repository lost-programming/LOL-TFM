"use client";

import List from "@/components/list/list";
import Position from "@/components/position/position";
import Search from "@/components/search/search";
import { champion, searchChampion } from "@/recoil/atom";
import { championType } from "@/types/types";
import { Container, styled } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";

// const TeamContainer = styled(Container)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: 100,
//   background: "#FFFFFF",
// });

const ChampionContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 100,
  background: "#FFFFFF",
});

const ChampionList = styled("ul")({
  display: "block",
  flexWrap: "wrap",
});

const Team = () => {
  const champInfo = useRecoilValue(champion);
  const [text, setText] = useRecoilState(searchChampion);

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

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
