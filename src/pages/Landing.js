import React, { useState } from "react";
import { Grid } from "@mui/material";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import portrait from "../res/Cutout.png";
import skyline from "../res/skyline.png";

import AppTheme from "../AppTheme";

import "animate.css";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

import vinyl from "../res/vinyl_stream.png";
import virtubook from "../res/virtubook.png";
import GreenTree from "../res/tree.png";
import IEEE from "../res/IEEE.png";

import useStyles from "./style.js";
import WorkAvatar from "../components/avatar";
import WorkExperience from "./WorkExperience";
import { Card, CardContent, Typography } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import Avatar from "@mui/material/Avatar";
import Education from "./Education";

export default function Landing() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [tetrisShadow, setTetrisShadow] = useState(false);
  const [cpuShadow, setCpuShadow] = useState(false);
  const [vsShadow, setVsShadow] = useState(false);
  const [vbShadow, setVbShadow] = useState(false);

  const [emailShadow, setEmailShadow] = useState(false);
  const [linkedInShadow, setLinkedInShadow] = useState(false);
  const [githubShadow, setGithubShadow] = useState(false);

  const [AGCOShadow, setAGCOShadow] = useState(false);
  const [AmazonShadow, setAmazonShadow] = useState(false);
  const [otShadow, setOtShadow] = useState(false);
  const [ieeeShadow, setIeeeShadow] = useState(false);
  const [verlShadow, setVerlShadow] = useState(false);

  const [workEmphasis, setWorkEmphasis] = useState("");

  const sections = [
    "Home",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Info",
  ];
  const sectionIds = [
    "#home",
    "#education",
    "#work",
    "#projects",
    "#skills",
    "#info",
  ];

  const jumpSection = (section) => {
    window.location.href = sectionIds[section];
    setDrawer(false);
  };

  const toggleShadows = (id, state) => {
    switch (id) {
      case "tetris":
        setTetrisShadow(state);
        break;
      case "vinyl-stream":
        setVsShadow(state);
        break;
      case "virtubook":
        setVbShadow(state);
        break;
      case "email":
        setEmailShadow(state);
        break;
      case "linkedIn":
        setLinkedInShadow(state);
        break;
      case "github":
        setGithubShadow(state);
        break;
      case "AGCO":
        setAGCOShadow(state);
        break;
      case "Amazon":
        setAmazonShadow(state);
        break;
      case "orangeTree":
        setOtShadow(state);
        break;
      case "IEEE":
        setIeeeShadow(state);
        break;
      case "VERL":
        setVerlShadow(state);
        break;
      case "CPU":
        setCpuShadow(state);
        break;
    }
  };

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
                      I'm a software developer at Meta. Check out my experience
                      and projects to learn more about how augmented reality can
                      shape our lives.
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
