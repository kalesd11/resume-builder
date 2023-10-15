import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
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

export default function EditEducation(props) {
  //   const handleClickOpen = () => {
  //     props.setOpen(true);
  //   };
  const handleClose = () => {
    props.setOpen(false);
  };
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const Editdata = useSelector((state) => state.editResume);
  const dispatch = useDispatch();
  // console.log(Editdata)
  const edus = Editdata.userdata?Editdata.userdata[1].qualification4
    ? ["SSC", "HSC", "Graduation/Degree", "Post Graduation"]
    : ["SSC", "HSC", "Graduation/Degree"]:[]
  const onSubmit = (data) => {
    dispatch(
      actions.editEducations({ data: data, resumeid: Editdata.resumeid })
    );
    handleClose();
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "purple" }}
          id="customized-dialog-title"
        >
          <b>Edit Your Education Details...!</b>
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogContent dividers>
            {edus.map((data, index) => {
              return (
                <Box key={index + 1}>
                  <Typography variant="body1" color="purple">
                    <b>{`* ${data} Details :`}</b>
                  </Typography>
                  <br />
                  <Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box>
                        <TextField
                          name={`qualification${index + 1}`}
                          defaultValue={Editdata.userdata[1][`qualification${index+1}`]}
                          label="SSC/HSC/Graduartion"
                          variant="outlined"
                          size="small"
                          fullWidth
                          required
                          {...register(`qualification${index + 1}`, {
                            required: "Classification is required",
                          })}
                          // ref={register}
                        />
                        <Typography variant="subtitle2" color="red">
                          {errors[`qualification${index + 1}`]?.message}
                        </Typography>
                      </Box>
                      <Box>
                        <TextField
                          name={`year${index + 1}`}
                          label="Passing Year"
                          variant="outlined"
                          defaultValue={Editdata.userdata[1][`year${index+1}`]}
                          size="small"
                          fullWidth
                          required
                          {...register(`year${index + 1}`, {
                            required: "Passing year is required",
                          })}
                          // ref={register}
                        />
                        <Typography variant="subtitle2" color="red">
                          {errors[`year${index + 1}`]?.message}
                        </Typography>
                      </Box>
                    </Box>
                    <br />
                    <TextField
                      name={`authority${index + 1}`}
                      label="Educational Board / University"
                      variant="outlined"
                      defaultValue={Editdata.userdata[1][`authority${index+1}`]}
                      size="small"
                      type="text"
                      fullWidth
                      required
                      {...register(`authority${index + 1}`, {
                        required: "Educational Board / University is required",
                      })}
                      // ref={register}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors[`authority${index + 1}`]?.message}
                    </Typography>
                    <br />
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box>
                        <TextField
                          name={`obtainedmarks${index + 1}`}
                          label="Marks"
                          variant="outlined"
                          defaultValue={Editdata.userdata[1][`obtainedmarks${index+1}`]}
                          fullWidth
                          required
                          size="small"
                          {...register(`obtainedmarks${index + 1}`, {
                            required: "Marks are required",
                            //   pattern :{
                            //   value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]*$)/,
                            //   message : "Please Enter valid Email"
                            // }
                          })}
                          // ref={register}
                        />
                        <Typography variant="subtitle2" color="red">
                          {errors[`obtainedmarks${index + 1}`]?.message}
                        </Typography>
                      </Box>

                      <Box>
                        <TextField
                          name={`totalMarks${index + 1}`}
                          type="text"
                          label="Total marks"
                          defaultValue={Editdata.userdata[1][`totalMarks${index+1}`]}
                          variant="outlined"
                          fullWidth
                          required
                          size="small"
                          {...register(`totalMarks${index + 1}`, {
                            required: "Total marks are required",
                          })}
                          // ref={register}
                        />
                        <Typography variant="subtitle2" color="red">
                          {errors[`totalMarks${index + 1}`]?.message}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <br />
                  <hr />
                </Box>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              color="secondary"
              variant="contained"
              type="submit"
            >
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
