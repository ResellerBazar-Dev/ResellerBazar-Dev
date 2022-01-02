import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Card } from "@mui/material";
import vijay from "../images/vijay.jpeg";
import jay from "../images/depani.jpeg";
import raj from "../images/raj.jpeg";
import vivek from "../images/vivek.jpeg";
import prashant from "../images/prashant.jpeg";
import yugen from "../images/yugen.jpg";

const useStyle = makeStyles((theme) => ({
  rootAboutDiv: {},
  header: {
    backgroundImage: theme.palette.back.main,
    height: "420px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>p": {
      color: "white",
      fontSize: "5rem",
    },
  },
  goal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "35px",

    "&>div": {
      width: "80%",
      boxShadow: "0px 0px 5px 2px #D10024",
      display: "flex",
      alignItems: "center",
    },
  },
  Head: {
    fontSize: "3rem",
    fontWeight: "500",
    "&>span": {
      color: "#D10024",
      textDecoration: "underline",
    },
  },
  goalText: {
    fontSize: "1.1rem",
    margin: "0px 20px",
    fontWeight: 500,
    textAlign: "center",
  },
  team: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "5%",
    flexWrap: "wrap",
  },
  teamInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    [theme.breakpoints.down(500)]: {
      flexDirection: "column",
      display: "flex",
    },
    "&>div": {
      width: "240px",
      height: "270px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
      boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px",
      textAlign: "center",
      [theme.breakpoints.down(769)]: {
        width: "220px",
      },
      [theme.breakpoints.down(725)]: {
        width: "auto",
      },
      [theme.breakpoints.down(500)]: {
        width: "220px",
      },

      "&>div": {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginTop: "10px",

        "&>img": {
          width: "150px",
        },
      },
    },
  },
}));
const AboutUs = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.rootAboutDiv}>
        <div className={classes.header}>
          <Typography>AboutUS</Typography>
        </div>
        <div className={classes.goal}>
          <Typography className={classes.Head}>
            Our <span>Goal</span>
          </Typography>
          <br />
          <Card>
            <Typography className={classes.goalText}>
              Welcome in resellerBazzar. We are here only for you and our main
              goal is many person in trubble for they own old product and sell
              it.But many time they can't achive best prise for it and they
              can't sell it. we are here for those person whome is sell their
              old products and many more other things.So,visit and enjoy with
              resellerBazzar. Our objective is to increase the penetration of
              classifieds in the market and we believe as a market leader it is
              our job to do that. And as we do that companies which are in a
              similar space will actually benefit from it.
            </Typography>
          </Card>
        </div>
        <div className={classes.team}>
          <div className={classes.Head}>
            Our <span>Team</span>
          </div>
          <div className={classes.teamInfo}>
            <Card>
              <Card>
                <img src={vijay} alt="..." />
              </Card>
              <Typography>Vijay Puchhadiya</Typography>
              <br />
              <Typography>CEO</Typography>
            </Card>
            <Card>
              <Card>
                <img src={jay} alt="..." />
              </Card>
              <Typography>Jay Depani</Typography>
              <br />
              <Typography>CFO</Typography>
            </Card>
            <Card>
              <Card>
                <img src={raj} alt="..." />
              </Card>
              <Typography>Rajkumar Rupapara</Typography>
              <br />
              <Typography>COO</Typography>
            </Card>
            <Card>
              <Card>
                <img src={vivek} alt="..." />
              </Card>
              <Typography>Vivek Madaliya</Typography>
              <br />
              <Typography>Senior Front-end Developer</Typography>
            </Card>
            <Card>
              <Card>
                <img src={yugen} alt="..." />
              </Card>
              <Typography>Yugen Gelani</Typography>
              <br />
              <Typography>Front-end Developer</Typography>
            </Card>
            <Card>
              <Card>
                <img src={prashant} alt="..." />
              </Card>
              <Typography>Prashant Gajera</Typography>
              <br />
              <Typography>Front-end Developer</Typography>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
