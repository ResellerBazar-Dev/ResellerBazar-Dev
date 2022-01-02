import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const useStyle = makeStyles((theme) => ({
  dialogRoot: {},
  dialogTitle: {},
}));

export default function AlertDialog({
  open,
  setOpen,
  dialogTitle,
  dialogContent,
  handleAlertDialogClose,
  className,
}) {
  const classes = useStyle();
  return (
    <Dialog
      open={open}
      onClose={() => handleAlertDialogClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classNames(className, classes.dialogRoot)}
    >
      <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
        {dialogTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <IconButton
          style={{ color: "#D10024" }}
          onClick={() => handleAlertDialogClose(false)}
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          style={{ color: "green" }}
          onClick={() => handleAlertDialogClose(true)}
          autoFocus
        >
          <CheckIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}
