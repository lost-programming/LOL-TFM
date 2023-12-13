"use client";

import List from "@/components/list/list";
import Position from "@/components/position/position";
import Search from "@/components/search/search";
import { useDebounce } from "@/hooks/hooks";
import { champion, filteredChampion, position, searchChampion } from "@/recoil/atom";
import { PositionType, championType } from "@/types/types";
import { Box, Container, FormControlLabel, Radio, styled } from "@mui/material";
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
  paddingLeft: 0,
  paddingRight: 0,
  border: 1.5,
  borderStyle: "solid",
  borderColor: "#E9ECEF"
});

const ListHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PositionBox = styled("ul")({
  display: "flex",
  listStyle: "none",
  paddingInlineStart: 0,
});

const PositionList = styled("li")({
  display: "flex",
  paddingLeft: 20,
});

const SearchBox = styled("div")({
  display: "flex",
  marginLeft: "auto",
  paddingRight: 10,
});

const ListBody = styled("ul")({
  display: "block",
  textAlign: "center",
  listStyle: "none",
  paddingInlineStart: 0,
});

const Team = () => {
  const champInfo = useRecoilValue(filteredChampion);
  const champData = useRecoilValue(champion);
  const positionList = useRecoilValue(position);

  const setFilterChamp = useSetRecoilState(filteredChampion);

  const [text, setText] = useRecoilState(searchChampion);

  const debounceSearch = useDebounce(text, 500);

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  
  // 검색어 필터, 딜레이 0.5초 적용
  useEffect(() => {
    const filteredData = champData.filter((champion: championType) =>
      champion.name.replace(/(\s*)/g, "").includes(debounceSearch),
    );

    return setFilterChamp(filteredData.length >= 1 ? filteredData : champData);
  }, [setFilterChamp, debounceSearch]);

  return (
    <ListContainer
      disableGutters
    >
      <ListHeader sx={{ borderBottom: 1.5, borderColor: "#E9ECEF" }}>
        <PositionBox>
          {positionList.map((line: PositionType, index: number) => {
            return (
              <PositionList key={index}>
                <FormControlLabel
                  label=""
                  control={
                    <Radio
                      icon={
                        <Position
                          src={line.image}
                          alt={line.name}
                          width={30}
                          height={30}
                        />
                      }
                      checkedIcon={
                        <Position
                          src={line.image}
                          alt={line.name}
                          width={30}
                          height={30}
                        />
                      }
                    />
                  }
                />
                {/* <Divider orientation="vertical" flexItem/> */}
              </PositionList>
            );
          })}
        </PositionBox>
        <SearchBox>
          <Search
            autoFocus={false}
            placeholder="챔피언 검색"
            text={text}
            width={400}
            showIcon={false}
            onChange={textChange}
          />
        </SearchBox>
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
