import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function SetResumeName(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    handleClickOpen();
  }, []);
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "purple" }}
          id="customized-dialog-title"
        >
          <b>Set Your Resume Name</b>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          LinkComponent={Link}
          to="/"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            <b> Hello Your Data Saved Successfully...!</b>
          </Typography>
          <Typography gutterBottom>
            <b> Please Click To View Your Resume !</b>
          </Typography>
          <Typography gutterBottom>
            <b>You Can Also DOWNLOAD Your Resume.</b>
          </Typography> */}
          <Input
            type="text"
            required
            fullWidth
            autoFocus
            value={props.resumeName}
            // defaultValue='Hello'
            onChange={(e) => props.setresumeName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            // autoFocus
            onClick={handleClose}
            color="secondary"
            variant="contained"
          >
            set resume name
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
