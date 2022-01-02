import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { USER_REGISTER_REQUEST } from "../../Constants/AuthConstant";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  RbMainDiv: {
    padding: "100px",
    [theme.breakpoints.down(580)]: {
      padding: "30px",
    },
  },
  RbMainContainer: {
    width: "100%",
    height: "80vh",
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    padding: "20px 90px",
    [theme.breakpoints.down(580)]: {
      padding: " 20px 0px",
      height: "90vh",
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
    marginTop: "70px",
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
        marginTop: "-100px",
        [theme.breakpoints.down(980)]: {
          marginTop: "-30px",
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
          "&>div": {
            marginTop: "20px",
            "&>div": {
              [theme.breakpoints.down(580)]: {
                width: "100% !important",
              },
            },
          },
        },
        "&:nth-child(2)": {
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          "&>button": {
            width: "383px",
            height: "46px",
            borderRadius: "10px",
            border: "none",
            background: theme.palette.back.main,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            [theme.breakpoints.down(580)]: {
              width: "100%",
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
        marginTop: "20px",
        "&>span": {
          color: theme.palette.primary.main,
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
    },
  },
}));

const Signup = (props) => {
  const { registerData, RegisterAction } = props;
  const classes = useStyle();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterAction(name, email, password, confirm_password);
  };

  return (
    <>
      <div className={classes.RbMainDiv}>
        <Container className={classes.RbMainContainer}>
          <Typography>
            Reseller <span>Bazzar</span>
          </Typography>
          <div className={classes.RbSubContainer}>
            <div>
              <Typography>
                Signup <span>Page</span>
              </Typography>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  variant="standard"
                  required
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
                <TextField
                  variant="standard"
                  required
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
                <TextField
                  variant="standard"
                  required
                  value={password}
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
                <TextField
                  variant="standard"
                  required
                  value={confirm_password}
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></TextField>
              </div>
              <div>
                <Button
                  variant="outlined"
                  type="submit"
                  startIcon={
                    registerData?.loading && (
                      <CircularProgress size="20px" color="#fff" />
                    )
                  }
                  disabled={registerData?.loading}
                >
                  Register
                </Button>
              </div>
              <Typography>
                Already have an account?
                <span onClick={() => history.push("/login")}>Sign in</span>
              </Typography>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  registerData: state.AuthData.registerData,
});

const mapDispatchToProps = (dispatch) => ({
  RegisterAction: (name, email, password, confirm_password) =>
    dispatch({
      type: USER_REGISTER_REQUEST,
      name,
      email,
      password,
      confirm_password,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
