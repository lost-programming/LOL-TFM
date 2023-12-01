"use client";

import React from "react";
import {
  styled,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface ListProps {
  image: string;
  name: string;
}

const CardContainer = styled(Card)({
  display: "flex",
  maxWidth: 175,
  height: 150,
});

const CardImage = styled(CardMedia)({
  margin: 6,
});

const CardName = styled(Typography)({
  textAlign: "center",
  fontSize: 12,
  maxWidth: 100,
});

const List = ({ image, name }: ListProps) => {
  return (
    <CardContainer sx={{ maxwidth: 175 }}>
      <CardImage
        image={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${image}`}
        title={name}
        sx={{ width: 75, height: 75 }}
      />
      <CardContent>
        <CardName>{name}</CardName>
      </CardContent>
    </CardContainer>
  );
};

export default List;
