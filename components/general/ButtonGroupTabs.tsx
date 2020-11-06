import {
  Button,
  ButtonGroup,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";

interface Iprops {
  activeTab: number;
  setActiveTab: Function;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    activeButton: {
      background: "orange",
    },
  })
);
const ButtonGroupTabs = ({ activeTab, setActiveTab }: Iprops): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" style={{margin: "0 auto"}} size="large">
        <Button
          className={activeTab === 1 ? classes.activeButton : ""}
          onClick={() => setActiveTab(1)}
        >
          Pedir ajuda
        </Button>
        <Button
          className={activeTab === 2 ? classes.activeButton : ""}
          onClick={() => setActiveTab(2)}
        >
          Meus pedidos em aberto
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupTabs;
