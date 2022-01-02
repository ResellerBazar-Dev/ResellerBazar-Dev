import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import classNames from "classnames";

const useStyle = makeStyles((theme) => ({
  typographyRoot: {
    textTransform: "capitalize",
  },
}));

const defaultFunction = () => {};

export default function Typographys({
  children,
  onClick = defaultFunction,
  className,
  component,
  variant,
}) {
  const classes = useStyle();
  return (
    <Typography
      component={component}
      variant={variant}
      className={classNames(className, classes.typographyRoot)}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
}
