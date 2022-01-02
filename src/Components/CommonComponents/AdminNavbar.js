import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "../../images/logo_1.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { USER_LOGOUT_REQUEST } from "../../Constants/AuthConstant";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

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
      cursor: "pointer",
    },
    "&>svg": {
      fontSize: "2rem",
      cursor: "pointer",
    },
    "&>img": {
      cursor: "pointer",
    },
  },
  drawer: {
    "&>div": {
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
}));
const AdminNavbar = ({ LogoutAction }) => {
  const classes = useStyle();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        className={classes.appbar}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            alt="Website Logo"
            onClick={() => history.push("/home")}
          />
          <Typography
            variant="h6"
            component="div"
            onClick={() => history.push("/home")}
          >
            Reseller <span style={{ color: "#D10024" }}>Bazzar</span>
          </Typography>
          <AccountCircleIcon
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => LogoutAction()}>
              <ListItemIcon color="secondary">
                <Logout fontSize="small" color="secondary" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  LogoutAction: () =>
    dispatch({
      type: USER_LOGOUT_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar);
