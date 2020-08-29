import React from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { AppBar, Toolbar, Paper, makeStyles, Button } from "@material-ui/core";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assests/fullthrottle.png";
import Resume from "../../assests/NagarajResume.pdf";

import MobileNavbar from "./mobileNavbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: "10px",
  },
}));

function Navbar({ modeSwitch, darkMode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={8} className={style.desktopNavbar}>
        <AppBar position="static" color="inherit">
          <Toolbar variant="dense">
            <div className={classes.title}>
              <Link to="/" className={style.imgLogo}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <Button
              variant="outlined"
              style={{
                border: "none",
              }}
              href="https://github.com/NagarajVandal/test-fullthrottle"
              target="_blank"
            >
              Test
            </Button>
            <Button
              variant="outlined"
              style={{
                border: "none",
              }}
              href={Resume}
              target="_blank"
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              style={{
                border: "none",
              }}
              href="https://github.com/NagarajVandal"
              target="_blank"
            >
              About Me
            </Button>

            <div className={style.darkModeToggleDiv}>
              {darkMode ? (
                <Brightness4Icon align="right" onClick={modeSwitch} />
              ) : (
                <Brightness7Icon align="right" onClick={modeSwitch} />
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Paper>

      <div className={style.mobileNavbar}>
        <MobileNavbar modeSwitch={modeSwitch} darkmode={darkMode} />
      </div>
    </div>
  );
}

export default Navbar;
