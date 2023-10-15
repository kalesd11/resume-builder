import React, { useEffect, useState } from "react";
import Personal from "./Personal";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import FormComplete from "../Modals/FormComplete";
import { useDispatch } from "react-redux";
import { actions } from "../State/Actions";

const Info = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Personal Info", "Education", "Experience", "Skills"];
  const forms = ["personalInfo", "education", "experience", "skills"];
  const activeForms = [Personal, Education, Experience, Skills];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.delData());
    let data = JSON.parse(localStorage.getItem("data"));
    if(data){
      dispatch(actions.accessLocal())
      // console.log(data)
    }
  }, []);
  return (
    <Container maxWidth="md">
      {activeStep === steps.length ? (
        <FormComplete />
      ) : (
        /* orientation="vertical"  for Vertical Stepper*/
        <>
          <Paper component={Box} variant="outlined" padding={2} marginTop={5}>
            <Box mb={5}>
              <Stepper activeStep={activeStep}>
                {steps.map((step, index) => {
                  return (
                    <Step key={index + 1}>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            <Box>
              {activeForms.map((Curform, index) => {
                return index === activeStep ? (
                  <Curform
                    useForm={useForm}
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    key={Math.random()}
                  ></Curform>
                ) : (
                  ""
                );
              })}
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setActiveStep(activeStep - 1)}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                form={forms[activeStep]}
                // How to submit after error checking
                // onClick={activeStep==steps.length-1?()=>{setActiveStep(activeStep+1)}:""}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default Info;
