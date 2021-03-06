import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Card.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs="12"
          md="3"
          className={cx(styles.card, styles.Infected)}
        >
          <CardContent>
            <Typography gutterBottom color="textSceondary">
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from Covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs="12"
          md="3"
          className={cx(styles.card, styles.Recovered)}
        >
          <CardContent>
            <Typography gutterBottom color="textSceondary">
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from Covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs="12"
          md="3"
          className={cx(styles.card, styles.Deaths)}
        >
          <CardContent>
            <Typography gutterBottom color="textSceondary">
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by Covid19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
