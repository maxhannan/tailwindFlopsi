import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";

import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  title,
  open,
  handleClose,
  children,
}) {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <button onClick={handleClose} aria-label="close">
          Close
        </button>

        {children}
      </Dialog>
    </div>
  );
}
