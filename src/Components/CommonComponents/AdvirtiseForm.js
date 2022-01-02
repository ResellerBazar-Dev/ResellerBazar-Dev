import React, { useState } from "react";
import {
  Card,
  makeStyles,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const useStyle = makeStyles((theme) => ({
  ContactUsRootDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
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
      marginTop: "10px",
      marginBottom: "10px",
      height: "600px",
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
      "&>p": {
        fontSize: "1rem",
      },
      "&>button": {
        backgroundImage: theme.palette.back.main,
        width: "30%",
        margin: "10px",
        marginTop: "30px",

        "&>span": {
          color: "white",
        },
      },
    },
  },
  imageBtn: {
    "&>span": {
      backgroundImage: theme.palette.back.main,
      "&>span": {
        color: "white",
      },
    },
  },
}));

const SubCat = [
  {
    label: "Platinum",
  },
  {
    label: "Gold",
  },
  {
    label: "Silver",
  },
];
const AdvirtiseForm = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.ContactUsRootDiv}>
        <Typography>
          Post Your <span>AD</span>
        </Typography>
        <Card>
          <TextField
            id="outlined-select-currency"
            select
            label="Plans"
            // value={currency}
            // onChange={handleChange}
            helperText="Please select your plans"
            variant="standard"
          >
            {SubCat.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            label="Full Name"
            // value={currency}
            // onChange={handleChange}
            helperText="Please enter your full name"
            variant="standard"
          />
          <TextField
            id="outlined-select-currency"
            label="Email"
            // value={currency}
            // onChange={handleChange}
            helperText="Please enter your full email"
            variant="standard"
          />
          <TextField
            id="outlined-select-currency"
            label="Phone"
            // value={currency}
            // onChange={handleChange}
            helperText="Please enter your phone number"
            variant="standard"
          />
          <TextField
            id="outlined-select-currency"
            label="Location"
            // value={currency}
            // onChange={handleChange}
            helperText="Please enter your Location"
            variant="standard"
          />

          <Button variant="field">Submit</Button>
        </Card>
      </div>
    </div>
  );
};

export default AdvirtiseForm;
