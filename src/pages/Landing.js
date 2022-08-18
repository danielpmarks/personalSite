import React, { useState } from "react";
import { Grid } from "@mui/material";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import portrait from "../res/Cutout2.png";

import AppTheme from "../AppTheme";

import "animate.css";
import "./style.css";

import { Card, CardContent, Typography } from "@mui/material";
import useStyles from "./style";

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid container className={classes.skyline} justifyContent="center">
            <Grid item>
              <img src="https://images7.alphacoders.com/418/418009.jpg" />
            </Grid>
          </Grid>
          <Grid
            id="home"
            container
            justifyContent="center"
            alignItems="flex-end"
            spacing={1}
            className={classes.background1}
            sx={{
              marginTop: 0,
              backgroundImage: "https://images7.alphacoders.com/418/418009.jpg",
            }}
          >
            <Grid
              item
              xs={12}
              md={5}
              alignItems="flex-end"
              className={classes.title}
              sx={{
                height: { xs: "auto", md: "100%" },
                margin: { xs: 2, md: 0 },
                marginTop: { xs: "20vh", md: 0 },
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
                          marginBottom: 0,
                        }}
                      >
                        Hi,{" "}
                      </h1>
                    </Grid>
                    <Grid item xs={12}>
                      <h1
                        className="animate__animated animate__fadeInUp"
                        style={{
                          animationDelay: "1.25s",
                          animationDuration: "0.5s",
                          margin: 0,
                        }}
                      >
                        I'm Daniel
                      </h1>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      className="animate__animated animate__fadeInUp"
                      style={{
                        animationDelay: "2s",
                        animationDuration: "0.5s",
                        margin: 0,
                      }}
                    >
                      I'm a software developer at Meta. Explore my website to
                      find out more about me and my work!
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
                className="animate__animated animate__slideInUp"
                style={{
                  animationDelay: "0.5s",
                  animationDuration: "0.75s",
                }}
                sx={{
                  marginTop: {
                    xs: AppTheme.spacing(-1),
                    md: AppTheme.spacing(1),
                  },
                }}
              >
                <Grid
                  container
                  alignItems="flex-end "
                  className={classes.portrait}
                >
                  <img
                    style={{ width: "100%", display: "inline-block" }}
                    src={portrait}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
