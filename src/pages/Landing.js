import React, { useState } from "react";
import { Grid, Drawer, Button, Paper, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import portrait from "../res/portrait.png";
import skyline from "../res/skyline.png";
import uiuc_logo from "../res/uiuc_logo.jpg";

import AppTheme from "../AppTheme";

import "animate.css";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

import vinyl from "../res/vinyl_stream.png";
import virtubook from "../res/virtubook.png";
import GreenTree from "../res/tree.png";
import IEEE from "../res/IEEE.png";

import useStyles from "./style.js";

export default function Landing() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [vsShadow, setVsShadow] = useState(false);
  const [vbShadow, setVbShadow] = useState(false);

  const [emailShadow, setEmailShadow] = useState(false);
  const [linkedInShadow, setLinkedInShadow] = useState(false);
  const [githubShadow, setGithubShadow] = useState(false);

  const sections = [
    "Home",
    "Education",
    "Info",
    "Experience",
    "Projects",
    "Skills",
  ];
  const sectionIds = [
    "#home",
    "#education",
    "#info",
    "#work",
    "#projects",
    "#skills",
  ];

  const jumpSection = (section) => {
    window.location.href = sectionIds[section];
    setDrawer(false);
  };

  const toggleShadows = (id) => {
    switch (id) {
      case "vinyl-stream":
        setVsShadow(!vsShadow);
        break;
      case "virtubook":
        setVbShadow(!vbShadow);
        break;
      case "email":
        setEmailShadow(!emailShadow);
        break;
      case "linkedIn":
        setLinkedInShadow(!linkedInShadow);
        break;
      case "github":
        setGithubShadow(!githubShadow);
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        {sections.map((value, index) => {
          return (
            <button
              onClick={() => jumpSection(index)}
              color="white"
              className="secButton"
            >
              {value}
            </button>
          );
        })}
      </Drawer>
      <Grid container>
        <Grid container>
          <Grid
            id="home"
            container
            justify="center"
            alignItems="center"
            spacing={1}
            className={classes.background1}
          >
            <Button
              className={classes.navButton}
              onClick={() => setDrawer(true)}
            >
              <MenuIcon className={classes.navButtonIcon} />
            </Button>
            <Grid container className={classes.skyline} justify="center">
              <Grid item>
                <img src={skyline} />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} className={classes.title}>
              <Grid container justify="center" alignItems="center" spacing={1}>
                <Grid item>
                  <h1
                    className="animate__animated animate__fadeInUp"
                    style={{
                      animationDuration: "0.5s",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    Hi,{"  "}
                  </h1>
                </Grid>
                <Grid item>
                  <h1
                    className="animate__animated animate__fadeInUp"
                    style={{
                      animationDelay: ".75s",
                      animationDuration: "0.5s",
                    }}
                  >
                    I'm Daniel
                  </h1>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid container justify="center">
                <Grid item className={classes.portrait}>
                  <img
                    style={{ width: "100%", display: "inline-block" }}
                    src={portrait}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          id="education"
          container
          className={classes.background2}
          spacing={3}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <h1 className={classes.educationTitle}>
                I'm a student at the University of Illinois
              </h1>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <h3 className={classes.educationInfo}>
                Major : Computer Engineering
                <br />
                GPA : 3.75/4.0
              </h3>
            </ScrollAnimation>
          </Grid>
        </Grid>
        <Grid container id="info" className={classes.info}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__animated animate__fadeInUp"
          >
            <h1 className={classes.sectionTitle}>Personal Information</h1>
          </ScrollAnimation>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <ScrollAnimation
                animateOnce
                animateIn="animate__animated animate__fadeInUp"
              >
                <a href="mailto: danielpresliermarks@gmail.com">
                  <Box
                    className={classes.infoBox}
                    boxShadow={emailShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("email")}
                    onMouseLeave={() => toggleShadows("email")}
                  >
                    <Grid container justify="center" alignItems="center">
                      <Grid xs={12}>
                        <EmailIcon style={{ fontSize: "15rem" }} />
                      </Grid>

                      <h2 className={classes.emailText}>
                        danielpresliermarks
                        <br />
                        @gmail.com
                      </h2>
                    </Grid>
                  </Box>
                </a>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ScrollAnimation
                animateOnce
                animateIn="animate__animated animate__fadeInUp"
              >
                <a
                  href="https://www.linkedin.com/in/daniel-m-510b3a128/"
                  target="_blank"
                >
                  <Box
                    className={classes.infoBox}
                    boxShadow={linkedInShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("linkedIn")}
                    onMouseLeave={() => toggleShadows("linkedIn")}
                  >
                    <Grid container justify="center" alignItems="center">
                      <Grid xs={12}>
                        <LinkedInIcon style={{ fontSize: "15rem" }} />
                      </Grid>
                      <h2 className={classes.infoText}>Daniel Marks</h2>
                    </Grid>
                  </Box>
                </a>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ScrollAnimation
                animateOnce
                animateIn="animate__animated animate__fadeInUp"
              >
                <a href="https://github.com/danielpmarks" target="_blank">
                  <Box
                    className={classes.infoBox}
                    boxShadow={githubShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("github")}
                    onMouseLeave={() => toggleShadows("github")}
                  >
                    <Grid container justify="center" alignItems="center">
                      <Grid xs={12}>
                        <GitHubIcon style={{ fontSize: "15rem" }} />
                      </Grid>
                      <h2 className={classes.infoText}>danielpmarks</h2>
                    </Grid>
                  </Box>
                </a>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid container id="work" className={classes.background3}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__animated animate__fadeInUp"
          >
            <h1 className={classes.sectionTitle}>Work Experience</h1>
          </ScrollAnimation>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box id="orange-tree" className={classes.workBox} boxShadow={5}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                  >
                    <Grid item>
                      <img src={GreenTree} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <h1 className={classes.workHeader}>
                        Orange Tree Alternatives
                      </h1>
                      <h3 className={classes.workSubtitle}>
                        <i>Frontend Web Developer</i>
                      </h3>
                      <p className={classes.workBody}>
                        <ul>
                          <li>
                            Online securities marketplace democratizing and
                            liquidizing real estate private equity investments
                          </li>
                          <li>
                            Developed user sign up and login processes using
                            React.js framework with Axios HTTP client
                          </li>
                          <li>
                            Worked collaboratively with frontend and backend
                            teams using Agile software development and Github
                            version control
                          </li>
                          <li>
                            Implemented Jest testing framework for quality
                            assurance of product
                          </li>
                        </ul>
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                  className={classes.workBox}
                  id="IEEE"
                  className={classes.workBox}
                  boxShadow={5}
                >
                  <Grid item>
                    <img src={IEEE} style={{ width: "100%" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <h1 className={classes.workHeaderSmall}>
                      Institute of Electrical and Electronics Engineers
                    </h1>
                    <h3 className={classes.workSubtitleSmall}>
                      <i>Corporate Committee Member</i>
                    </h3>
                    <p className={classes.workBodySmall}>
                      <ul>
                        <li>
                          Organize tech talks and informational sessions with
                          notable technology companies
                        </li>
                        <li>
                          Maintain correspondence with corporate sponsors such
                          as Apple, ViaSat, NVIDIA, and Microsoft
                        </li>
                      </ul>
                    </p>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                  className={classes.workBox}
                  id="VERL"
                  className={classes.workBox}
                  boxShadow={5}
                >
                  <Grid item>
                    <img src={uiuc_logo} style={{ width: "100%" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <h1 className={classes.workHeaderSmall}>
                      Virtual Education and Research Laboratory
                    </h1>
                    <h3 className={classes.workSubtitleSmall}>
                      <i>Augmented Reality Project Manager</i>
                    </h3>
                    <p className={classes.workBodySmall}>
                      <ul>
                        <li>
                          Managed a team creating 3D visualization augmented
                          reality software
                        </li>
                        <li>
                          Designed virtual science experiments which allow
                          students to better grasp scientific concepts
                          manifested in demonstrations
                        </li>
                        <li>
                          Built AR applications using Unity game engine with C#
                          scripting
                        </li>
                      </ul>
                    </p>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.background4}
          id="projects"
          justify="center"
        >
          <Grid item xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="animate__animated animate__fadeInUp"
            >
              <h1 className={classes.sectionTitle}>Projects</h1>
            </ScrollAnimation>
          </Grid>
          <Grid
            container
            spacing={5}
            style={{ marginBottom: AppTheme.spacing(5) }}
          >
            <Grid item xs={12} md={6}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                  id="vinyl-stream"
                  className={classes.paper}
                  onMouseEnter={() => toggleShadows("vinyl-stream")}
                  onMouseLeave={() => toggleShadows("vinyl-stream")}
                  boxShadow={vsShadow ? 10 : 3}
                  onClick={() =>
                    window.open(
                      "https://danielpmarks.github.io/vinyl-stream",
                      "_blank"
                    )
                  }
                >
                  <Grid
                    container
                    justify="center"
                    style={{ textAlign: "center" }}
                  >
                    <Grid item className={classes.thumbnail}>
                      <img
                        src={vinyl}
                        style={{
                          height: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <h2 className={classes.cardTitle}>Vinyl Stream</h2>
                    </Grid>
                    <Grid item xs={11} md={8}>
                      <h3 className={classes.cardSubtitle}>
                        A virtual record player and playback remote powered by
                        Spotify
                      </h3>
                    </Grid>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                  id="virtubook"
                  className={classes.paper}
                  onMouseEnter={() => toggleShadows("virtubook")}
                  onMouseLeave={() => toggleShadows("virtubook")}
                  boxShadow={vbShadow ? 10 : 3}
                  onClick={() =>
                    window.open("https://virtubook.herokuapp.com", "_blank")
                  }
                >
                  <Grid
                    container
                    justify="center"
                    style={{ textAlign: "center" }}
                  >
                    <Grid item className={classes.thumbnail}>
                      <img src={virtubook} style={{ height: "100%" }} />
                    </Grid>
                    <Grid item xs={12}>
                      <h2 className={classes.cardTitle}>VirtuBook</h2>
                    </Grid>
                    <Grid item xs={11} md={8}>
                      <h3 className={classes.cardSubtitle}>
                        Using augmented reality to bring education out of the
                        page
                      </h3>
                    </Grid>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          id="skills"
          className={classes.background5}
          justify="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <ScrollAnimation
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
            >
              <h1 className={classes.sectionTitle}>Skills</h1>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={4}>
            <ScrollAnimation
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
            >
              <Box className={classes.skillsBox} boxShadow={5}>
                <h2 className={classes.skillsHeader}>Programming Languages</h2>
                <Grid container justify="start" style={{}}>
                  <Grid item xs={5}>
                    <p className={classes.skillsBody}>
                      <ul style={{ margin: 0 }}>
                        <li>C</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                      </ul>
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className={classes.skillsBody}>
                      <ul style={{ margin: 0 }}>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                      </ul>
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={4}>
            <ScrollAnimation
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
            >
              <Box className={classes.skillsBox} boxShadow={5}>
                <h2 className={classes.skillsHeader}>Applications</h2>
                <Grid container justify="start">
                  <Grid item xs={12}>
                    <p className={classes.skillsBody}>
                      <ul style={{ margin: 0 }}>
                        <li>Unity Game Engine</li>
                        <li>Visual Studio Code</li>
                        <li>Creo Parametric</li>
                        <li>Autodesk Inventor/Fusion 360</li>
                      </ul>
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={4}>
            <ScrollAnimation
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
            >
              <Box className={classes.skillsBox} boxShadow={5}>
                <h2 className={classes.skillsHeader}>Other Skills</h2>
                <Grid container justify="start">
                  <Grid item xs={12}>
                    <p className={classes.skillsBody}>
                      <ul style={{ margin: 0 }}>
                        <li>UNIX Command Line</li>
                        <li>Agile Software Development</li>
                        <li>REST API Usage</li>
                        <li>Jest Testing Framework</li>
                      </ul>
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
