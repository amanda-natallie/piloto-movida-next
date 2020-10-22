import { Grid } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "../../assets/css/sidebar.module.scss";
import MenuList from "../general/MenuList";

const Sidebar = () => {
  return (
    <Grid item md={3}>
      <div className={styles.sidebar}>
        <h3>Navegue pelo portal</h3>
        <MenuList internal/>
      </div>
    </Grid>
  );
};

export default Sidebar;
