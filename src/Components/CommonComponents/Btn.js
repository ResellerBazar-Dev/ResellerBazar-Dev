import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, CircularProgress } from "@material-ui/core";
import classNames from "classnames";

const useStyle = makeStyles((theme) => ({
  btnRoot: {
    background: "linear-gradient(180deg, #1E1F29 0%, #D10024 100%)",
    borderRadius: "10px",
    textTransform: "capitalize !important",
    "&>span": {
      color: "#fff",
    },
  },
  isDisabled: {
    background: "#fff",
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const defaultFunction = () => {};

export default function Btn({
  children,
  className,
  onClick = defaultFunction,
  disabled = false,
  isDisabled = false,
  loading,
}) {
  const classes = useStyle();
  return (
    <Button
      variant="contained"
      className={classNames(
        className,
        classes.btnRoot,
        isDisabled && classes.isDisabled
      )}
      onClick={onClick}
      disabled={disabled}
      startIcon={loading && <CircularProgress size="20px" color="#fff" />}
    >
      {children}
    </Button>
  );
}
