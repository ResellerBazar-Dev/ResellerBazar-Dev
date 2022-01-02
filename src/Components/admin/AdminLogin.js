import React, { useState } from "react";
import {
  Card,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import classNames from "classnames";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { ADMIN_LOGIN_REQUEST } from "../../Constants/AuthConstant";

const useStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    "&>div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "40%",
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("md")]: {
        width: "80%",
      },
      border: "2px solid #D10024",
      "&>div": {
        marginTop: "20px",
        width: "80%",
      },
      "&>button": {
        marginTop: "20px",
        marginBottom: "20px",
        width: "20%",
        backgroundImage: theme.palette.back.main,
        "&>span": {
          color: "white",
        },
      },
    },
  },
  adminLoginHeading: {
    marginTop: "20px",
    fontSize: "2rem",
    fontWeight: 800,
    "&>span": {
      color: theme.palette.primary.main,
      marginTop: "20px",
      fontSize: "2rem",
      fontWeight: 800,
    },
  },
}));
const AdminLogin = ({ adminLoginAction }) => {
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      adminLoginAction(email, password);
    } else {
      email === "" &&
        NotificationManager.error("Please enter your email", "", 3000);
      password === "" &&
        NotificationManager.error("Please enter your password", "", 3000);
    }
  };

  return (
    <div className={classes.main}>
      <Card>
        <Typography className={classes.adminLoginHeading}>
          Admin <Typography component="span">Login</Typography>
        </Typography>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <TextField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  adminLoginAction: (email, password) =>
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
      email,
      password,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
