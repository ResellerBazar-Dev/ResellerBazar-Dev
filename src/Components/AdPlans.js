import React from "react";
import { makeStyles, Card, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  rootAdDiv: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },

    "&>div": {
      width: "30%",
      height: "500px",
      float: "left",
      margin: "10px 10px",
      [theme.breakpoints.down(1024)]: {
        width: "30%",
      },
      [theme.breakpoints.down(768)]: {
        width: "85%",
      },
    },
  },
  platinumDiv: {
    height: "40%",
    backgroundColor: "#E5E4E2",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",

    "&>p": {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
  },
  btnDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundImage: theme.palette.back.main,
    width: "20%",
    marginBottom: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    "&>span": {
      color: "white",
    },
  },
  goldDiv: {
    height: "40%",
    backgroundColor: "#FFD700",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",

    "&>p": {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
  },
  silverDiv: {
    height: "40%",
    backgroundColor: "#C0C0C0",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    "&>p": {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
  },
  detailDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AdPlans = () => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <div>
      <div className={classes.rootAdDiv}>
        <Card>
          <div className={classes.platinumDiv}>
            <Typography>Platinum</Typography>
          </div>
          <div className={classes.detailDiv}>
            <Typography>
              Ad Duration Time : <span>30days</span>
            </Typography>
            <br />
            <Typography>
              Ad Price : <span>299₹</span>
            </Typography>
            <br />
            <Typography>Unlimited Presentation</Typography>
            <br />
            <Typography>Money Back Guarantee</Typography>
            <br />
            <Typography>Advance Ad Promotion</Typography>
            <br />
            <Typography>Priority Support</Typography>
          </div>
        </Card>
        <Card>
          <div className={classes.goldDiv}>
            <Typography>Gold</Typography>
          </div>
          <div className={classes.detailDiv}>
            <Typography>
              Ad Duration Time : <span>30days</span>
            </Typography>
            <br />
            <Typography>
              Ad Price : <span>199₹</span>
            </Typography>
            <br />
            <Typography>Intermidiate Presentation</Typography>
            <br />
            <Typography> Half Money Back Guarantee</Typography>
            <br />
            <Typography>Limited Ad Promotion</Typography>
            <br />
            <Typography>Priority Support</Typography>
          </div>
        </Card>
        <Card>
          <div className={classes.silverDiv}>
            <Typography>Silver</Typography>
          </div>
          <div className={classes.detailDiv}>
            <Typography>
              Ad Duration Time : <span>30days</span>
            </Typography>
            <br />
            <Typography>
              Ad Price : <span>99₹</span>
            </Typography>
            <br />
            <Typography>Limited Presentation</Typography>
            <br />
            <Typography> No Money Back Guarantee</Typography>
            <br />
            <Typography>Few Ad Promotion</Typography>
            <br />
            <Typography>Priority Support</Typography>
          </div>
        </Card>
      </div>
      <div className={classes.btnDiv}>
        <Button
          variant="field"
          className={classes.btn}
          onClick={() => history.push("/Advirtise-form")}
        >
          Let's Post Ad
        </Button>
      </div>
    </div>
  );
};

export default AdPlans;
