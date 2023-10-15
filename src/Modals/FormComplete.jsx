import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../State/Actions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function FormComplete() {
  const [open, setOpen] = React.useState(false);
  const data = useSelector((state) => state.data);
  const completeForm = useSelector((state) => state.completeForm);
  const templateName = useSelector(state=>state.templateName)
  console.log(templateName)
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // let data = JSON.parse(localStorage.getItem("data"))
    // console.log(data)
    // data.push(completeForm)
    localStorage.setItem("data",JSON.stringify(completeForm))
    setOpen(false);
  };
  React.useEffect(() => {
    handleClickOpen();
    dispatch(
      actions.completeForm({
        resumeid: Math.random(),
        date: new Date().toDateString(),
        userdata: data,
        templateName : templateName.templateName
      })
    );
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
          <b>Data Saved...!</b>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
          <Typography gutterBottom>
            <b> Hello Your Data Saved Successfully...!</b>
          </Typography>
          <Typography gutterBottom>
            <b> Please Click To View Your Resume !</b>
          </Typography>
          <Typography gutterBottom>
            <b>You Can Also DOWNLOAD Your Resume.</b>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            color="secondary"
            variant="contained"
            LinkComponent={Link}
            to="/myresume"
          >
            View My Resume
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
