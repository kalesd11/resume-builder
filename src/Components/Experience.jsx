import {
  Box,
  Button,
  Checkbox,
  Container,
  FormLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";
import { DeleteForever } from "@mui/icons-material";

const Experience = (props) => {
  const [show, setshow] = useState(true);
  const { register, formState, handleSubmit } = props.useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    if (data) {
      // console.log(data);
      dispatch(actions.addData(data));
      props.setActiveStep(props.activeStep + 1);
    }
  };
  const exps = useSelector((state) => state.exps);
  const dispatch = useDispatch();
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} id="experience" noValidate>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            variant="body1"
            color={"purple"}
            alignSelf={"center"}
            component={FormLabel}
            htmlFor="check"
          >
            I am a Fresher
          </Typography>
          <Checkbox
            name="isFresher"
            {...register("isFresher")}
            value={true}
            onClick={() => {
              show === true ? setshow(false) : setshow(true);
            }}
          />
        </Box>
        {show === true ? (
          <Box>
            <Box>
              <TextField
                size="small"
                label="Enter Company Name"
                name="company1"
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
                  name="anuual_salary1"
                  {...register("anuual_salary1")}
                />
              </Box>
            </Box>
            <br />
            <hr />
            <Box>
              <TextField
                size="small"
                label="Enter Company Name"
                name="company2"
                type="text"
                fullWidth
                {...register("company2")}
              />
            </Box>
            <br />
            <Box>
              <TextField
                type="text"
                size="small"
                name="role2"
                label="Write Your Role In Company"
                fullWidth
                {...register("role2")}
              />
            </Box>
            <br />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <TextField
                  type="date"
                  size="small"
                  name="work_start2"
                  {...register("work_start2")}
                />
              </Box>
              <Box>
                <TextField
                  type="date"
                  size="small"
                  name="worked_till2"
                  {...register("worked_till2")}
                />
              </Box>
              <Box>
                <TextField
                  type="text"
                  size="small"
                  label="CTC (Optional)"
                  name="anuual_salary2"
                  {...register("anuual_salary2")}
                />
              </Box>
            </Box>
            <br />
            <hr />
            <Box>
              <TextField
                size="small"
                label="Enter Company Name"
                name="company3"
                type="text"
                fullWidth
                {...register("company3")}
              />
            </Box>
            <br />
            <Box>
              <TextField
                type="text"
                size="small"
                name="role3"
                label="Write Your Role In Company"
                fullWidth
                {...register("role3")}
              />
            </Box>
            <br />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <TextField
                  type="date"
                  size="small"
                  name="work_start3"
                  {...register("work_start3")}
                />
              </Box>
              <Box>
                <TextField
                  type="date"
                  size="small"
                  name="worked_till3"
                  {...register("worked_till3", {})}
                />
              </Box>
              <Box>
                <TextField
                  type="text"
                  size="small"
                  label="CTC (Optional)"
                  name="anuual_salary3"
                  {...register("anuual_salary1")}
                />
              </Box>
            </Box>
            <br />
            <hr />
            {exps.map((exp, index) => {
              return (
                <Box key={index + 1}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" marginY={2} color="purple">
                      <b>Add New Experience :</b>
                    </Typography>
                    <Tooltip title="Delete" placement="bottom" arrow>
                      <Button
                        color="secondary"
                        onClick={() =>
                          dispatch(actions.delExperience({ expid: exp.expid }))
                        }
                      >
                        <DeleteForever />
                      </Button>
                    </Tooltip>
                  </Box>
                  <Box>
                    <TextField
                      size="small"
                      label="Enter Company Name"
                      name={`company${index + 4}`}
                      type="text"
                      required
                      fullWidth
                      {...register(`company${index + 4}`, {
                        required: "Company Name is required",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors[`company${index + 4}`]?.message}
                    </Typography>
                  </Box>
                  <br />
                  <Box>
                    <TextField
                      type="text"
                      size="small"
                      name={`role${index + 4}`}
                      label="Write Your Role In Company"
                      required
                      fullWidth
                      {...register(`role${index + 4}`, {
                        required: "Your Role is Required",
                      })}
                    />
                    <Typography variant="subtitle2" color="red">
                      {errors[`role${index + 4}`]?.message}
                    </Typography>
                  </Box>
                  <br />
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <TextField
                        type="date"
                        size="small"
                        name={`work_start${index + 4}`}
                        required
                        {...register(`work_start${index + 4}`, {
                          required: "Enter Start Date",
                        })}
                      />
                      <Typography variant="subtitle2" color="red">
                        {errors[`work_start${index + 4}`]?.message}
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        type="date"
                        size="small"
                        name={`worked_till${index + 4}`}
                        required
                        {...register(`worked_till${index + 4}`, {
                          required: "Enter leaved Date",
                        })}
                      />
                      <Typography variant="subtitle2" color="red">
                        {errors[`worked_till${index + 4}`]?.message}
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        type="text"
                        size="small"
                        label="CTC (Optional)"
                        name={`CTC (Optional)${index + 4}`}
                        {...register(`CTC (Optional)${index + 4}`)}
                      />
                    </Box>
                  </Box>
                  <br />
                  <hr />
                </Box>
              );
            })}
            <Box textAlign="center">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() =>
                  dispatch(actions.addExperience({ expid: Math.random() }))
                }
              >
                Add
              </Button>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </form>
      <br />
    </Container>
  );
};

export default Experience;
