import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { HabeshaDress } from "../models/habesha-dress";

const ItemsList = () => {
  return (
    <Box className="flex flex-wrap justify-center gap-10 mt-[10rem]">
      {HabeshaDress.map((dress) => (
        <Card className="flex flex-col justify-center items-center">
          <CardMedia
            component="img"
            image={dress.image}
            className="object-cover object-bottom"
          />
          <CardContent className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{dress.name}</h1>
            <p className="text-center font-light text-orange">{dress.size}</p>
            <p className="text-center  text-3xl text-orange">
              {dress.price} Birr
            </p>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              className="bg-orange text-xl mb-4"
            >
              Book
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ItemsList;
