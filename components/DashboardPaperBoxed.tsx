import React, { FunctionComponent } from "react";
import { Intro } from "./Intro";
import styles from "../assets/css/index.module.scss";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import { Avatar, Grid } from "@material-ui/core";
import DrawerNotification from "./general/DrawerNotification";

interface Iprops {
  title: string;
  subtitle: string;
  breadcrumb: any;
  bg: string;
}

export const DashboardPaperBoxed: FunctionComponent<Iprops> = ({
  children,
  breadcrumb,
  title,
  subtitle,
  bg,
}) => {
  return (
    <>
      <Intro bg={bg} title={title} subtitle={subtitle}></Intro>
      <div className={styles.dashboardpaper}>
        <section>
          <ul>
            <li>Home</li>
            {breadcrumb.map((e: any, key: number) => (
              <>
                <li key={key}>
                  <NavigateNextIcon fontSize={"small"} />
                </li>
                <li key={key+1}>{e}</li>
              </>
            ))}
          </ul>

          <div className={styles.actions}>
            <Avatar alt="Suellen" src={"/images/images/avatar.jpeg"} />
            <DrawerNotification />
            <MailOutlineIcon />
          </div>
        </section>
        <Grid container>
          {children}
        </Grid>
      </div>
    </>
  );
};
