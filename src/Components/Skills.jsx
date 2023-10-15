import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";

const Skills = (props) => {
  const skills = useSelector((state) => state.skills);
 
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data) {
      // console.log(data);
      dispatch(actions.addData(data));
      props.setActiveStep(props.activeStep + 1);
    }
  };
  const { register, handleSubmit } = props.useForm();
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} id="skills">
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
            name="skiil1"
            {...register("skill1")}
          />
          <TextField
            size="small"
            type="text"
            label="Add Skill"
            name="skiil2"
            {...register("skill2")}
          />
          <TextField
            size="small"
            type="text"
            label="Add Skill"
            name="skiil3"
            {...register("skill3")}
          />
          {skills.map((skill, index) => {
            return (
              <TextField
                key={skill}
                size="small"
                type="text"
                label="Add Skill"
                name={`skill${index + 4}`}
                {...register(`skill${index + 4}`)}
              />
            );
          })}
        </Box>
      </form>
      <Box textAlign="center" my={2}>
        <Button
          onClick={() => dispatch(actions.addSkill({ id: Math.random() }))}
          variant="outlined"
          color="secondary"
        >
          Add Skill
        </Button>
      </Box>
    </Container>
  );
};

export default Skills;
