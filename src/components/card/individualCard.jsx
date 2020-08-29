import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import boy from "../../assests/boy.svg";
import ScheduleIcon from "@material-ui/icons/Schedule";
import style from "./style.module.scss";
import DetailsDialog from "../detailsDialog/detailsDialog";
import CalendarDialog from "../calendar/CalenderDialog";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    marginTop: "5px",
    fontWeight: "bold",
  },
  pos: {
    margin: "0 0 12px 10px",
  },
});

export default function SimpleCard({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCalendarOpen = () => {
    setCalendarOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };

  return (
    <>
      <Card className={classes.root} elevation={24}>
        <CardContent className={style.cardContent}>
          <img src={boy} alt="" />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.real_name}
          </Typography>
          <div className={style.timezomeDiv}>
            <ScheduleIcon />
            <Typography className={classes.pos} color="textSecondary">
              {data.tz}
            </Typography>
          </div>
          <div className={style.activeTime}>
            <div className={style.activeDays}>
              <p>Active Days</p>
              <p>{data.activity_periods.length}</p>
            </div>
          </div>
        </CardContent>
        <CardActions className={style.cardActionContainer} style={{}}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            className={style.actionBtn}
            onClick={handleClickOpen}
          >
            More Details
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            className={style.actionBtn}
            onClick={handleCalendarOpen}
          >
            View Calendar
          </Button>
        </CardActions>
      </Card>
      <DetailsDialog
        open={open}
        handleClose={handleClose}
        periods={data.activity_periods}
        name={data.real_name}
      />

      <CalendarDialog
        open={calendarOpen}
        handleClose={handleCalendarClose}
        periods={data.activity_periods}
        name={data.real_name}
      />
    </>
  );
}
