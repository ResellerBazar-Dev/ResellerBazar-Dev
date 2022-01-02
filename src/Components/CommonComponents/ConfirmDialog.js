import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDialog({
  open,
  confirmDialogText,
  confirmDialogHeading,
  handleConfirmDialogClose,
  product_id,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleConfirmDialogClose(false, null)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{confirmDialogHeading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {confirmDialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmDialogClose(false, null)}>
            No
          </Button>
          <Button onClick={() => handleConfirmDialogClose(true, product_id)}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
