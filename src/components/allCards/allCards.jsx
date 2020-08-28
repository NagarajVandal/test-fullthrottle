import React, { useState, useEffect } from "react";
import SimpleCard from "../card/individualCard";
import apiData from "../../api.json";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import style from "./style.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function AllCards() {
  const [data, setData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setData(apiData.members);
  }, []);
  return (
    <div>
      <p className={style.userText}>User Activity Information</p>
      <Grid container style={{ width: "100%" }} spacing={1}>
        {data &&
          data.map((member) => (
            <Grid
              item
              className={style.cardContainer}
              xs={12}
              md={6}
              lg={3}
              key={member.id}
            >
              <SimpleCard data={member} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default AllCards;
