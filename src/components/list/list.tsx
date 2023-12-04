"use client";

import { CardMedia, styled } from "@mui/material";

interface ListProps {
  image: string;
  name: string;
}

const CardList = styled("li")({
  display: "inline-block",
  listStyle: "none",
  maxWidth: 120,
  height: 120,
  margin: 6,
  marginLeft: 12,
  marginRight: 12,
});

const CardImage = styled(CardMedia)({
  cursor: "pointer",
});

const CardName = styled("span")({
  display: "block",
  textAlign: "center",
  marginTop: 5,
  maxWidth: 120,
  fontSize: 13,
});

const List = ({ image, name }: ListProps) => {
  return (
    <CardList sx={{ maxwidth: 110 }}>
      <CardImage
        image={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${image}`}
        title={name}
        sx={{ width: 100, height: 100 }}
      />
      <CardName>{name}</CardName>
    </CardList>
  );
};

export default List;
