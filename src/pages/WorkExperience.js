import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import WorkAvatar from "components/avatar";

//Assets imports
import { makeStyles, createStyles } from "@material-ui/core/styles";
import uiuc_logo from "../res/uiuc_logo.png";
import block_I from "../res/block_I.jpg";
import AGCO from "../res/AGCO.png";
import AGCO_logo from "../res/AGCO_logo.png";
import Meta from "../res/Meta-Logo-Icon.png";
import Amazon from "../res/amazon.png";
import AmazonLogo from "../res/Amazon_icon.png";
import GreenTree from "../res/tree.png";
import Tetris from "../res/tetris_block.png";
import SD411 from "../res/SD411.png";
import vinyl from "../res/vinyl_stream.png";
import virtubook from "../res/virtubook.png";

import AppTheme from "../AppTheme";

//Scroll Animation Imports
import "animate.css";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

import useStyles from "./style.js";

export default function WorkExperience(props) {
  const classes = useStyles();

  const [workEmphasis, setWorkEmphasis] = useState("");

  const [tetrisShadow, setTetrisShadow] = useState(false);
  const [cpuShadow, setCpuShadow] = useState(false);
  const [vsShadow, setVsShadow] = useState(false);
  const [vbShadow, setVbShadow] = useState(false);

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
      case "CPU":
        setCpuShadow(state);
        break;
    }
  };
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        container
        id="work"
        className={classes.background3}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          style={{
            paddingBottom: AppTheme.spacing(10),

            margin: 0,
          }}
        >
          <Grid item xs={12} md={8}>
            <ScrollAnimation
              animateOnce
              animateIn="animate__animated animate__fadeInUp"
              style={{ height: "100%" }}
            >
              <h1 className={classes.sectionTitle}>Work Experience</h1>
            </ScrollAnimation>
          </Grid>
          <Grid
            container
            xs={12}
            md={workEmphasis != "" ? 12 : 8}
            spacing={5}
            justifyContent="center"
            alignItems="center"
            style={{
              marginBottom: workEmphasis != "" ? 2 : 0,
            }}
          >
            {workEmphasis != "" && (
              <Grid item xs={12} lg={10}>
                <Card
                  style={{ alignItems: "center" }}
                  sx={{
                    pl: { xs: 1, sm: 2, md: 5 },
                    pr: { xs: 1, sm: 2, md: 5 },
                    pt: 5,
                    pb: 5,
                    borderRadius: "1rem",
                  }}
                >
                  <Grid container sx={{ height: "100%" }}>
                    {workEmphasis == "meta" && (
                      <Grid
                        spacing={{ xs: 0, md: 5 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: "100%" }}
                        m={0}
                      >
                        <WorkAvatar
                          size="large"
                          src={Meta}
                          setEmphasis={(str) => setWorkEmphasis(str)}
                          emphasis={workEmphasis}
                          name="meta"
                        />
                        <Grid item md={8}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={12}>
                              <h1 className={classes.workHeader}>Meta</h1>
                              <h3 className={classes.workSubtitle}>
                                <i>Software Engineer</i>
                              </h3>
                              <h3 className={classes.workDate}>
                                <i>August 2022 - Present</i>
                              </h3>
                              <p className={classes.workBody}>
                                <ul>
                                  <li>
                                    Starting as a full-time software engineer in
                                    August of 2022.
                                  </li>
                                </ul>
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {workEmphasis == "amazon" && (
                      <Grid
                        container
                        spacing={{ xs: 0, md: 5 }}
                        justifyContent="center"
                        alignItems="center"
                        m={0}
                      >
                        <WorkAvatar
                          size="large"
                          src={AmazonLogo}
                          setEmphasis={(str) => setWorkEmphasis(str)}
                          emphasis={workEmphasis}
                          name="amazon"
                        />
                        <Grid item md={8}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={12}>
                              <h1 className={classes.workHeader}>Amazon</h1>
                              <h3 className={classes.workSubtitle}>
                                <i>Software Development Intern</i>
                              </h3>
                              <h3 className={classes.workDate}>
                                <i>May 2021 - August 2021</i>
                              </h3>
                              <p className={classes.workBody}>
                                <ul>
                                  <li>
                                    Designed, researched, and implemented an
                                    intern project from start to finish,
                                    including rigorous code reviews, costing
                                    analysis, and rapid cloud development
                                  </li>
                                  <li>
                                    Provided detailed documentation on project
                                    design including final presentations to the
                                    organization
                                  </li>
                                  <li>
                                    Implemented Spring Beans, Mockito, ReactJS,
                                    PhaserJS, and AWS SDKs to create a reliable
                                    final product
                                  </li>
                                </ul>
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {workEmphasis == "AGCO" && (
                      <Grid
                        spacing={{ xs: 0, md: 5 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                        m={0}
                      >
                        <WorkAvatar
                          size="large"
                          src={AGCO_logo}
                          setEmphasis={(str) => setWorkEmphasis(str)}
                          emphasis={workEmphasis}
                          name="AGCO"
                        />
                        <Grid item md={8}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={12}>
                              <h1 className={classes.workHeader}>
                                AGCO Corporation Acceleration Center
                              </h1>
                              <h3 className={classes.workSubtitle}>
                                <i>Augmented Reality Intern</i>
                              </h3>
                              <h3 className={classes.workDate}>
                                <i>September 2020 - May 2021</i>
                              </h3>
                              <p className={classes.workBody}>
                                <ul>
                                  <li>
                                    Utilized real-time object recognition to
                                    assist in manufacturing quality assurance
                                    and vehicle servicing
                                  </li>
                                  <li>
                                    Designed interactive augmented reality
                                    visualizations of large scale grain systems
                                  </li>
                                  <li>
                                    Implemented ASP.NET REST APIs to transfer
                                    and parse HTML and JSON data from web
                                    applications
                                  </li>
                                  <li>
                                    Developed a pipeline to construct mobile AR
                                    experiences automatically from a scalable
                                    web service
                                  </li>
                                </ul>
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {workEmphasis == "orange_tree" && (
                      <Grid
                        spacing={{ xs: 0, md: 5 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                        m={0}
                      >
                        <WorkAvatar
                          size="small"
                          src={GreenTree}
                          setEmphasis={(str) => setWorkEmphasis(str)}
                          emphasis={workEmphasis}
                          name="orange_tree"
                        />
                        <Grid item md={8}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={12}>
                              <h1 className={classes.workHeaderMed}>
                                Orange Tree Alternatives
                              </h1>
                              <h3 className={classes.workSubtitleMed}>
                                <i>Frontend Web Developer</i>
                              </h3>
                              <h3 className={classes.workDate}>
                                <i>June 2020 - August 2020</i>
                              </h3>
                              <p className={classes.workBodySmall}>
                                <ul>
                                  <li>
                                    Online securities marketplace democratizing
                                    and liquidizing real estate private equity
                                    investments
                                  </li>
                                  <li>
                                    Developed user sign up and login processes
                                    using React.js framework with Axios HTTP
                                    client
                                  </li>
                                  <li>
                                    Worked collaboratively with frontend and
                                    backend teams using Agile software
                                    development and Github version control
                                  </li>
                                  <li>
                                    Implemented Jest testing framework for
                                    quality assurance of product
                                  </li>
                                </ul>
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {workEmphasis == "VERL" && (
                      <Grid
                        spacing={{ xs: 0, md: 5 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                        m={0}
                      >
                        <WorkAvatar
                          size="small"
                          src={block_I}
                          setEmphasis={(str) => setWorkEmphasis(str)}
                          emphasis={workEmphasis}
                          name="VERL"
                        />
                        <Grid item md={8}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={12}>
                              <h1 className={classes.workHeaderSmall}>
                                UIUC Virtual Education and Research Laboratory
                              </h1>
                              <h3 className={classes.workSubtitleSmall}>
                                <i>Augmented Reality Project Manager</i>
                              </h3>
                              <h3 className={classes.workDate}>
                                <i>January 2020 - May 2020</i>
                              </h3>
                              <p className={classes.workBodySmall}>
                                <ul>
                                  <li>
                                    Managed a team creating 3D visualization
                                    augmented reality software
                                  </li>
                                  <li>
                                    Designed virtual science experiments which
                                    allow students to better grasp scientific
                                    concepts manifested in demonstrations
                                  </li>
                                  <li>
                                    Built AR applications using Unity game
                                    engine with C# scripting
                                  </li>
                                </ul>
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Card>
              </Grid>
            )}
          </Grid>

          <Grid item xs={12}>
            <ScrollAnimation
              style={{ height: "95%" }}
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
              justify="center"
            >
              <Grid container xs={12} justifyContent="center" mb={3}>
                <Grid
                  container
                  xs={12}
                  md={8}
                  spacing={{ xs: 1, md: 3 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  {workEmphasis != "meta" && (
                    <WorkAvatar
                      size="large"
                      src={Meta}
                      setEmphasis={(str) => setWorkEmphasis(str)}
                      emphasis={workEmphasis}
                      name="meta"
                    />
                  )}

                  {workEmphasis != "amazon" && (
                    <WorkAvatar
                      size="large"
                      src={AmazonLogo}
                      name="amazon"
                      emphasis={workEmphasis}
                      setEmphasis={(str) => setWorkEmphasis(str)}
                    />
                  )}

                  {workEmphasis != "AGCO" && (
                    <WorkAvatar
                      size="large"
                      src={AGCO_logo}
                      name="AGCO"
                      emphasis={workEmphasis}
                      setEmphasis={(str) => setWorkEmphasis(str)}
                    />
                  )}
                </Grid>
              </Grid>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12}>
            <ScrollAnimation
              style={{ height: "95%" }}
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
              justify="center"
            >
              <Grid container xs={12} justifyContent="center">
                <Grid
                  container
                  xs={12}
                  md={8}
                  spacing={{ xs: 3, md: 5 }}
                  justifyContent="center"
                  alignItems="center"
                  className={classes.smallAvatarSection}
                >
                  {workEmphasis != "orange_tree" && (
                    <WorkAvatar
                      size="small"
                      src={GreenTree}
                      setEmphasis={(str) => setWorkEmphasis(str)}
                      emphasis={workEmphasis}
                      name="orange_tree"
                    />
                  )}

                  {workEmphasis != "VERL" && (
                    <WorkAvatar
                      size="small"
                      src={block_I}
                      name="VERL"
                      emphasis={workEmphasis}
                      setEmphasis={(str) => setWorkEmphasis(str)}
                    />
                  )}
                </Grid>
              </Grid>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.background4}
        id="projects"
        justifyContent="center"
      >
        <Grid container justifyContent="center" xs={12} md={10}>
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
                    justifyContent="center"
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
                    <Grid item xs={11} md={8}>
                      <h3 className={classes.cardSubtitle}>
                        A fully pipelined, five-stage RISC V processor with
                        advanced design features to improve performance
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
                    justifyContent="center"
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
                    justifyContent="center"
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
                    <Grid item xs={11} md={8}>
                      <h3 className={classes.cardSubtitle}>
                        A hardware based implementation of the classic Tetris
                        game built on an FPGA using SystemVerilog
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
                    justifyContent="center"
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
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        id="skills"
        className={classes.background5}
        justifyContent="center"
        //spacing={3}
      >
        <Grid container xs={12} md={10} justifyContent="center">
          <Grid item xs={12}>
            <ScrollAnimation
              animateOnce
              offset={0}
              animateIn="animate__animated animate__fadeInUp"
            >
              <h1 className={classes.sectionTitle}>Skills</h1>
            </ScrollAnimation>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <ScrollAnimation
                animateOnce
                offset={0}
                animateIn="animate__animated animate__fadeInUp"
              >
                <Box className={classes.skillsBox} boxShadow={5}>
                  <h2 className={classes.skillsHeader}>
                    Programming Languages and Libraries
                  </h2>
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
        </Grid>
      </Grid>
    </Grid>
  );
}
