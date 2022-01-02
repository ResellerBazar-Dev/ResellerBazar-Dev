import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WcIcon from "@mui/icons-material/Wc";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import classNames from "classnames";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  appbar: {
    background: "#15161D !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&>div": {
      fontSize: "2rem",
      fontWeight: 700,
    },
    "&>svg": {
      fontSize: "2rem",
    },
  },
  drawer: {
    "&>div": {
      border: "none",
      background: "#1E1F29 !important",
      color: "white ",
    },
  },
  mainDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "20px",
  },
  DashboardCard: {
    width: "22%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "#1DA1F2",
    "&>p": {
      fontSize: "2.5rem",
    },
    "&>div": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      "&>svg": {
        fontSize: "3.5rem",
      },
    },
  },
  listIconStyle: {
    "&>svg": {
      color: theme.palette.primary.main,
    },
  },
  activeListItemStyle: {
    background: "#fff !important",
    borderRadius: "25px 0 0 25px !important",
  },
  activeListItemTextStyle: {
    color: theme.palette.primary.main,
  },
  listItemStyle: {
    "&:hover": {
      background: "#fff !important",
      "&>div": {
        color: `${theme.palette.primary.main} !important`,
      },
    },
  },
}));

const getListItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    icon: <PersonIcon />,
  },
  {
    name: "Products",
    icon: <InventoryIcon />,
  },
  {
    name: "Brand",
    icon: <BrandingWatermarkIcon />,
  },
  {
    name: "Category",
    icon: <CategoryIcon />,
  },
  {
    name: "SubCategory",
    icon: <CategoryIcon />,
  },
  {
    name: "Contact Us",
    icon: <EmailIcon />,
  },
  {
    name: "Help Messages",
    icon: <HelpCenterIcon />,
  },
  {
    name: "Banners",
    icon: <ViewCarouselIcon />,
  },
];

const DrawerComponents = ({ activeStep, setActiveStep }) => {
  const classes = useStyle();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <div>
          <List>
            {getListItems.map((item, key) => {
              return (
                <ListItem
                  button
                  key={key}
                  onClick={() => {
                    setActiveStep(key);
                  }}
                  className={classNames(
                    classes.listItemStyle,
                    activeStep === key && classes.activeListItemStyle
                  )}
                >
                  <ListItemIcon className={classes.listIconStyle}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    className={
                      activeStep === key && classes.activeListItemTextStyle
                    }
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerComponents;
