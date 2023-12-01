"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { champion } from "@/recoil/atom";
import List from "@/components/list/list";
import { styled, Container, Box } from "@mui/material";

const TeamContainer = styled(Container)({
  marginTop: 100,
});

const ChampionList = styled(Box)({});

const Team = () => {
  const champInfo = useRecoilValue(champion);

  return (
    <TeamContainer fixed maxwidth="xl">
      <ChampionList>
        {champInfo.map((champ, index: number) => {
          return (
            <List key={index} image={champ.image.full} name={champ.name} />
          );
        })}
      </ChampionList>
    </TeamContainer>
  );
};

export default Team;
