"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { champion } from "@/recoil/atom";
import List from "@/components/list/list";
import { championType } from "@/types/types";
import { styled, Container } from "@mui/material";

const TeamContainer = styled(Container)({
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
  console.log(champInfo);
  return (
    <TeamContainer
      fixed
      maxWidth="xl"
      sx={{ border: 1.5, borderColor: "#E9ECEF" }}
    >
      <ChampionList>
        {champInfo.map((champ: championType, index: number) => {
          return (
            <List key={index} image={champ.image.full} name={champ.name} />
          );
        })}
      </ChampionList>
    </TeamContainer>
  );
};

export default Team;
