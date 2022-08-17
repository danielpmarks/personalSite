import React, { useState } from "react";

//MUI Component Imports
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { OpenInNew } from "@material-ui/icons";
import ScrollAnimation from "react-animate-on-scroll";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Assets imports
import uiuc_white from "../res/UofI.png";

//Scroll Animation Imports
import "animate.css";

//Style Imports
import "./style.css";
import useStyles from "./style.js";
import AppTheme from "../AppTheme";

export default function WorkExperience(props) {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        id="work"
        className={classes.background2}
        alignItems="flex-center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <img className={classes.uiucLogo} src={uiuc_white} />
            </Grid>
          </ScrollAnimation>
        </Grid>

        <Grid item xs={12} md={6}>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <h3 className={classes.educationInfo}>
                  <u>Degree</u> <br /> Bachelor of Science in Computer
                  Engineering
                </h3>
              </Grid>
              <Grid item xs={12} style={{ padding: 0 }}>
                <h2
                  className={classes.educationInfo}
                  style={{
                    margin: 0,
                    marginBottom: AppTheme.spacing(2),
                    fontWeight: "normal",
                  }}
                >
                  With Honors
                </h2>
              </Grid>
              <Grid item xs={12} style={{ padding: 0 }}>
                <h3 className={classes.educationInfo}>GPA : 3.55/4.0</h3>{" "}
              </Grid>
            </Grid>
          </ScrollAnimation>
        </Grid>
        <Grid container xs={12} justify="center">
          <Grid item alignItems="center">
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <Accordion
                sx={{ background: "none", boxShadow: "none", color: "white" }}
                className={classes.dropdown}
              >
                <AccordionSummary
                  justify="flex-start"
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  See Relevant Courses{" "}
                </AccordionSummary>
                <AccordionDetails className={classes.dropdownBody}>
                  <p>
                    <a
                      href="https://courses.engr.illinois.edu/cs374/su2022/"
                      target="_blank"
                    >
                      Intro to Algorithms & Models of Computation <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://courses.grainger.illinois.edu/ece391/su2022/"
                      target="_blank"
                    >
                      Computer Systems Engineering <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://courses.grainger.illinois.edu/ece411/su2022/"
                      target="_blank"
                    >
                      {" "}
                      Computer Organization and Design
                      <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://ece.illinois.edu/academics/courses/ece448"
                      target="_blank"
                    >
                      {" "}
                      Artificial Intelligence <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://ece.illinois.edu/academics/courses/ece408"
                      target="_blank"
                    >
                      {" "}
                      Applied Parallel Programming <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://cs.illinois.edu/academics/courses/CS441"
                      target="_blank"
                    >
                      {" "}
                      Applied Machine Learning <OpenInNew />{" "}
                    </a>
                    ,
                    <a href="https://illinois-cs418.github.io/" target="_blank">
                      {" "}
                      Interactive Computer Graphics <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://ece.illinois.edu/academics/courses/ece333"
                      target="_blank"
                    >
                      Green Electric Energy <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://cs.illinois.edu/academics/courses/cs411"
                      target="_blank"
                    >
                      Database Systems <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://cs.illinois.edu/academics/courses/cs411"
                      target="_blank"
                    >
                      Data Structures <OpenInNew />{" "}
                    </a>
                    ,
                    <a
                      href="https://ece.illinois.edu/academics/courses/ece385"
                      target="_blank"
                    >
                      Digital Systems Laboratory <OpenInNew />{" "}
                    </a>
                    , Digital/Analog Signal Processing, Probability with
                    Engineering Applications, Applied Linear Algebra,
                    Differential Equations, Principles of Business Communication
                  </p>
                </AccordionDetails>
              </Accordion>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
