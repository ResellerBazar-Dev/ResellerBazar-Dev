import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { ReactComponent as Profile } from "../../images/Profile.svg";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { EDIT_PROFILE_IMAGE_REQUEST } from "../../Constants/UserConstant";
import { USER_DATA_REQUEST } from "../../Constants/AuthConstant";
import { Skeleton } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  main: {
    // maxwidth:"100%",
    // maxheight:"95vh",
    // padding:"auto",
  },

  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    maxWidth: "1140px",
    minHeight: "90vh",
    justifyContent: "space-between",
    alignItems: "center",
    fontStyle: "Montserrat",
    overflow: "hidden",
    margin: "auto",
    // border: "2px solid black",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },

  profile_card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid blue",
    flexBasis: "25%",

    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },

  main_card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    // width:"65%",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25);",
    padding: "50px 40px",
  },

  Avtar: {
    height: "150px",
    width: "150px",
    position: "relative",
  },
  avtarImg: {
    width: "100%",
    height: "100%",
    boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.25);",
    borderRadius: "50%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 !important",

    "&>p": {
      marginTop: "10px",
      fontWeight: "500",
      fontFamily: "Montserrat",
      textTransform: "capitalize",
    },

    "&>a": {
      color: "#D10024",
      fontWeight: "700",
    },
  },

  btn: {
    background: "linear-gradient(180deg, #000000 0%, #D10024 100%)",
    color: "white",
    margin: "30px 0px",
    textTransform: "capitalize",
    borderRadius: "10px",
    display: "flex",
    border: "none",
    width: "130px",
    fontWeight: "700",
  },

  heading: {
    position: "relative",
    display: "flex",
    top: "-50px",
    justifyContent: "center",
    "&>p": {
      fontSize: "2rem",
      fontWeight: 700,
      textDecoration: "underline",
      "&>span": {
        color: "red",
        textDecoration: "underline",
      },
    },

    [theme.breakpoints.down("md")]: {
      top: "0px",
      padding: "20px",
    },

    "&>svg": {
      height: "30px",
      width: "200px",
    },
  },
  main_profile: {
    // border: "2px solid green",
    flexBasis: "75%",
    "&>div>Input": {
      padding: "15px 30px",
    },

    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },

  form_area: {
    display: "grid",
    gridTemplateColumns: " auto auto ",
    gap: "1.5rem",
    placeItems: "center",

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto",
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
    padding: "0px 20px",
    maxWidth: "230px",
    // width: "100%",
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
  addPhotoIcon: {
    position: "absolute",
    bottom: "5%",
    right: "7%",
    cursor: "pointer",
    "&>svg": {
      color: theme.palette.primary.main,
    },
  },
}));

function Profiles({
  userData,
  editProfileImageAction,
  editProfileImageData,
  getUserData,
}) {
  const classes = useStyle();
  const handleImageChange = (e) => {
    let formData = new FormData();
    formData.append("profile_image", e.target.files[0]);
    editProfileImageAction(formData);
  };
  useEffect(() => {
    if (editProfileImageData?.data?.status === "1") {
      getUserData();
    }
  }, [editProfileImageData]);
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.root}>
          <div className={classes.profile_card}>
            <Card className={classes.main_card} variant="outlined">
              <div className={classes.Avtar}>
                {userData?.loading === false ? (
                  <img
                    src={userData?.userInfo?.user?.profile_image}
                    alt={userData?.userInfo?.user?.name}
                    className={classes.avtarImg}
                  />
                ) : (
                  <Skeleton variant="circular" width={150} height={150} />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="profile_image_input"
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="profile_image_input"
                  className={classes.addPhotoIcon}
                >
                  <AddAPhotoIcon />
                </label>
              </div>
              <CardContent className={classes.content}>
                <p>{userData?.userInfo?.user?.name}</p>
                <Link to="/ProfileEdit" style={{ textDecoration: "none" }}>
                  <Button className={classes.btn}>Edit Profile</Button>
                </Link>
                <a href="!#">Share Profile Link</a>
              </CardContent>
            </Card>
          </div>
          <div className={classes.main_profile}>
            <div className={classes.heading}>
              <Typography>
                Profile <span>Details</span>
              </Typography>
            </div>
            <div className={classes.form_area}>
              <input
                type="text"
                placeholder="Name"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.name}
              />
              <input
                type="text"
                placeholder="Taluka"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.other_details?.taluka}
              />
              <input
                type="text"
                placeholder="Enter Your Mail"
                className={classes.txt}
                value={userData?.userInfo?.user?.email}
                disabled
              />
              <input
                type="text"
                placeholder="Village"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.other_details?.village}
              />
              <input
                type="text"
                placeholder="Contact Number"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.other_details?.contact_number}
              />
              <input
                type="text"
                placeholder="Pin Code"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.other_details?.pin_code}
              />
              <input
                type="text"
                placeholder="State"
                disabled
                className={classes.txt}
                value={userData?.userInfo?.user?.other_details?.state}
              />
              <input
                type="text"
                placeholder="Occupassion"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.occupassion}
              />
              <input
                type="text"
                placeholder="Disc"
                disabled
                className={classes.txt}
                value={userData?.userInfo?.user?.other_details?.disc}
              />
              <input
                type="text"
                placeholder="Address"
                className={classes.txt}
                disabled
                value={userData?.userInfo?.user?.other_details?.address}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.AuthData.userData,
  editProfileImageData: state.UserData.editProfileImageData,
});

const mapDispatchToProps = (dispatch) => ({
  editProfileImageAction: (imageData) =>
    dispatch({
      type: EDIT_PROFILE_IMAGE_REQUEST,
      imageData,
    }),
  getUserData: () =>
    dispatch({
      type: USER_DATA_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
