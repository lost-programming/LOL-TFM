"use client";

import List from "@/components/list/list";
import Position from "@/components/position/position";
import Search from "@/components/search/search";
import { useDebounce } from "@/hooks/hooks";
import { champion, filteredChampion, searchChampion } from "@/recoil/atom";
import { championType } from "@/types/types";
import { Box, Container, styled } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// const TeamContainer = styled(Container)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: 100,
//   background: "#FFFFFF",
// });

const ListContainer = styled(Container)({
  display: "block",
  marginTop: 100,
  background: "#FFFFFF",
});

const ListHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: 10,
});

const ListBody = styled("ul")({
  display: "block",
  textAlign: "center",
  listStyle: "none",
  paddingInlineStart: 0,
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
      champion.name.replace(/(\s*)/g, "").includes(debounceSearch),
    );

    return setFilterChamp(filteredData.length >= 1 ? filteredData : champData);
  }, [setFilterChamp, debounceSearch]);

  return (
    <ListContainer
      fixed
      maxWidth="xl"
      sx={{ border: 1.5, borderColor: "#E9ECEF" }}
    >
      <ListHeader>
        <Position width={25} height={25} />
        <Search
          autoFocus={false}
          placeholder="챔피언 검색"
          text={text}
          width={400}
          showIcon={false}
          onChange={textChange}
        />
      </ListHeader>
      <ListBody>
        {champInfo.map((champ: championType, index: number) => {
          return (
            <List key={index} image={champ.image.full} name={champ.name} />
          );
        })}
      </ListBody>
    </ListContainer>
  );
};

export default Team;
