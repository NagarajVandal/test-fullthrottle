import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import {
  AppBar,
  Toolbar,
  Paper,
  makeStyles,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import style from "./style.module.scss";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    display: "grid",
    placeItems: "center",
    height: "100%",
  },
  root: {
    flexGrow: 1,
  },
  listItem: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
  title: {
    flexGrow: 1,
    margin: "10px",
  },
}));

function MobileNavbar({ modeSwitch, darkMode }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevVal) => !prevVal);
  };

  return (
    <Paper elevation={8}>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <div className={classes.title}>
            <IconButton
              edge="start"
              className={classes.title}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            {/* <Link to="/" className={style.imgLogo}>
              <img src={Logo} alt="" width="100px" height="auto" />
            </Link> */}
          </div>

          <div className={style.darkModeToggleDiv}>
            {darkMode ? (
              <Brightness4Icon align="right" onClick={modeSwitch} />
            ) : (
              <Brightness7Icon align="right" onClick={modeSwitch} />
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List className={classes.list}>
          <ListItem button className={classes.listItem}>
            <a
              href="https://github.com/NagarajVandal/test-fullthrottle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test
            </a>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <a href="https://github.com/NagarajVandal/NagarajVandal">Resume</a>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <a href="https://github.com/NagarajVandal">About Me</a>
          </ListItem>
        </List>
      </Drawer>
    </Paper>
  );
}

export default MobileNavbar;
