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

const CardImage = styled(CardMedia)({
  sx = { width: 175, height: 175 },
});

const List = ({ image, name }: ListProps) => {
  return (
    <Card sx={{ maxwidth: 175 }}>
      <CardImage image={image} title={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default List;
