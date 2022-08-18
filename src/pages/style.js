import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppTheme from "../AppTheme";
import uiuc from "../res/uiuc.png";
import budapest from "../res/Budapest.JPG";
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
    minHeight: "100vh",
    overflowY: "hidden",
    backgroundImage: "https://images7.alphacoders.com/418/418009.jpg",
    //minHeight: "102vh",
  },
  background2: {
    backgroundColor: "DarkOrange",
    color: "white",
    backgroundImage: `url(${uiuc})`,
    backgroundSize: "cover",
    paddingLeft: AppTheme.spacing(2),
    paddingRight: AppTheme.spacing(2),

    paddingTop: AppTheme.spacing(30),
    minHeight: "100vh",
    [AppTheme.breakpoints.only("md")]: {
      paddingLeft: AppTheme.spacing(5),
      paddingRight: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.up("lg")]: {
      paddingLeft: AppTheme.spacing(10),
      paddingRight: AppTheme.spacing(10),
      paddingTop: AppTheme.spacing(30),
    },

    paddingBottom: AppTheme.spacing(20),
    zIndex: "3",
    minHeight: "100vh",
  },
  background3: {
    minHeight: "100vh",
    backgroundColor: "#1a1a1a",
    color: "white",
    [AppTheme.breakpoints.up("md")]: {
      paddingTop: "10vh",
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      paddingTop: "15vh",
      padding: AppTheme.spacing(2),
    },
    justify: "center",
  },
  background4: {
    backgroundColor: "#f2f2f2",
    color: "black",
    zIndex: 4,
    [AppTheme.breakpoints.up("md")]: {
      paddingTop: "10vh",
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      paddingTop: "15vh",
      padding: AppTheme.spacing(2),
    },
    minHeight: "100vh",
  },
  background5: {
    backgroundColor: "#7094db",
    color: "white",
    [AppTheme.breakpoints.up("md")]: {
      paddingTop: "10vh",
      padding: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.down("sm")]: {
      paddingTop: "15vh",
      padding: AppTheme.spacing(2),
    },
    minHeight: "100vh",
    margin: 0,
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
    alignItems: "flex-end",
  },
  skyline: {
    [AppTheme.breakpoints.only("xs")]: {
      height: "100vh",
    },
    [AppTheme.breakpoints.up("md")]: {
      height: "100vh",
    },
    backgroundSize: "cover",
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
    margin: 0,
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
    textAlign: "center",
    [AppTheme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  workBox: {
    padding: AppTheme.spacing(2),
    backgroundColor: "white",
    color: "black",
  },
  workHeader: {
    textAlign: "left",
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "2.5rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.75rem",
      textAlign: "center",
    },
    marginBottom: 0,
  },
  workHeaderMed: {
    textAlign: "center",
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "1.75rem",
      textAlign: "left",
    },
    [AppTheme.breakpoints.only("md")]: {
      fontSize: "2.5rem",
      textAlign: "left",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "2.5rem",
      textAlign: "left",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.75rem",
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
      fontSize: "2.5rem",
      textAlign: "left",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.75rem",
    },
    marginBottom: 0,
  },
  workSubtitle: {
    fontWeight: 400,
    fontSize: "1.5rem",
    [AppTheme.breakpoints.up("md")]: {
      //fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      //fontSize: "1rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1rem",
      textAlign: "center",
    },
    marginTop: 0,
    marginBottom: 0,
  },
  workDate: {
    fontWeight: 400,
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "1.25rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "1rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "0.75rem",
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
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.25rem",
      textAlign: "center",
    },
    marginTop: 0,
    marginBottom: 0,
  },

  workSubtitleMed: {
    fontWeight: 400,
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("md")]: {
      fontSize: "2rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1.25rem",
      textAlign: "center",
    },
    marginTop: 0,
    marginBottom: 0,
  },
  workBody: {
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [AppTheme.breakpoints.up("lg")]: {
      fontSize: "1.25rem",
    },

    [AppTheme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },

  workBodySmall: {
    [AppTheme.breakpoints.up("sm")]: {
      fontSize: "1.25rem",
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
      height: AppTheme.spacing(20),
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
      fontSize: "1.7rem",
    },
    [AppTheme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [AppTheme.breakpoints.only("md")]: {
      fontSize: "1.2rem",
    },
  },
  dropdown: {
    background: "none",
    boxShadow: "none",
    color: "white",
    fontSize: "2rem",
    [AppTheme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  dropdownBody: {
    fontSize: "1.5rem",
    [AppTheme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  expandIcons: {
    marginLeft: "2rem",
    fontSize: "2rem",
  },

  cardAvatar: {
    padding: 0,
  },

  topBarText: {
    fontSize: "1rem",
    /*[AppTheme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },*/
  },
  logo: {
    [AppTheme.breakpoints.only("sx")]: {
      height: "2rem",
      width: "2rem",
    },
    [AppTheme.breakpoints.only("sm")]: {
      height: "3rem",
      width: "3rem",
    },

    [AppTheme.breakpoints.only("md")]: {
      height: "5rem",
      width: "5rem",
    },
    [AppTheme.breakpoints.up("lg")]: {
      height: "6rem",
      width: "6rem",
    },
  },
  budapest: {
    //minWidth: "100vw",
    //maxHeight: "100vh",
    position: "absolute",
    opacity: "0.25",
    display: "inline-block",
    zIndex: 0,
    overflow: "hidden",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  backgroundAbout: {
    backgroundColor: "black",
    color: "white",
    backgroundImage: `url(${budapest})`,
    backgroundPosition: "center",
    maxHeight: "100vh",
    backgroundSize: "cover",
    paddingLeft: AppTheme.spacing(2),
    paddingRight: AppTheme.spacing(2),
    overflow: "hidden",
    paddingTop: "20vh",
    minHeight: "100vh",
    [AppTheme.breakpoints.only("md")]: {
      paddingLeft: AppTheme.spacing(5),
      paddingRight: AppTheme.spacing(5),
    },
    [AppTheme.breakpoints.up("lg")]: {
      paddingLeft: AppTheme.spacing(10),
      paddingRight: AppTheme.spacing(10),
      paddingTop: AppTheme.spacing(30),
    },

    paddingBottom: AppTheme.spacing(20),
    zIndex: "3",
    minHeight: "100vh",
  },
  welcome: {
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
  },
  aboutText: {
    [AppTheme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [AppTheme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
}));

export default useStyles;
