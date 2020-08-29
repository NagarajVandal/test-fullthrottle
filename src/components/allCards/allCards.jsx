import React, { useState, useEffect } from "react";
import SimpleCard from "../card/individualCard";
import apiData from "../../api.json";
import { Grid } from "@material-ui/core";
import style from "./style.module.scss";

function AllCards() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(apiData.members);
  }, []);
  return (
    <div>
      <p className={style.userText}>User Activity Information</p>
      <Grid container className={style.gridWidth} spacing={1}>
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
