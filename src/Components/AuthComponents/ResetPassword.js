import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { RESET_PASSWORD_REQUEST } from "../../Constants/AuthConstant";
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
      "&>form": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        "&>div": {
          marginTop: "34px",
          "&>div": {
            [theme.breakpoints.down(580)]: {
              width: "100%",
            },
          },
        },
        "&>button": {
          width: "234px",
          height: "46px",
          borderRadius: "10px",
          border: "none",
          marginTop: "50px",
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

const ResetPassword = (props) => {
  const { resetData, ResetPasswordAction } = props;
  const { token } = useParams();
  const classes = useStyle();
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPasswordAction(token, password, confirm_password);
  };

  useEffect(() => {
    if (resetData.userInfo.status == "1") {
      history.replace("/login");
    }
  }, [resetData]);

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
                Reset <span>Password</span>
              </Typography>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  value={password}
                  type="password"
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter New Password"
                ></TextField>
                <TextField
                  required
                  value={confirm_password}
                  variant="standard"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                ></TextField>
                <Button
                  variant="outlined"
                  type="submit"
                  startIcon={
                    resetData.loading && (
                      <CircularProgress size="20px" color="#fff" />
                    )
                  }
                  disabled={resetData.loading}
                >
                  Reset Password
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  resetData: state.AuthData.resetData,
});
const mapDispatchToProps = (dispatch) => ({
  ResetPasswordAction: (token, password, confirm_password) =>
    dispatch({
      type: RESET_PASSWORD_REQUEST,
      token,
      password,
      confirm_password,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
