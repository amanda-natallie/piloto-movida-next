import React, { FunctionComponent } from "react";
import { Intro } from "./Intro";
import styles from "../assets/css/index.module.scss";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import { Avatar } from "@material-ui/core";

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
            {breadcrumb.map((e: any) => (
              <>
                <li>
                  <NavigateNextIcon fontSize={"small"} />
                </li>
                <li>{e}</li>
              </>
            ))}
          </ul>

          <div className={styles.actions}>
            <Avatar alt="Suellen" src={"/images/images/profile-dp.jpg"} />
            <NotificationImportantIcon />
            <MailOutlineIcon />
            <ExitToAppIcon />
          </div>
        </section>
        {children}
      </div>
    </>
  );
};
