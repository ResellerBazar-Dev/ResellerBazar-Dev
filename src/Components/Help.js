import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Typography,
  Card,
  Button,
  CircularProgress,
} from "@material-ui/core";

import signUpToSell from "../images/signuptosell.jpg";
import privacypolicies from "../images/privacypolicies.jpg";
import contactUs from "../images/contactUs.jpg";
import { useHistory } from "react-router";
import { NotificationManager } from "react-notifications";

import { HELP_REQUEST } from "../Constants/UserConstant";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    flexDirection: "column",
    "&>p": {
      fontSize: "2.5rem",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
      "&>span": {
        color: "#D10024",
      },
    },
    "&>div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "20px",
      height: "500px",
      width: "600px",
      boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      [theme.breakpoints.down(620)]: {
        width: "500px",
      },
      [theme.breakpoints.down(520)]: {
        width: "400px",
      },
      [theme.breakpoints.down(420)]: {
        width: "300px",
      },

      "&>div": {
        margin: "10px",
        width: "80%",
      },
      "&>button": {
        backgroundImage: theme.palette.back.main,
        width: "25%",
        margin: "10px",

        "&>span": {
          color: "white",
        },
      },
    },
  },
  secondDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "60px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  signUpToSell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
    "&>div": {
      height: "300px",
      width: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      cursor: "pointer",
      "&>img": {
        width: "70%",
      },
      "&>p": {
        fontWeight: 700,
      },
    },
  },
  privacypolicies: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
    "&>div": {
      height: "300px",
      width: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      cursor: "pointer",
      "&>img": {
        width: "100%",
        marginTop: "3px",
      },
      "&>p": {
        fontWeight: 700,
        marginTop: "3px",
      },
    },
  },
  contactUs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
    "&>div": {
      height: "300px",
      width: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      cursor: "pointer",
      "&>img": {
        width: "70%",
      },
      "&>p": {
        fontWeight: 700,
      },
    },
  },
}));

const Help = ({ helpAction, helpData }) => {
  const classes = useStyle();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = () => {
    if (message !== "") {
      helpAction(message);
      setName("");
      setEmail("");
      setPhone("");
      setmessage("");
    } else {
      message === "" &&
        NotificationManager.error("Please enter Issue", "", 3000);
    }
  };

  return (
    <>
      <div className={classes.mainDiv}>
        <Typography>
          <span>How</span> can we <span>help</span> you ?
        </Typography>
        <Card>
          <TextField
            label="Full Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          ></TextField>
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          ></TextField>
          <TextField
            label="Phone"
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
          ></TextField>
          <TextField
            id="outlined-multiline-static"
            variant="standard"
            multiline
            label="Write Your Issue ! "
            rows={4}
            onChange={(e) => setmessage(e.target.value)}
            value={message}
            type="text"
          ></TextField>
          <Button
            variant="field"
            onClick={handleSubmit}
            startIcon={
              helpData?.loading && <CircularProgress size="20px" color="#fff" />
            }
          >
            Submit
          </Button>
        </Card>
      </div>
      <div className={classes.secondDiv}>
        <div className={classes.signUpToSell}>
          <Card onClick={() => history.push("/signup")}>
            <img src={signUpToSell} alt="" />
            <Typography>Sign Up to Sell</Typography>
            <Typography
              style={{
                fontSize: "0.8rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Turn your passion into a business, open up and easy shop
            </Typography>
          </Card>
        </div>
        <div className={classes.privacypolicies}>
          <Card>
            <img src={privacypolicies} alt="" />
            <Typography>Read our privacy and policies</Typography>
            <Typography
              style={{
                fontSize: "0.8rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Get the ins & outs of selling on easy
            </Typography>
          </Card>
        </div>
        <div className={classes.contactUs}>
          <Card onClick={() => history.push("/contactUs")}>
            <img src={contactUs} alt="" />
            <Typography>Contact Us</Typography>
            <Typography
              style={{
                fontSize: "0.8rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Got a question about your problem?
            </Typography>
          </Card>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  helpData: state.UserData.helpData,
});

const mapDispatchToProps = (dispatch) => ({
  helpAction: (message) => dispatch({ type: HELP_REQUEST, message }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Help);
