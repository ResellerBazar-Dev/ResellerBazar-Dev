import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { EDIT_PROFILE_REQUEST } from "../../Constants/UserConstant";
import { NotificationManager } from "react-notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent:"center",
    // alignItems: "center",
    // justifyItems:"center",
    width: "80%",
    margin: "20px auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  main: {
    // maxWidth: "800px",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25);",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },

  form_area: {
    display: "grid",
    padding: "10px",
    gridTemplateColumns: " auto auto ",
    gap: "2rem",
    placeItems: "center",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto",
      width: "auto",
    },

    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "auto auto",
    },
  },

  txt: {
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25);",
    borderRadius: "10px",
    padding: "15px 30px",
    // maxWidth: "230px",
    fontSize: "15px",

    "&::placeholder": {
      color: "#978A8A",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "230px",
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "230px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
      width: "80%",
    },
  },

  btn: {
    background: "linear-gradient(180deg, #000000 0%, #D10024 100%)",
    color: "white",
    textTransform: "capitalize",
    borderRadius: "10px",
    border: "none",
    width: "115px",
  },

  btn_adjust: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
  },
  editProfileHeading: {
    width: "100%",
    textAlign: "center",
    fontSize: "35px",
    fontWeight: "bold",
    margin: "20px auto",
    "&>span": {
      fontWeight: "bold",
      fontSize: "35px",
      color: theme.palette.primary.main,
    },
  },
}));

function ProfileEdit({ userData, editProfileAction, editProfileData }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  const [contact_number, setContact_number] = useState("");
  const [pin_code, setPin_code] = useState("");
  const [state, setState] = useState("");
  const [occupassion, setOccupassion] = useState("");
  const [disc, setDisc] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (userData?.userInfo?.status === "1") {
      setName(userData?.userInfo?.user?.name);
      setEmail(userData?.userInfo?.user?.email);
      setOccupassion(userData?.userInfo?.user?.occupassion);
      setTaluka(userData?.userInfo?.user?.other_details?.taluka);
      setVillage(userData?.userInfo?.user?.other_details?.village);
      setContact_number(
        userData?.userInfo?.user?.other_details?.contact_number
      );
      setPin_code(userData?.userInfo?.user?.other_details?.pin_code);
      setState(userData?.userInfo?.user?.other_details?.state);
      setDisc(userData?.userInfo?.user?.other_details?.disc);
      setAddress(userData?.userInfo?.user?.other_details?.address);
    }
  }, [userData]);

  const handleSubmit = () => {
    if (
      name !== "" &&
      email !== "" &&
      occupassion !== "" &&
      taluka !== "" &&
      village !== "" &&
      contact_number !== "" &&
      pin_code !== "" &&
      state !== "" &&
      disc !== "" &&
      address !== ""
    ) {
      editProfileAction({
        name,
        email,
        occupassion,
        other_details: {
          taluka,
          village,
          contact_number,
          pin_code,
          state,
          disc,
          address,
        },
      });
    } else {
      name === "" &&
        NotificationManager.error("Please enter your name", "", 3000);
      email === "" &&
        NotificationManager.error("Please enter your email", "", 3000);
      occupassion === "" &&
        NotificationManager.error("Please enter your occupassion", "", 3000);
      taluka === "" &&
        NotificationManager.error("Please enter your taluka", "", 3000);
      village === "" &&
        NotificationManager.error("Please enter your village", "", 3000);
      contact_number === "" &&
        NotificationManager.error("Please enter your contact_number", "", 3000);
      pin_code === "" &&
        NotificationManager.error("Please enter your pin_code", "", 3000);
      state === "" &&
        NotificationManager.error("Please enter your state", "", 3000);
      disc === "" &&
        NotificationManager.error("Please enter your disc", "", 3000);
      address === "" &&
        NotificationManager.error("Please enter your address", "", 3000);
    }
  };

  useEffect(() => {
    if (editProfileData?.data?.status === "1") {
      window.location.href = "/profiles";
    }
  }, [editProfileData]);

  return (
    <div>
      <div className={classes.root}>
        <Typography component="h2" className={classes.editProfileHeading}>
          Edit <Typography component="span">Profile</Typography>
        </Typography>
        <div className={classes.main}>
          <div className={classes.form_area}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.txt}
            />
            <input
              type="text"
              placeholder="Taluka"
              value={taluka}
              onChange={(e) => setTaluka(e.target.value)}
              className={classes.txt}
            />
            <input
              type="text"
              placeholder="Enter Your Mail"
              className={classes.txt}
              value={email}
              onChange={(e) => setTaluka(e.target.value)}
            />
            <input
              type="text"
              placeholder="Village"
              value={village}
              className={classes.txt}
              onChange={(e) => setVillage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className={classes.txt}
              value={contact_number}
              onChange={(e) => setContact_number(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pin Code"
              className={classes.txt}
              value={pin_code}
              onChange={(e) => setPin_code(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              className={classes.txt}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Occupassion"
              className={classes.txt}
              value={userData?.userInfo?.user?.occupassion}
              onChange={(e) => setOccupassion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Disc"
              value={disc}
              className={classes.txt}
              onChange={(e) => setDisc(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              className={classes.txt}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={classes.btn_adjust}>
            <Button
              className={classes.btn}
              startIcon={
                editProfileData?.loading && (
                  <CircularProgress size="20px" color="#fff" />
                )
              }
              onClick={handleSubmit}
            >
              save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.AuthData.userData,
  editProfileData: state.UserData.editProfileData,
});

const mapDispatchToProps = (dispatch) => ({
  editProfileAction: (newUserData) =>
    dispatch({
      type: EDIT_PROFILE_REQUEST,
      newUserData,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
