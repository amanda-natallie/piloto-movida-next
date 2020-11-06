import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import { Badge } from "@material-ui/core";
import Notification from "../../components/general/Notification";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MessageIcon from '@material-ui/icons/Message';
import { theme } from "../../utils/theme";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerNotification() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
          <ListItemText primary={"Notificações"} />
        </ListItem>
      </List>
      <Divider />
      <Notification icon={<AssignmentIndIcon style={{ color: "orange" }}/>} title={"Seus documentos foram aprovados"} description={"agora você pode utilizar seus documentos em suas transações online!"} time={"agora mesmo"}/>
      <Notification icon={<MessageIcon style={{ color: "orange" }}/>} title={"Responda seu ticket de suporte"} description={"veja a resposta na sua area de suporte."} time={"a 4 minutos"}/>
      
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment>
          <Badge badgeContent={2} color="primary" style={{cursor: "pointer"}}>
            <NotificationImportantIcon onClick={toggleDrawer(anchor, true)} />
          </Badge>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
