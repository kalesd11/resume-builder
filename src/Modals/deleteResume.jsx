import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DeleteResume(props) {
  // const handleClickOpen = () => {
  //   props.setShowDel(true);
  // };

  // React.useEffect(() => {
  //   handleClickOpen();
  // }, []);
  const handleClose = () => {
    props.setShowDel(false);
  };

  const dispatch = useDispatch();
  const resumeToDelete = useSelector((state) => state.resumeToDelete);
  // console.log(resumeToDelete);
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.showDel}
        fullWidth
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "purple" }}
          id="customized-dialog-title"
          textTransform={"capitalize"}
        >
          <b>
            Confirm Delete{" "}
            {resumeToDelete.userdata
              ? resumeToDelete.userdata[0].resumeName
              : ""}
            ...!
          </b>
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
          <Typography gutterBottom color="red">
            <b> Selected Resume Will Be Deleted Permanently.</b>
          </Typography>
          <Typography gutterBottom color="red">
            <b>Are You Sure You Want To Delete It ?</b>
          </Typography>
          <Typography gutterBottom color="red">
            <b>If YES then Click Confirm.</b>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Button
              // autoFocus
              onClick={() => {
                handleClose();
              }}
              color="warning"
              variant="contained"
            >
              cancle
            </Button>
            <Button
              // autoFocus
              onClick={() => {
                dispatch(
                  actions.delResume({ resumeid: resumeToDelete.resumeid })
                );
                handleClose();
              }}
              color="secondary"
              variant="contained"
            >
              confirm
            </Button>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
