import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import Select from "@mui/material/Select";

const useStyle = makeStyles((theme) => ({
  selectRoot: {
    width: "100%",
    "&>div": {
      height: "35px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      "&>fieldset": {
        border: "2px solid gray",
        "&:focused": {
          border: `2px solid ${theme.palette.primary.main} !important`,
        },
      },
      "&>input": {
        height: "100%",
      },
      "&:hover": {
        "&>fieldset": {
          border: `2px solid ${theme.palette.primary.main} !important`,
        },
      },
    },
  },
}));

const defaultFunction = () => {};

export default function SelectComponents({
  labelText,
  selectId,
  value,
  selectLabel,
  menuItems,
  onChange = defaultFunction,
}) {
  const classes = useStyle();
  return (
    <FormControl variant="standard" className={classes.selectRoot}>
      <InputLabel id="select-label">{labelText}</InputLabel>
      <Select
        labelId="select-label"
        id={selectId}
        value={value}
        onChange={onChange}
        label={selectLabel}
        disableUnderline
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuItems.map((item, key) => {
          return (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
