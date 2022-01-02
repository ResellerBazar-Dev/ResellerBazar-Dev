import React, { useEffect, useState } from "react";
import {
  Card,
  makeStyles,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { connect } from "react-redux";
import { CONTACT_US_REQUEST } from "../Constants/UserConstant";
import { NotificationManager } from "react-notifications";

const useStyle = makeStyles((theme) => ({
  ContactUsRootDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    flexDirection: "column",
    "&>p": {
      fontSize: "2.5rem",
      fontWeight: 600,
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
}));

const ContactUs = ({ contactUsAction, contactUsData }) => {
  const classes = useStyle();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  console.log(name);

  const handleSubmit = () => {
    if (message !== "") {
      contactUsAction(message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      message === "" &&
        NotificationManager.error("Please enter message", "", 3000);
    }
  };

  return (
    <div>
      <div className={classes.ContactUsRootDiv}>
        <Typography>
          Contact<span>US</span>
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
            label="Message"
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
          ></TextField>
          <Button
            variant="field"
            onClick={handleSubmit}
            startIcon={
              contactUsData?.loading && (
                <CircularProgress size="20px" color="#fff" />
              )
            }
          >
            Submit
          </Button>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactUsData: state.UserData.contactUsData,
});

const mapDispatchToProps = (dispatch) => ({
  contactUsAction: (message) =>
    dispatch({
      type: CONTACT_US_REQUEST,
      message,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
