import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
interface IProps {
  message: string | JSX.Element;
  options: {
    title?: string | JSX.Element;
    actions?: {
      copy: string;
      onClick: any;
    }[];
    closeCopy?: string;
  };
  close: any;
}
const AlertDialog = ({ close, message, options }: IProps) => {
  return (
    <Dialog
      open={true}
      onClose={close}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{options.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {options.actions &&
          options.actions.map((action, index) => (
            <Button
              onClick={() => {
                action.onClick();
                close();
              }}
              color="primary"
              key={index}
            >
              {action.copy}
            </Button>
          ))}
        <Button onClick={close} color="primary">
          {options.closeCopy || "Okay"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
