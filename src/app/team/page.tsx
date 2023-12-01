"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { champion } from "@/recoil/atom";
import List from "@/components/list/list";
import { championType } from "@/types/types";
import { styled, Container, Box } from "@mui/material";

const TeamContainer = styled(Container)({
  marginTop: 100,
});

const ChampionList = styled(Box)({});

const Team = () => {
  const champInfo = useRecoilValue(champion);
  console.log(champInfo);
  return (
    <TeamContainer fixed maxWidth="xl">
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
