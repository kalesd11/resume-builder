import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { TextField, Typography, Box } from "@mui/material";
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

export default function EditPersonal(props) {
  //   const handleClickOpen = () => {
  //     props.setOpen(true);
  //   };
  const handleClose = () => {
    props.setOpen(false);
  };

  const editData = useSelector((state) => state.editResume);
  const dispatch = useDispatch();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    dispatch(
      actions.editPersonals({ data: data, resumeid: editData.resumeid })
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
          <b>Edit Your Personal Details...!</b>
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
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              <Box>
                <TextField
                  name="fname"
                  label="First Name"
                  variant="outlined"
                  defaultValue={editData.userdata[0].fname}
                  size="small"
                  required
                  {...register("fname", {
                    required: "First Name is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.fname?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  name="mname"
                  label="Middle Name"
                  variant="outlined"
                  defaultValue={editData.userdata[0].mname}
                  size="small"
                  required
                  {...register("mname", {
                    required: "Middle Name is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.mname?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  name="lname"
                  label="Last Name"
                  variant="outlined"
                  defaultValue ={editData.userdata[0].lname}
                  size="small"
                  required
                  {...register("lname", {
                    required: "Last Name is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.lname?.message}
                </Typography>
              </Box>
            </Box>
            <br />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              <Box>
                <TextField
                  name="mobile"
                  label="Mobile Number"
                  variant="outlined"
                  defaultValue={editData.userdata[0].mobile}
                  size="small"
                  type="text"
                  fullWidth
                  required
                  {...register("mobile", {
                    required: "Mobile Number is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.mobile?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  name="email"
                  type="text"
                  label="Email Id"
                  variant="outlined"
                  defaultValue={editData.userdata[0].email}
                  fullWidth
                  required
                  size="small"
                  {...register("email", {
                    required: "Email Id is required",
                    //   pattern :{
                    //   value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]*$)/,
                    //   message : "Please Enter valid Email"
                    // }
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.email?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  type="text"
                  name="profession"
                  label="Profession"
                  variant="outlined"
                  defaultValue={editData.userdata[0].profession}
                  fullWidth
                  required
                  size="small"
                  {...register("profession", {
                    required: "Profession is required",
                    //   pattern :{
                    //   value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]*$)/,
                    //   message : "Please Enter valid Email"
                    // }
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.profession?.message}
                </Typography>
              </Box>
            </Box>

            <br />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap="wrap"
              rowGap={2}
            >
              <Box>
                <TextField
                  name="city"
                  type="text"
                  label="City"
                  defaultValue={editData.userdata[0].city}
                  variant="outlined"
                  required
                  size="small"
                  {...register("city", {
                    required: "City is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.city?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  name="district"
                  type="text"
                  label="District"
                  variant="outlined"
                  defaultValue={editData.userdata[0].district}
                  required
                  size="small"
                  {...register("district", {
                    required: "District is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.district?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  name="state"
                  type="text"
                  label="State"
                  defaultValue={editData.userdata[0].state}
                  variant="outlined"
                  required
                  size="small"
                  {...register("state", {
                    required: "State is required",
                  })}
                  // ref={register}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.state?.message}
                </Typography>
              </Box>
            </Box>
            <br />
            <Box>
              <TextField
                name="about"
                type="text"
                label="About Yourself"
                defaultValue={editData.userdata[0].about}
                rows={5}
                variant="outlined"
                inputProps={{
                  maxLength: 500,
                }}
                multiline
                required
                fullWidth
                {...register("about", {
                  required: "Write Something which describes You better.",
                })}
                // ref={register}
              />
              <Typography variant="subtitle2" color="red">
                {errors.about?.message}
              </Typography>
            </Box>
            <br />
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              type="submit"
              color="secondary"
              variant="contained"
              // LinkComponent={Link}
              // to="/myresume"
            >
              save changes
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
