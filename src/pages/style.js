import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppTheme from "../AppTheme";
import uiuc from "../res/uiuc.png";
import colors from "./constants";

const useStyles = makeStyles((AppTheme) => ({
  root: {
    overflow: "hidden",
    fontFamily: "Poppins",
  },
  navButton: {
    position: "fixed",

    [AppTheme.breakpoints.down("sm")]: {
      left: AppTheme.spacing(1),
    },
    [AppTheme.breakpoints.up("md")]: {
      left: AppTheme.spacing(3),
    },
    top: AppTheme.spacing(3),
    zIndex: 5,
    color: "white",
  },
  navButtonIcon: {
    [AppTheme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  portrait: {},
  title: {
    color: "white",
    textAlign: "center",
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
      marginTop: AppTheme.spacing(15),
    },
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
    zIndex: 3,
    marginLeft: AppTheme.spacing(3),
    marginTop: AppTheme.spacing(3),
  },
  background1: {
    backgroundColor: colors.primary,

    overflowY: "hidden",
    //minHeight: "102vh",
  },
  background2: {
    backgroundColor: "DarkOrange",
    color: "white",
    backgroundImage: `url(${uiuc})`,
    backgroundSize: "cover",
    paddingLeft: AppTheme.spacing(2),
    paddingRight: AppTheme.spacing(2),
    [AppTheme.breakpoints.only("md")]: {
      paddingLeft: AppTheme.spacing(5),
      paddingRight: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.up("lg")]: {
      paddingLeft: AppTheme.spacing(10),
      paddingRight: AppTheme.spacing(10),
    },

    paddingTop: AppTheme.spacing(20),
    paddingBottom: AppTheme.spacing(20),
    zIndex: "3",
    minHeight: "100vh",
  },
  background3: {
    backgroundColor: "#ffe6e6",
    color: "black",
    [AppTheme.breakpoints.up("md")]: {
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      padding: AppTheme.spacing(2),
    },
  },
  background4: {
    backgroundColor: "#f2f2f2",
    color: "black",
    zIndex: 4,
    [AppTheme.breakpoints.up("md")]: {
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      padding: AppTheme.spacing(2),
    },
    minHeight: "100vh",
  },
  background5: {
    backgroundColor: "#7094db",
    color: "white",
    [AppTheme.breakpoints.up("md")]: {
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      padding: AppTheme.spacing(2),
    },
    minHeight: "100vh",
    zIndex: 1,
  },
  info: {
    backgroundColor: "#00e699",
    color: "white",
    [AppTheme.breakpoints.up("md")]: {
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      padding: AppTheme.spacing(2),
    },
    zIndex: 3,
    minHeight: "60vh",
  },

  infoBox: {
    backgroundColor: "#00cc7a",
    color: "white",
    textAlign: "center",
    padding: AppTheme.spacing(2),
    minHeight: AppTheme.spacing(45),
  },

  emailText: {
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.only("md")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "1.25rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.5rem",
    },
  },
  infoText: {
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "2rem",
    },
  },
  portrait: {
    zIndex: 3,
    overflow: "hidden",
  },
  skyline: {
    position: "absolute",
    opacity: "0.25",
    zIndex: 0,
    overflow: "hidden",
  },
  educationTitle: {
    textAlign: "center",
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    },
    [AppTheme.breakpoints.only("md")]: {
      fontSize: "3rem",
    },
    [AppTheme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      textAlign: "center",
    },
    marginBottom: AppTheme.spacing(1),
  },
  educationInfo: {
    textAlign: "right",
    [AppTheme.breakpoints.only("md")]: {
      fontSize: "2rem",
      textAlign: "right",
    },
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
    [AppTheme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      textAlign: "center",
    },
  },
  uiucLogo: {
    width: "100%",
    [AppTheme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  drawer: {
    background: "black",
  },
  secButton: {
    paddingLeft: AppTheme.spacing(3),
    paddingRight: AppTheme.spacing(3),
    fontSize: "2rem",
    color: "white",
    paddingTop: AppTheme.spacing(2),
  },
  sectionTitle: {
    fontSize: "4rem",
    [AppTheme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      textAlign: "center",
    },
    [AppTheme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  workBox: {
    padding: AppTheme.spacing(2),
    backgroundColor: "white",
    color: "black",
    minHeight: AppTheme.spacing(70),
  },
  workHeader: {
    textAlign: "left",
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.75rem",
      textAlign: "center",
    },
    marginBottom: 0,
  },
  workHeaderSmall: {
    textAlign: "center",
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "1.75rem",
      textAlign: "left",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "3rem",
      textAlign: "left",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.75rem",
    },
    marginBottom: 0,
  },
  workSubtitle: {
    fontWeight: 400,
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.5rem",
      textAlign: "center",
    },
    marginTop: 0,
    marginBottom: 0,
  },
  workSubtitleSmall: {
    fontWeight: 400,
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.5rem",
      textAlign: "center",
    },
    marginTop: 0,
    marginBottom: 0,
  },
  workBody: {
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },

    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },
  workBodySmall: {
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },
  paper: {
    paddingTop: AppTheme.spacing(3),
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "3rem",
    textAlign: "center",
    margin: 0,
    marginTop: AppTheme.spacing(2),
  },
  cardSubtitle: {
    fontFamily: "Poppins",
    fontWeight: 400,
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  thumbnail: {
    [AppTheme.breakpoints.down("xs")]: {
      height: AppTheme.spacing(20),
    },
    [AppTheme.breakpoints.up("sm")]: {
      height: AppTheme.spacing(30),
    },
    [AppTheme.breakpoints.up("lg")]: {
      height: AppTheme.spacing(40),
    },
  },
  skillsHeader: {
    textAlign: "center",
    marginBottom: 0,
    [AppTheme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      textAlign: "left",
    },
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
    marginLeft: AppTheme.spacing(2),
    marginRight: AppTheme.spacing(2),
  },
  skillsBox: {
    backgroundColor: "#3366cc",
    paddingTop: AppTheme.spacing(2),
    paddingBottom: AppTheme.spacing(2),
  },
  skillsBody: {
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
