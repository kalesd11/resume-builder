import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, TextField, Typography } from "@mui/material";
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

export default function EditExperience(props) {
  //   const handleClickOpen = () => {
  //     props.setOpen(true);
  //   };
  const handleClose = () => {
    props.setOpen(false);
  };

  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const Editdata = useSelector((state) => state.editResume);
  // console.log(Editdata)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(actions.editExperiences({data:data,resumeid:Editdata.resumeid}))
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
          <b>Edit Your Experience Details...!</b>
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
            <Box>
              <TextField
                size="small"
                label="Enter Company Name"
                name="company1"
                defaultValue={Editdata.userdata[2].company1}
                type="text"
                required
                fullWidth
                {...register("company1", {
                  required: "Company Name is required",
                })}
              />
              <Typography variant="subtitle2" color="red">
                {errors.company1?.message}
              </Typography>
            </Box>
            <br />
            <Box>
              <TextField
                type="text"
                size="small"
                name="role1"
                defaultValue={Editdata.userdata[2].role1}
                label="Write Your Role In Company"
                required
                fullWidth
                {...register("role1", { required: "Your Role is Required" })}
              />
              <Typography variant="subtitle2" color="red">
                {errors.role1?.message}
              </Typography>
            </Box>
            <br />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <TextField
                  type="date"
                  size="small"
                  name="work_start1"
                  defaultValue={Editdata.userdata[2].work_start1}
                  required
                  {...register("work_start1", { required: "Enter Start Date" })}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.work_start1?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  type="date"
                  size="small"
                  name="worked_till1"
                  defaultValue={Editdata.userdata[2].worked_till1}
                  required
                  {...register("worked_till1", {
                    required: "Enter leaved Date",
                  })}
                />
                <Typography variant="subtitle2" color="red">
                  {errors.worked_till1?.message}
                </Typography>
              </Box>
              <Box>
                <TextField
                  type="text"
                  size="small"
                  label="CTC (Optional)"
                  defaultValue={Editdata.userdata[2].annual_salary1}
                  name="anuual_salary1"
                  {...register("anuual_salary1")}
                />
              </Box>
            </Box>
            {Editdata.userdata?Editdata.userdata[2].company2 ? (
              <>
                <Box>
                  <hr />
                  <Box>
                    <TextField
                      size="small"
                      label="Enter Company Name"
                      name="company2"
                      defaultValue={Editdata.userdata[2].company2}
                      type="text"
                      required
                      fullWidth
                      {...register("company2", {
                        required: "Company Name is required",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors.company2?.message}
                    </Typography>
                  </Box><br />
                  <TextField
                    type="text"
                    size="small"
                    name="role2"
                    defaultValue={Editdata.userdata[2].role2}
                    label="Write Your Role In Company"
                    required
                    fullWidth
                    {...register("role2", {
                      required: "Your Role is Required",
                    })}
                  />
                  <Typography variant="subtitle2" color="red">
                    {errors.role2?.message}
                  </Typography>
                </Box>
                <br />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <TextField
                      type="date"
                      size="small"
                      name="work_start2"
                      defaultValue={Editdata.userdata[2].work_start2}
                      required
                      {...register("work_start2", {
                        required: "Enter Start Date",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors.work_start2?.message}
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      type="date"
                      size="small"
                      name="worked_till2"
                      defaultValue={Editdata.userdata[2].worked_till2}
                      required
                      {...register("worked_till2", {
                        required: "Enter leaved Date",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors.worked_till2?.message}
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      type="text"
                      size="small"
                      label="CTC (Optional)"
                      defaultValue={Editdata.userdata[2].annual_salary2}
                      name="anuual_salary1"
                      {...register("anuual_salary1")}
                    />
                  </Box>
                </Box>
              </>
            ) : (
              ""
            ):""}
            {Editdata.userdata?Editdata.userdata[2].company3 ? (
              <>
                <Box>
                  <hr />
                  <Box>
                    <TextField
                      size="small"
                      label="Enter Company Name"
                      name="company3"
                      defaultValue={Editdata.userdata[2].company3}
                      type="text"
                      required
                      fullWidth
                      {...register("company3", {
                        required: "Company Name is required",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors.company3?.message}
                    </Typography>
                  </Box><br />
                  <TextField
                    type="text"
                    size="small"
                    name="role3"
                    defaultValue={Editdata.userdata[2].role3}
                    label="Write Your Role In Company"
                    required
                    fullWidth
                    {...register("role3", {
                      required: "Your Role is Required",
                    })}
                  />
                  <Typography variant="subtitle2" color="red">
                    {errors.role3?.message}
                  </Typography>
                </Box>
                <br />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <TextField
                      type="date"
                      size="small"
                      name="work_start3"
                      defaultValue={Editdata.userdata[2].work_start3}
                      required
                      {...register("work_start3", {
                        required: "Enter Start Date",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors.work_start3?.message}
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      type="date"
                      size="small"
                      name="worked_till3"
                      defaultValue={Editdata.userdata[2].worked_till3}
                      required
                      {...register("worked_till3", {
                        required: "Enter leaved Date",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors.worked_till3?.message}
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      type="text"
                      size="small"
                      label="CTC (Optional)"
                      defaultValue={Editdata.userdata[2].annual_salary3}
                      name="anuual_salary3"
                      {...register("anuual_salary3")}
                    />
                  </Box>
                </Box>
              </>
            ) : (
              ""
            ):""}
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              color="secondary"
              variant="contained"
              type="submit"
            >
              save changes
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
