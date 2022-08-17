import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { Avatar, Grid } from "@mui/material";

import AppTheme from "./AppTheme";
import DM_Logo from "./res/personal_logo.png";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import useStyles from "pages/style";
import Education from "pages/Education";
import WorkExperience from "pages/WorkExperience";

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="transparent" component="nav" elevation={0}>
        <Toolbar
          color="transparent"
          style={{ padding: 0 }}
          sx={{ borderRadius: "0px" }}
        >
          <Card sx={{ width: "100vw", minHeight: { xs: "15vh", md: "10vh" } }}>
            <CardCover
              sx={{
                borderRadius: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              }}
            />

            <CardCover sx={{ bgColor: "rgba(0,0,0,0)" }}>
              <Grid container>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                  style={{
                    paddingLeft: AppTheme.spacing(4),
                    paddingRight: AppTheme.spacing(3),
                  }}
                >
                  <Grid item xs={2} md={4}>
                    <a href="/">
                      <Avatar
                        src={DM_Logo}
                        sx={{
                          height: { xs: "5vh", md: "10vh" },
                          width: { xs: "5vh", md: "10vh" },
                        }}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={10} md={8}>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item justify="center">
                        <a href="/">
                          <Typography
                            className={classes.topBarText}
                            fontWeight="lg"
                            textColor="#fff"
                            ml={2}
                            //flexGrow={1}
                            color="white"
                            sx={{
                              margin: 0,
                              fontSize: {
                                xs: "0.8rem",
                                sm: "1.5rem",
                                lg: "2rem",
                              },
                            }}
                          >
                            About
                          </Typography>
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="/education">
                          <Typography
                            fontWeight="lg"
                            textColor="#fff"
                            ml={2}
                            flexGrow={1}
                            color="white"
                            sx={{
                              margin: 0,
                              fontSize: {
                                xs: "0.8rem",
                                sm: "1.5rem",
                                lg: "2rem",
                              },
                            }}
                          >
                            Education
                          </Typography>
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="/experience">
                          <Typography
                            fontWeight="lg"
                            textColor="#fff"
                            ml={2}
                            flexGrow={1}
                            color="white"
                            sx={{
                              margin: 0,
                              fontSize: {
                                xs: "0.8rem",
                                sm: "1.5rem",
                                lg: "2rem",
                              },
                            }}
                          >
                            Experience
                          </Typography>
                        </a>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          justifyContent="space-between"
                          spacing={{ xs: 0.5, sm: 1 }}
                        >
                          <Grid item xs={4}>
                            <a
                              href="mailto: danielpresliermarks@gmail.com"
                              target="_blank"
                            >
                              <Typography textColor="#fff" color="white">
                                <EmailIcon
                                  sx={{
                                    fontSize: {
                                      xs: "1.25rem",
                                      sm: "2rem",
                                      md: "3rem",
                                    },
                                  }}
                                />
                              </Typography>
                            </a>
                          </Grid>
                          <Grid item xs={4}>
                            <a
                              href="https://www.linkedin.com/in/daniel-m-510b3a128/"
                              target="_blank"
                            >
                              <Typography textColor="#fff" color="white">
                                <LinkedInIcon
                                  sx={{
                                    fontSize: {
                                      xs: "1.25rem",
                                      sm: "2rem",
                                      md: "3rem",
                                    },
                                  }}
                                />
                              </Typography>
                            </a>
                          </Grid>
                          <Grid item xs={4}>
                            <a
                              href="https://github.com/danielpmarks"
                              target="_blank"
                            >
                              <Typography textColor="#fff" color="white">
                                <GitHubIcon
                                  sx={{
                                    fontSize: {
                                      xs: "1.25rem",
                                      sm: "2rem",
                                      md: "3rem",
                                    },
                                  }}
                                />
                              </Typography>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardCover>
          </Card>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<WorkExperience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
