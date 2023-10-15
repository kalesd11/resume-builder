import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, TextField } from "@mui/material";
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

export default function EditSkills(props) {
//   const handleClickOpen = () => {
//     props.setOpen(true);
//   };
const editData = useSelector(state=>state.editResume)
  const handleClose = () => {
    props.setOpen(false);
  };

  const skills = useSelector(state=>state.skills)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(actions.editSkills({data:data,resumeid:editData.resumeid}))
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
          <b>Edit Your Skills...!</b>
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
        <form onSubmit={handleSubmit(onSubmit)} id="skills">
        <DialogContent dividers>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={2}
        >
          <TextField
            size="small"
            type="text"
            label="Add Skill"
            defaultValue={editData.userdata[3].skill1}
            name="skiil1"
            {...register("skill1")}
          />
          <TextField
            size="small"
            type="text"
            label="Add Skill"
            defaultValue={editData.userdata[3].skill2}
            name="skiil2"
            {...register("skill2")}
          />
          <TextField
            size="small"
            type="text"
            defaultValue={editData.userdata[3].skill3}
            label="Add Skill"
            name="skiil3"
            {...register("skill3")}
          />
          {skills.map((skill, index) => {
            return (
              <TextField
                key={index+1}
                size="small"
                type="text"
                defaultValue={editData.userdata[3][`skill${index + 4}`]}
                label="Add Skill"
                name={`skill${index + 4}`}
                {...register(`skill${index + 4}`)}
              />
            );
          })}
        </Box>
        <Box textAlign="center" my={2}>
        <Button
          onClick={() => dispatch(actions.addSkill({ id: Math.random() }))}
          variant="outlined"
          color="secondary"
        >
          Add Skill
        </Button>
      </Box>
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
