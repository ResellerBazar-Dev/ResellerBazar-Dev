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
import { FORGOT_PASSWORD_REQUEST } from "../../Constants/AuthConstant";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  RbMainDiv: {
    padding: "100px ",
    [theme.breakpoints.down(580)]: {
      padding: "30px",
    },
  },
  RbMainContainer: {
    width: "100%",
    height: "80vh",
    boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    padding: "20px 90px",
    [theme.breakpoints.down(1030)]: {
      padding: "20px 20px",
    },
    [theme.breakpoints.down(580)]: {
      padding: "20px 0px",
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
        "&:nth-child(1)": {
          fontWeight: "bold",
          fontSize: "40px",
          color: theme.palette.secondary.main,
          textAlign: "center",
          marginTop: "-50px",
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
        "&:nth-child(2)": {
          fontWeight: "bold",
          fontSize: "18px",
          color: theme.palette.secondary.main,
          textAlign: "center",
          marginTop: "70px",
          "&>span": {
            color: theme.palette.primary.main,
            cursor: "pointer",
            textDecoration: "underline",
          },
        },
      },
      "&>form": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "70px",
        "&>div": {
          marginTop: "34px",
          [theme.breakpoints.down(580)]: {
            marginTop: "0px",
          },
          "&>div": {
            [theme.breakpoints.down(580)]: {
              width: "100%",
            },
          },
        },
        "&>button": {
          width: "200px",
          height: "46px",
          borderRadius: "10px",
          border: "none",
          marginTop: "34px",
          background: theme.palette.back.main,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          "&>span": {
            fontWeight: 600,
            fontSize: "22px",
            color: "#fff",
            textTransform: "none",
          },
        },
      },
    },
  },
}));

const ForgotPassword = (props) => {
  const { forgotData, ForgotPasswordAction } = props;

  const classes = useStyle();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    ForgotPasswordAction(email);
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
                Forgot <span>Password</span>
              </Typography>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  value={email}
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                ></TextField>
                <Button
                  variant="outlined"
                  type="submit"
                  startIcon={
                    forgotData.loading && (
                      <CircularProgress size="20px" color="#fff" />
                    )
                  }
                  disabled={forgotData.loading}
                >
                  Next
                </Button>
              </form>
              <Typography>
                Already have an account?{" "}
                <span onClick={() => history.push("/login")}>Sign in</span>
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  forgotData: state.AuthData.forgotData,
});
const mapDispatchToProps = (dispatch) => ({
  ForgotPasswordAction: (email) =>
    dispatch({ type: FORGOT_PASSWORD_REQUEST, email }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
