import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import classNames from "classnames";
import React from "react";

const useStyle = makeStyles((theme) => ({
  textfieldRoot: {
    minHeight: "40px",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid gray",
    padding: "5px 10px",
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    "&>p": {
      color: theme.palette.primary.main,
    },
  },
}));

const defaultFunction = () => {};

export default function IconTextfield({
  label,
  defaultValue,
  value,
  helperText,
  className,
  placeholder,
  multiline,
  rows,
  maxRows,
  minRows,
  textfieldIcon,
  iconPosition,
  type,
  onChange = defaultFunction,
}) {
  const classes = useStyle();
  return (
    <TextField
      id="standard-helperText"
      label={label}
      defaultValue={defaultValue}
      value={value}
      helperText={helperText}
      onChange={onChange}
      variant="standard"
      placeholder={placeholder}
      className={classNames(className, classes.textfieldRoot)}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position={iconPosition}>
            {textfieldIcon}
          </InputAdornment>
        ),
      }}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      type={type}
    />
  );
}
