import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Avatar, Typography } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import { Box } from "@mui/joy";
import CardCover from "@mui/joy/CardCover";

import useStyles from "../pages/style.js";

export default function WorkAvatar(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      className={classes.cardAvatar}
      xs={props.emphasis != props.name ? 4 : 6}
      sm={
        props.size == "large"
          ? props.emphasis != props.name
            ? 4
            : 6
          : props.emphasis != props.name
          ? 3
          : 6
      }
      //md={props.size == "large" ? (props.emphasis != props.name ? 4 : 3) : 3}
      md={props.emphasis == props.name ? 3 : props.size == "large" ? 4 : 3}
      onClick={() =>
        props.emphasis != props.name
          ? props.setEmphasis(props.name)
          : props.setEmphasis("")
      }
    >
      <Card
        sx={{
          bgcolor: "initial",
          boxShadow: "none",
          "--Card-padding": "0px",
          "--Card-radius": "50%",
          cursor: "pointer",
        }}
      >
        <Box>
          <AspectRatio ratio="1/1">
            <figure></figure>
          </AspectRatio>

          <CardCover>
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                flexGrow: 1,
                justifyContent: "center",
                alignSelf: "flex-center",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <Avatar src={props.src} sx={{ "--Avatar-size": "100%" }} />
            </Box>
          </CardCover>

          <CardCover
            sx={{
              "&:hover, &:focus-within": {
                opacity: 1,
              },
              opacity: 0,
              transition: "0.1s ease-in",
              background: "rgba(0,0,0,0.5)",
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                flexGrow: 1,
                alignSelf: "flex-end",
              }}
            >
              <Typography
                level="h2"
                noWrap
                sx={{
                  fontSize: { xs: "1rem", md: "2rem" },
                  color: "white",
                  opacity: 1,
                }}
              >
                {props.emphasis != props.name ? "See More" : "See Less"}
              </Typography>
            </Box>
          </CardCover>
        </Box>
      </Card>
    </Grid>
  );
}
