import { TextField, Typography, Container, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { actions } from "../State/Actions";
import SetResumeName from "../Modals/SetResumeName";
import { useState } from "react";

export default function Personal(props) {
  const { register, handleSubmit, formState } = props.useForm();
  let { errors } = formState;
  const [resumeName, setresumeName] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data) {
      // console.log(data);
      dispatch(actions.addData({ ...data, resumeName: resumeName }));
      props.setActiveStep(props.activeStep + 1);
    }
  };

  return (
    <Container>
      {<SetResumeName resumeName={resumeName} setresumeName={setresumeName} />}
      <form onSubmit={handleSubmit(onSubmit)} id="personalInfo" noValidate>
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
              label="Email Id"
              variant="outlined"
              type="text"
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
              name="profession"
              label="Profession"
              variant="outlined"
              type="text"
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
      </form>
    </Container>
  );
}
