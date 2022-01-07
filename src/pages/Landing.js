import React, { useState } from "react";
import { Grid, Drawer, Button, Paper, Box, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import portrait from "../res/portrait.png";
import skyline from "../res/skyline.png";
import uiuc_logo from "../res/uiuc_logo.png";
import uiuc_white from "../res/UofI.png";
import AGCO from "../res/AGCO.png";
import Amazon from "../res/amazon.png"
import Tetris from "../res/tetris_block.png"
import SD411 from "../res/SD411.png"

import AppTheme from "../AppTheme";

import "animate.css";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

import vinyl from "../res/vinyl_stream.png";
import virtubook from "../res/virtubook.png";
import GreenTree from "../res/tree.png";
import IEEE from "../res/IEEE.png";

import useStyles from "./style.js";
import { FreeBreakfastOutlined } from "@material-ui/icons";

export default function Landing() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [tetrisShadow, setTetrisShadow] = useState(false);
  const [cpuShadow,setCpuShadow] = useState(false);
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
                      animationDelay: "0.5s",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    Hi,{" "}
                  </h1>
                </Grid>
                <Grid item>
                  <h1
                    className="animate__animated animate__fadeInUp"
                    style={{
                      animationDelay: "1.25s",
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
              <h1 className={classes.educationTitle}>Senior at the</h1>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <img className={classes.uiucLogo} src={uiuc_white} />
              </Grid>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <h3 className={classes.educationInfo}>
                Major : Computer Engineering
                <br />
                GPA : 3.66/4.0
              </h3>
            </ScrollAnimation>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item alignItems="center" >
              <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                <Accordion className={classes.dropdown}>
                  <AccordionSummary
                    justify="flex-start"
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >See Relevant Courses </AccordionSummary>
                  <AccordionDetails className={classes.dropdownBody}>
                    Data Structures, Database Systems, Computer Systems Engineering, Applied Parallel Programming, Computer Organization and Design, Artificial Intelligence, Applied Machine Learning, Interactive Computer Graphics, Digital Systems Laboratory, Digital/Analog Signal Processing, Probability with Engineering Applications, Applied Linear Algebra, Differential Equations              </AccordionDetails>
                </Accordion>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          id="work"
          justify="center"
          className={classes.background3}
          alignment="stretch"
        >
          <Grid item xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="animate__animated animate__fadeInUp"
              style={{ height: "100%" }}
            >
              <h1 className={classes.sectionTitle}>Work Experience</h1>
            </ScrollAnimation>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <ScrollAnimation
                style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <a
                  //href="https://www.agcoaccelerationcenter.com/"
                  target="_blank"
                >
                  <Box
                    style={{ height: "100%" }}
                    id="Amazon"
                    className={classes.workBox}
                    boxShadow={AmazonShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("Amazon", true)}
                    onMouseLeave={() => toggleShadows("Amazon", false)}
                  >
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <img style={{ width: "80%" }} src={Amazon} />
                      </Grid>
                      <Grid item xs={12} >
                        <h1 className={classes.workHeader}>
                          Amazon
                        </h1>
                        <h3 className={classes.workSubtitle}>
                          <i>Software Development Intern</i>
                        </h3>
                        <h3 className={classes.workDate}><i>May 2021 - August 2021</i></h3>
                        <p className={classes.workBody}>
                          <ul>
                            <li>Designed, researched, and implemented an intern project from start to finish, including rigorous code reviews, costing analysis, and rapid cloud development
                            </li>
                            <li>Provided detailed documentation on project design including final presentations to the organization
                            </li>
                            <li>Implemented Spring Beans, Mockito, ReactJS, PhaserJS, and AWS SDKs to create a reliable final product
                            </li>
                          </ul>
                        </p>
                      </Grid>
                    </Grid>
                  </Box>
                </a>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6}>
              <ScrollAnimation
                style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"

              >
                <a
                  href="https://www.agcoaccelerationcenter.com/"
                  target="_blank"
                >
                  <Box
                    style={{ height: "100%" }}
                    id="AGCO"
                    className={classes.workBox}
                    boxShadow={AGCOShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("AGCO", true)}
                    onMouseLeave={() => toggleShadows("AGCO", false)}
                  >
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <img style={{ width: "80%" }} src={AGCO} />
                      </Grid>
                      <Grid item xs={12}>
                        <h1 className={classes.workHeader}>
                          AGCO Corporation Acceleration Center
                        </h1>
                        <h3 className={classes.workSubtitle}>
                          <i>Augmented Reality Intern</i>
                        </h3>
                        <h3 className={classes.workDate}><i>September 2020 - May 2021</i></h3>
                        <p className={classes.workBody}>
                          <ul>
                            <li>
                              Utilize real-time object recognition to assist in manufacturing quality assurance and vehicle servicing
                            </li>
                            <li>
                              Design interactive augmented reality visualizations of large scale grain systems
                            </li>
                            <li>
                              Implement ASP.NET REST APIs to transfer and parse HTML and JSON data from web applications
                            </li>
                            <li>
                              Develop a pipeline to construct mobile AR experiences automatically from a scalable web service
                            </li>
                          </ul>
                        </p>
                      </Grid>
                    </Grid>
                  </Box>
                </a>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ScrollAnimation
                style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <a
                  href="https://www.linkedin.com/company/otalternatives/"
                  target="_blank"
                >
                  <Box
                    style={{ height: "100%" }}
                    id="orange-tree"
                    className={classes.workBox}
                    boxShadow={otShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("orangeTree", true)}
                    onMouseLeave={() => toggleShadows("orangeTree", false)}
                  >
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <img style={{ minWidth: "30%" }} src={GreenTree} />
                      </Grid>
                      <Grid item xs={12}>
                        <h1 className={classes.workHeaderMed}>
                          Orange Tree Alternatives
                        </h1>
                        <h3 className={classes.workSubtitleMed}>
                          <i>Frontend Web Developer</i>
                        </h3>
                        <h3 className={classes.workDate}><i>June 2020 - August 2020</i></h3>
                        <p className={classes.workBodySmall}>
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
                </a>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                  className={classes.workBox}
                  id="IEEE"
                  className={classes.workBox}
                  boxShadow={ieeeShadow ? 10 : 3}
                  onMouseEnter={() => toggleShadows("IEEE", true)}
                  onMouseLeave={() => toggleShadows("IEEE", false)}
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
                    <h3 className={classes.workDate}><i>September 2019 - May 2020</i></h3>
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
            <Grid item xs={12} md={6} lg={4}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <a
                  href="http://verl.npre.illinois.edu/default.html"
                  target="_blank"
                >
                  <Box
                    className={classes.workBox}
                    id="VERL"
                    className={classes.workBox}
                    boxShadow={verlShadow ? 10 : 3}
                    onMouseEnter={() => toggleShadows("VERL", true)}
                    onMouseLeave={() => toggleShadows("VERL", false)}
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
                      <h3 className={classes.workDate}><i>January 2020 - May 2020</i></h3>
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
                            Built AR applications using Unity game engine with
                            C# scripting
                          </li>
                        </ul>
                      </p>
                    </Grid>
                  </Box>
                </a>
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
              offset={0}
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
            <Grid item xs={12} md={6} lg={8}>
              <ScrollAnimation
              style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                style={{ height: "100%" }}
                  id="SD411"
                  className={classes.paper}
                  onMouseEnter={() => toggleShadows("CPU", true)}
                  onMouseLeave={() => toggleShadows("CPU", false)}
                  boxShadow={cpuShadow ? 10 : 3}
                  onClick={() =>
                    window.open(
                      "https://github.com/danielpmarks/SD411_CPU",
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
                        src={SD411}
                        style={{
                          height: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <h2 className={classes.cardTitle}>SD-411 CPU</h2>
                    </Grid>
                    <Grid item xs={11} md={8} >
                      <h3 className={classes.cardSubtitle}>
                        A fully pipelined, five-stage RISC V processor with advanced design features to improve performance
                      </h3>
                    </Grid>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ScrollAnimation
              style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                style={{ height: "100%" }}
                  id="tetris"
                  className={classes.paper}
                  onMouseEnter={() => toggleShadows("tetris", true)}
                  onMouseLeave={() => toggleShadows("tetris", false)}
                  boxShadow={tetrisShadow ? 10 : 3}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/posts/daniel-m-510b3a128_tetris-soc-projectmp4-activity-6798099502357065728-lrqe",
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
                        src={Tetris}
                        style={{
                          height: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <h2 className={classes.cardTitle}>FPGA Tetris</h2>
                    </Grid>
                    <Grid item xs={11} md={8} >
                      <h3 className={classes.cardSubtitle}>
                        A hardware based implementation of the classic Tetris game built on an FPGA using SystemVerilog
                      </h3>
                    </Grid>
                  </Grid>
                </Box>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ScrollAnimation
              style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                style={{ height: "100%" }}
                  id="vinyl-stream"
                  className={classes.paper}
                  onMouseEnter={() => toggleShadows("vinyl-stream", true)}
                  onMouseLeave={() => toggleShadows("vinyl-stream", false)}
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
            <Grid item xs={12} md={6} lg={8}>
              <ScrollAnimation
              style={{ height: "95%" }}
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box
                  id="virtubook"
                  style={{ height: "100%" }}
                  className={classes.paper}
                  onMouseEnter={() => toggleShadows("virtubook", true)}
                  onMouseLeave={() => toggleShadows("virtubook", false)}
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
          spacing={3}
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
                <h2 className={classes.skillsHeader}>Programming Languages and Libraries</h2>
                <Grid container justify="start" style={{}}>
                  <Grid item xs={5}>
                    <p className={classes.skillsBody}>
                      <ul style={{ margin: 0 }}>
                        <li>C</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>x86 Assembly</li>
                        <li>Haskell</li>
                        <li>Mockito</li>
                        <li>PyTorch</li>
                        <li>WebGL</li>
                      </ul>
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className={classes.skillsBody}>
                      <ul style={{ margin: 0 }}>
                        <li>SystemVerilog</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>JQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>.NET Core</li>
                        
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
                        <li>Creo Software Suite</li>
                        <li>Autodesk Inventor/Fusion 360</li>
                        <li>Postman</li>
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
                    onMouseEnter={() => toggleShadows("email", true)}
                    onMouseLeave={() => toggleShadows("email", false)}
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
                    onMouseEnter={() => toggleShadows("linkedIn", true)}
                    onMouseLeave={() => toggleShadows("linkedIn", false)}
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
                    onMouseEnter={() => toggleShadows("github", true)}
                    onMouseLeave={() => toggleShadows("github", false)}
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
      </Grid>
    </div>
  );
}
