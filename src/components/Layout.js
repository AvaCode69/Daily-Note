import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography, Drawer } from "@mui/material";

const drawerWidth = 240;
const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={classes.drawerPaper}
      >
        <Typography variant="h5">note frame</Typography>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
}
