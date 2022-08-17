import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";

import Budapest from "../res/Budapest2.JPG";

import "animate.css";
import "./style.css";
import useStyles from "./style";

export default function About() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <img src={Budapest} /> */}
      <Grid
        className={classes.backgroundAbout}
        container
        sx={{ height: "100%" }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid
            id="home"
            container
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid
              item
              xs={12}
              md={5}
              alignItems="flex-start"
              className={classes.welcome}
              sx={{
                height: { xs: "auto", md: "100%" },
                margin: { xs: 2, md: 0 },
                marginTop: { xs: 10, md: 0 },
              }}
            >
              <Grid
                sx={{ height: { xs: "auto", md: "100%" }, textAlign: "left" }}
                container
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <h1
                        className="animate__animated animate__fadeInUp"
                        style={{
                          animationDuration: "0.5s",
                          animationDelay: "0.5s",
                          marginTop: 0,
                          marginBottom: 10,
                        }}
                      >
                        Welcome!{" "}
                      </h1>
                    </Grid>
                  </Grid>
                  <Grid
                    className="animate__animated animate__fadeInUp"
                    style={{
                      animationDelay: "1s",
                      animationDuration: "0.5s",
                    }}
                    item
                    xs={12}
                  >
                    <Typography
                      className={classes.aboutText}
                      sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                    >
                      For over three years, I've been developing software with
                      polished front-end interfaces and augmented reality
                      integration, in both a personal and professional capacity.
                      I believe groundbreaking developments in AR have the
                      potential to shape our lives for the better. From
                      education to medicine to forming deeper connections with
                      those around us, emerging AR applications enable so many
                      advancements that can change how we interact with the
                      world around us. Check out my education, experience, and
                      projects to learn more!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid
                container
                column
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid
                  container
                  alignItems="flex-end "
                  className={classes.portrait}
                >
                  <img
                    style={{ width: "100%", display: "inline-block" }}
                    src=""
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
