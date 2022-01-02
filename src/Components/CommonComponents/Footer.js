import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Brand } from "../../images/ResellerBazzar.svg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, useHistory } from "react-router-dom";
import utils from "../../utils/commonFunctions";
import clsx from "clsx";
import Typographys from "./Typographys";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    main_footer:{
        display:"flex",
        flexDirection:'column',
        position:'static',
        bottom:"0%",
        fontFamily: "Montserrat",
        margin: "0px",
        padding: "0px",
        width:"100%",
        height:"auto",
        backgroundColor:"#15161D",
        color:"#C4C4C4",


    "&>div": {
      display: "flex",
      flexWrap: "wrap",
    },

    "&>div>div>h3": {
      color: "white",
      margin: 0,
      marginBottom: "12px",
    },
    "&>div>div>div": {
      display: "flex",
      alignItem: "center",
    },
    "&>div>div>div>svg": {
      color: "#D10024",
      marginRight: "10px",
    },
  },
  top_footer: {
    width: "auto",
    margin: "20px 30px",
    "&>div": {
      lineHeight: "30px",
    },

    "&>span": {
      lineHeight: "25px",
    },
  },
  adjust: {
    width: "400px",
  },
  bottom_footer: {
    backgroundColor: "#1E1F29",
    width: "100%",
    borderTop: "1px solid #D10024",
    justifyContent: "center",
    lineHeight: "65px",
    // display: "flex",
    // alignItem: "center",
  },

  copyright: {
    fontSize: "18px",
    "&>span>span": {
      color: "#D10024",
    },
  },
  footerLinks: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
function Footer({ categoryData }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.main_footer}>
      <div>
        <div className={clsx(classes.top_footer, classes.adjust)}>
          <Brand
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
          <p style={{ marginTop: "10px" }}>"Reseller Market Of India"</p>
          <div>
            <LocationOnIcon />
            <span>Ahemdabad</span>
          </div>

          <div>
            <MailOutlineIcon />
            <span>resellerBazzar@gmail.com</span>
          </div>
        </div>
        <div className={classes.top_footer}>
          <h3>INFORMATION</h3>
          <Typographys
            className={classes.footerLinks}
            children="About Us"
            onClick={() => history.push("/aboutus")}
          />
          <Typographys
            className={classes.footerLinks}
            children="Contact Us"
            onClick={() => history.push("/contactUs")}
          />
          <Typographys
            className={classes.footerLinks}
            children="Privacy policy"
            onClick={() => {}}
          />
          <Typographys
            className={classes.footerLinks}
            children="Terms & Conditions"
            onClick={() => {}}
          />
          <Typographys
            className={classes.footerLinks}
            children="Helps"
            onClick={() => history.push("help")}
          />
        </div>
        <div className={classes.top_footer}>
          <h3>Categories</h3>
          {categoryData?.data?.data?.slice(0, 5).map((item, key) => {
            return (
              <Typographys
                className={classes.footerLinks}
                children={item?.category_name}
                onClick={() =>
                  history.push(`/category/${utils.toBase64(item?._id)}`)
                }
              />
            );
          })}
          <Typographys
            className={classes.footerLinks}
            children="More..."
            onClick={() => {}}
          />
        </div>

        <div className={classes.top_footer}>
          <h3>Services</h3>
          <Typographys
            className={classes.footerLinks}
            children="Sell product"
            onClick={() => history.push("/add-product/new")}
          />
          <Typographys
            className={classes.footerLinks}
            children="Advirtise for your product"
            onClick={() => history.push("/adPlans")}
          />
        </div>
        <div className={classes.top_footer}>
          <h3>Connect With Us</h3>

          <Link>
            <IconButton
              style={{ color: "#D10024" }}
              onClick={() =>
                window.open(
                  "https://instagram.com/reseller_bazzar?utm_medium=copy_link"
                )
              }
            >
              <InstagramIcon
                style={{ color: "D10024", fontSize: "30px", margin: 10 }}
              />
            </IconButton>
          </Link>

          <Link>
            <IconButton
              style={{ color: "#D10024" }}
              onClick={() => window.open("https://twitter.com/ResellerBazzar")}
            >
              <TwitterIcon
                style={{ color: "D10024", fontSize: "30px", margin: 10 }}
              />
            </IconButton>
          </Link>
          <Link target="_blank">
            <IconButton
              style={{ color: "#D10024" }}
              onClick={() =>
                window.open(
                  "https://instagram.com/reseller_bazzar?utm_medium=copy_link"
                )
              }
            >
              <LinkedInIcon
                style={{ color: "D10024", fontSize: "30px", margin: 10 }}
              />
            </IconButton>
          </Link>
          <Link target="_blank">
            <IconButton
              style={{ color: "#D10024" }}
              onClick={() =>
                window.open(
                  "https://instagram.com/reseller_bazzar?utm_medium=copy_link"
                )
              }
            >
              <FacebookIcon
                style={{ color: "D10024", fontSize: "30px", margin: 10 }}
              />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className={classes.bottom_footer}>
        <div className={classes.copyright}>
          <span>
            Copyright @2021 All rights reserved | Created By Team Reseller{" "}
            <span>Bazzar</span>
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categoryData: state.CategoryData.getCategoryData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
