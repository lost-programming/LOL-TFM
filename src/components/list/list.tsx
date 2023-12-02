"use client";

import React from "react";
import { styled, CardMedia, Typography } from "@mui/material";

interface ListProps {
  image: string;
  name: string;
}

const CardList = styled("li")({
  display: "flex",
  listStyle: "none",
  maxWidth: 175,
  height: 150,
});

const CardImage = styled(CardMedia)({
  margin: 6,
});

const CardName = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  maxWidth: 100,
});

const List = ({ image, name }: ListProps) => {
  return (
    <CardList sx={{ maxwidth: 175 }}>
      <CardImage
        image={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${image}`}
        title={name}
        sx={{ width: 100, height: 100 }}
      >
        <CardName>{name}</CardName>
      </CardImage>
    </CardList>
  );
};

export default List;
