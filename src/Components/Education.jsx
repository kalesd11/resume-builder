import { TextField, Typography, Container, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { actions } from "../State/Actions";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

export default function Education(props) {
  const { register, handleSubmit, formState } = props.useForm();
  let { errors } = formState;

  const [postgraduate, setPostgraduate] = useState(false);

  const onSubmit = (data) => {
    if (data) {
      // console.log(data);
      dispatch(actions.addData(data));
      props.setActiveStep(props.activeStep + 1);
    }
  };
  const edus =!postgraduate? ["SSC", "HSC", "Graduation/Degree"]:["SSC", "HSC", "Graduation/Degree","Post Graduation"]
  const dispatch = useDispatch();
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} id="education" noValidate>
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
        <Box display={"flex"} justifyContent={"center"}>
          {" "}
          <Button onClick={() => {setPostgraduate(!postgraduate)}} color="secondary">
            {!postgraduate ? "Add Post Graduation" : "Not postgraduate"}
          </Button>
        </Box>
      </form>
    </Container>
  );
}
