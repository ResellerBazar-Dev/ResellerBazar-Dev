import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/Menu";
import { ReactComponent as Logo } from "../../images/logo_1.svg";
import { ReactComponent as Brand } from "../../images/ResellerBazzar.svg";
import { ReactComponent as Brandtitle } from "../../images/Brandtitle.svg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import { Avatar, FormControl, Select, MenuItem } from "@mui/material";
import { connect } from "react-redux";
import Typographys from "./Typographys";
import { USER_LOGOUT_REQUEST } from "../../Constants/AuthConstant";
import SellIcon from "@mui/icons-material/Sell";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import utils from "../../utils/commonFunctions";
import { Typography } from "@material-ui/core";

const StyleMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#D10024 !important",
      color: "white",
    },
    "&:hover": {
      background: "red !important",
      color: "white",
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  navbarRoot: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#15161D",
  },

  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    lineHeight: "40px",
    padding: "0px 40px",
    border: "1px solid red",

    "&>div": {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
    },

    [theme.breakpoints.down(1024)]: {
      display: "none",
    },
  },

  userIcon: {
    cursor: "pointer",
    margin: "0 5px",
  },

  topHeaderLeftSideEmailIcon: {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },

  topHeaderLeftSideEmail: {
    cursor: "pointer",
    color: "white",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

  headerDropdown: {
    "&>div": {
      fontSize: "12px",
      color: "white",
      width: "max-content",
      "&>div": {
        color: "white",
      },
    },
    "&>svg": {
      color: "white",
      margin: "0",
    },
  },

  bottomHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    padding: "0 20px",

    [theme.breakpoints.down(1024)]: {
      display: "none",
    },
  },

  sectionMobile: {
    display: "none",
    background: "white",

    [theme.breakpoints.down(1024)]: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      height: "60px",
      alignItems: "center",
      padding: "0 20px",
    },
  },

  search_main: {
    display: "flex",
    justifyContent: "center",
  },

  searchIcon: {
    paddingLeft: "10px",
    height: "100%",
    color: theme.palette.primary.main,
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    position: "relative",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#F7F6F5",
    },
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: "10px",
    width: "100%",
    [theme.breakpoints.down(1150)]: {
      width: "65%",
    },
  },

  btn: {
    height: "38px",
    width: "100px",
    backgroundColor: "#D10024",
    border: "none",
    color: "white",
    fontWeight: 700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    [theme.breakpoints.down(1150)]: {
      width: "80px",
    },
  },

  sectionDesktop: {
    display: "flex",
    "&>div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "25px",
      fontSize: "14px",
      cursor: "pointer",
      [theme.breakpoints.down(1150)]: {
        padding: "25px 10px",
      },
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    "&>svg": {
      color: "white",
      fontSize: "30",
    },
  },

  menu_list: {
    width: "40%",
    height: "auto",
    backgroundColor: "white",
    boxShadow: "2px 2px 5px gray",
    position: "absolute",
    "&>div": {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: "700",
      borderBottom: "1px solid #808080",
    },

    "&>div>svg": {
      paddingRight: "20px",
    },
  },

  resellerLogo: {
    [theme.breakpoints.down(1150)]: {
      width: "70px",
      height: "70px",
    },
  },
  resellerLogoText: {
    cursor: "pointer",
  },
  inputBaseSearchfield: {
    color: theme.palette.primary.main,
    width: "320px",
    padding: "3px 40px",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();
  const { userData, LogoutAction } = props;

  const [anchorEl, setAnchorEl] = useState(false);
  const [headerDropdown, setHeaderDropdown] = useState("My Profile");
  const [currentPage, setCurrentPage] = useState(
    history.location.pathname.split("/")[1]
  );

  const handleMenuOpen = (e) => {
    e.preventDefault();
    setAnchorEl(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  const handleLogout = () => {
    LogoutAction();
  };

  return (
    <div>
      <AppBar position="sticky" className={classes.navbarRoot}>
        <div className={classes.topHeader}>
          <div className={classes.topHeaderLeftSide}>
            <MailOutlineIcon className={classes.topHeaderLeftSideEmailIcon} />
            <span className={classes.topHeaderLeftSideEmail}>
              {process.env.REACT_APP_OFFICIAL_EMAIL}
            </span>
          </div>
          <div className={classes.topHeaderRightSide}>
            <Typographys
              children={`Hii, ${
                userData?.loading === true
                  ? "Username"
                  : userData?.userInfo?.user?.name
              }`}
            />
            <Avatar
              alt={`${userData?.userInfo?.user?.name} profile image`}
              className={classes.userIcon}
              src={userData?.userInfo?.user?.profile_image}
              onClick={() => history.push("/profiles")}
              sx={{ width: 25, height: 25 }}
            />
            <FormControl>
              <Select
                variant="standard"
                className={classes.headerDropdown}
                value={headerDropdown}
                onChange={(e) => setHeaderDropdown(e.target.value)}
                disableUnderline
              >
                <StyleMenuItem
                  value="My Profile"
                  onClick={() => history.push("/profiles")}
                >
                  My Profile
                </StyleMenuItem>
                <StyleMenuItem
                  value="My Deals"
                  onClick={() =>
                    history.push(
                      `/dealpage/${utils.toBase64(
                        userData?.userInfo?.user?._id
                      )}`
                    )
                  }
                >
                  My Deal
                </StyleMenuItem>
                {userData?.userInfo?.user?.user_roles.includes("admin") && (
                  <StyleMenuItem
                    value=""
                    onClick={() => {
                      window.localStorage.clear();
                      window.location.href = "/adminLogin";
                    }}
                  >
                    Go to Admin Panel
                  </StyleMenuItem>
                )}
                {userData?.userInfo?.user?.status === false ? (
                  <>
                    <StyleMenuItem
                      value="Register"
                      onClick={() => history.push("/signup")}
                    >
                      Register
                    </StyleMenuItem>
                    <StyleMenuItem
                      value="Login"
                      onClick={() => history.push("/login")}
                    >
                      Login
                    </StyleMenuItem>
                  </>
                ) : (
                  <StyleMenuItem value="Logout" onClick={() => handleLogout()}>
                    Logout
                  </StyleMenuItem>
                )}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={classes.sectionMobile}>
          <div>
            {anchorEl === false ? (
              <MoreIcon
                onClick={handleMenuOpen}
                style={{ color: "black", fontSize: 40 }}
              />
            ) : (
              <CloseIcon
                onClick={handleMenuClose}
                style={{ color: "black", fontSize: 40 }}
              />
            )}
          </div>
          <div>
            {/* <Brandtitle /> lkjllmlm */}
            <Typography
              style={{ color: "black", fontWeight: 700, fontSize: "1.5rem" }}
            >
              Reseller<span style={{ color: "#D10024" }}>Bazzar</span>
            </Typography>
          </div>
          <div>
            <SearchIcon style={{ color: "black" }} />
          </div>
        </div>
        <div className={classes.bottomHeader}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton className={classes.resellerLogo}>
              <Logo onClick={() => history.push("/")} />
            </IconButton>
            <div className={classes.resellerLogoText}>
              <Brand onClick={() => history.push("/")} />
            </div>
          </div>
          {/* <div className={classes.search_main}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search here "
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                className={classes.inputBaseSearchfield}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <button className={classes.btn}>Search</button>
          </div> */}
          <div className={classes.sectionDesktop}>
            <div
              onClick={() => {
                history.push("/add-product/new");
              }}
              style={{ color: currentPage === "add-product" && "red" }}
            >
              {currentPage === "add-product" ? (
                <SellIcon />
              ) : (
                <SellOutlinedIcon />
              )}
              <Typographys children="Sell" />
            </div>

            <div
              onClick={() => {
                history.push("/wishlist");
              }}
              style={{ color: currentPage === "wishlist" && "red" }}
            >
              {currentPage === "wishlist" ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderIcon />
              )}

              <Typographys children="Your Wishlist" />
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

const mapStateToprops = (state) => ({
  userData: state.AuthData.userData,
});

const mapDispatchToProps = (dispatch) => ({
  LogoutAction: () => dispatch({ type: USER_LOGOUT_REQUEST }),
});

export default connect(mapStateToprops, mapDispatchToProps)(Navbar);
