import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContent, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import Checkbox from "@mui/material/Checkbox";

const useStyle = makeStyles((theme) => ({
  Dialog: {
    "&>div": {
      "&>div": {
        width: "55%",
        maxWidth: "1000px",
        [theme.breakpoints.down("sm")]: {
          width: "80%",
        },
      },
    },
  },
  DialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "&>div": {
      marginTop: "20px",
      marginBottom: "20px",
      width: "100%",
    },
    "&>button": {
      marginTop: "20px",
    },
  },
  catAndSubCatFilter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "&>div": {
      marginTop: "20px",
      marginBottom: "20px",
      width: "100%",
    },
  },
}));

const Location = [
  {
    label: "Vadodara",
  },
  {
    label: "Rajkot",
  },
  {
    label: "Junagadh",
  },
  {
    label: "Ahmedabad",
  },
];
const brand = [
  {
    label: "toyota",
  },
  {
    label: "honda",
  },
  {
    label: "suzuki",
  },
  {
    label: "audi",
  },
];
const Price = [
  {
    label: "6 laks",
  },
  {
    label: "3 lakhs",
  },
  {
    label: "9 laks",
  },
  {
    label: "2 laks",
  },
];

const FilterDialog = ({ open, onClose, catAndSubCatFilter = false }) => {
  const classes = useStyle();

  const handleDialogClose = () => {
    onClose(true);

    // const [currency, setCurrency] = useState("EUR");

    // const handleChange = (event) => {
    //   setCurrency(event.target.value);
    // };
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        className={classes.Dialog}
      >
        <DialogTitle>Filter</DialogTitle>
        <DialogContent className={classes.DialogContent}>
          <TextField
            id="filter-location"
            select
            label="Location"
            helperText="Please select your Location"
            variant="standard"
          >
            {Location.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox />

                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Brand"
            // value={currency}
            // onChange={handleChange}
            helperText="Please select your brand"
            variant="standard"
          >
            {brand.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox />

                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Budget"
            // value={currency}
            // onChange={handleChange}
            helperText="Please select your budget"
            variant="standard"
          >
            {Price.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox />

                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div
            className={classes.catAndSubCatFilter}
            style={{ display: catAndSubCatFilter ? "flex" : "none" }}
          >
            <TextField
              id="outlined-select-currency"
              select
              label="Category"
              // value={currency}
              // onChange={handleChange}
              helperText="Please select your category"
              variant="standard"
            >
              {Price.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox />

                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Subcategory"
              // value={currency}
              // onChange={handleChange}
              helperText="Please select your subcategory"
              variant="standard"
            >
              {Price.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox />

                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <Button
            variant="contained"
            color="success"
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterDialog;
