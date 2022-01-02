import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { USER_LOGIN_REQUEST } from "../../Constants/AuthConstant";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  RbMainDiv: {
    padding: "200px",
    [theme.breakpoints.down(580)]: {
      padding: "30px",
    },
  },
  RbMainContainer: {
    width: "100%",
    // height: "80vh",
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    padding: "20px 90px",
    [theme.breakpoints.down(580)]: {
      padding: "20px 10px",
      // height: "90vh",
    },
    "&>p": {
      fontWeight: "bold",
      fontSize: "30px",
      color: theme.palette.secondary.main,
      textAlign: "center",
      "&>span": {
        color: theme.palette.primary.main,
      },
    },
  },
  RbSubContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    alignItems: "center",
    [theme.breakpoints.down(980)]: {
      flexDirection: "column",
    },
    "&>div": {
      "&>p": {
        fontWeight: "bold",
        fontSize: "40px",
        color: theme.palette.secondary.main,
        textAlign: "center",
        marginTop: "-80px",
        [theme.breakpoints.down(980)]: {
          marginTop: "0px",
        },
        [theme.breakpoints.down(580)]: {
          fontSize: "25px",
        },
        "&>span": {
          color: theme.palette.primary.main,
        },
      },
    },
    "&>form": {
      "&>div": {
        "&:nth-child(1)": {
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          "&>div": {
            marginTop: "34px",
            "&>div": {
              [theme.breakpoints.down(580)]: {
                width: "100%",
                height: "35px",
              },
            },
          },
        },
        "&:nth-child(2)": {
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          "&>p": {
            fontWeight: "bold",
            fontSize: "15px",
            textDecoration: "underline",
            color: theme.palette.primary.main,
            cursor: "pointer",
            marginTop: "8px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "13px",
            },
          },
          "&>button": {
            width: "120px",
            height: "46px",
            borderRadius: "10px",
            border: "none",
            background: theme.palette.back.main,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            [theme.breakpoints.down("750")]: {
              width: "90px",
              height: "35px",
            },
            "&>span": {
              fontWeight: 600,
              fontSize: "22px",
              color: "#fff",
              textTransform: "none",
            },
          },
        },
      },
      "&>p": {
        fontWeight: "bold",
        fontSize: "18px",
        color: theme.palette.secondary.main,
        textAlign: "center",
        marginTop: "30px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px",
        },
        "&>span": {
          color: theme.palette.primary.main,
          cursor: "pointer",
          textDecoration: "underline",
        },
      },
    },
  },
  signup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  brandTitle: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Login = (props) => {
  const { loginData, LoginAction } = props;
  const classes = useStyle();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginAction(email, password);
  };

  return (
    <>
      <div className={classes.RbMainDiv}>
        <Container className={classes.RbMainContainer}>
          <Typography className={classes.brandTitle}>
            Reseller <span>Bazzar</span>
          </Typography>
          <div className={classes.RbSubContainer}>
            <div>
              <Typography>
                Login <span>Page</span>
              </Typography>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  variant="standard"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                ></TextField>
                <TextField
                  required
                  type="password"
                  value={password}
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                ></TextField>
              </div>
              <div>
                <Typography onClick={() => history.push("/forgotpassword")}>
                  Forgot Password?
                </Typography>
                <Button
                  variant="outlined"
                  type="submit"
                  className={classes.btn}
                  startIcon={
                    loginData.loading && (
                      <CircularProgress size="20px" color="#fff" />
                    )
                  }
                  disabled={loginData.loading}
                >
                  Login
                </Button>
              </div>
              <Typography className={classes.signup}>
                Don't have an account?{" "}
                <span onClick={() => history.push("/signup")}>Sign Up</span>
              </Typography>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginData: state.AuthData.loginData,
});
const mapDispatchToProps = (dispatch) => ({
  LoginAction: (email, password) =>
    dispatch({ type: USER_LOGIN_REQUEST, email, password }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// InputProps={{
//   classes: { notchedOutline: classes.noBorder },
// }}
// noBorder:{
// "border":"none"
// }
