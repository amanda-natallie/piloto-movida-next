import { Divider, Grid, Paper } from "@material-ui/core";
import React from "react";
import styles from "../../assets/css/components/notification.module.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

interface Iprops {
  icon: any;
  title: string;
  description: string;
  time: string;
}

const Notification = ({ icon, title, description, time }: Iprops) => {
  return (
    <div className={styles.boxNotification}>
      <Paper elevation={3} className={styles.box}>
        <div className={styles.header}>
          {icon}
          <small>{time}</small>
        </div>

        <Grid container>
          <Grid item xs={12}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Grid>
        </Grid>
      </Paper>

      <Divider />
    </div>
  );
};

export default Notification;
