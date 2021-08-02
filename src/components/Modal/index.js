import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

function Modal({ open, handleClose, handleConfirm, title, textPrimaryButton, children }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          CANCELAR
        </Button>
        <Button onClick={handleConfirm} color="primary">
          {textPrimaryButton.toUpperCase()}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;