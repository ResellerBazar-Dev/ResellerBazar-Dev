import { makeStyles } from "@material-ui/core";
import React from "react";
import { Breadcrumbs } from "@mui/material";
import classNames from "classnames";

const useStyle = makeStyles((theme) => ({}));

const defaultFunction = () => {};

export default function Breadcrumb({
  children,
  separator,
  maxItems,
  itemsBeforeCollapse,
  itemsAfterCollapse = "2",
  className,
  onClick = defaultFunction,
}) {
  const classes = useStyle();
  return (
    <Breadcrumbs
      separator={separator}
      aria-label="breadcrumb"
      itemsAfterCollapse={itemsAfterCollapse}
      itemsBeforeCollapse={itemsBeforeCollapse}
      maxItems={maxItems}
      className={classNames(className)}
      onClick={onClick}
    >
      {children}
    </Breadcrumbs>
  );
}
