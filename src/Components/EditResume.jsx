import { EditNote } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditPersonal from "../Modals/EditPersonal";
import EditEducation from "../Modals/EditEducation";
import { Link } from "react-router-dom";
import EditExperience from "../Modals/EditExperience";
import EditSkills from "../Modals/EditSkills";

const EditResume = () => {
  const resumeToEdit = useSelector((state) => state.editResume);
  // console.log(resumeToEdit);
  const user = [
    "Personal Info",
    "Education Info",
    "Experience Info",
    "Added Skills",
  ];
  const [showPersonal, setShowPersonal] = useState(false);
  const [showEducation, setshowEducation] = useState(false);
  const [showExperience, setshowExperience] = useState(false);
  const [showSkills, setshowSkills] = useState(false);
  return (
    <Container sx={{ mt: 1 }} maxWidth="md">
      <Typography
        textTransform={"capitalize"}
        color="purple"
        variant="h5"
        textAlign="center"
        fontSize={25}
        boxShadow={2}
      >
        <b>
          {resumeToEdit.userdata ? resumeToEdit.userdata[0].resumeName : ""}
        </b>
      </Typography>
      {resumeToEdit.userdata ? (
        resumeToEdit.userdata?.map((data, index) => {
          return (
            <Box my={2} key={Math.random()}>
              <Card>
                <Box
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                >
                  <CardHeader
                    title={
                      <Typography
                        textTransform={"capitalize"}
                        variant="h6"
                        textAlign="center"
                        fontWeight="bold"
                        boxShadow={2}
                        p={1}
                        ml={-2}
                      >{`${user[index]} :`}</Typography>
                    }
                    sx={{ color: "purple"}}
                  />

                  <CardContent>
                    {index === 0 ? (
                      <Box color="purple">
                        <Typography
                          textTransform={"capitalize"}
                          variant="body1"
                        >
                          <b>Name :</b> {data.fname + " " + data.lname}
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          variant="body1"
                        >
                          <b>Proffession :</b> {data.profession}
                        </Typography>
                        <Typography textTransform={"capitalize"}>
                          <b>Mobile No :</b>{" "}
                          <a href={`tel:+91${data.mobile}`}>{data.mobile}</a>
                        </Typography>
                        <Typography>
                          <b>Email Id :</b>{" "}
                          <a
                            href={`mailto:${data.email}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {data.email}
                          </a>
                        </Typography>
                        <Typography textTransform={"capitalize"}>
                          <b>Address :</b>{" "}
                          {data.city + ", " + data.district + ", " + data.state}
                        </Typography>
                      </Box>
                    ) : index === 1 ? (
                      <Box color="purple">
                        {!data.qualification4 ? (
                          <>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>Qualification : </b>
                              {data.qualification3 + " "}
                            </Typography>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>University/board : </b>
                              {data.authority3}
                            </Typography>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>Grade : </b>
                              {(
                                (data.obtainedmarks3 / data.totalMarks3) *
                                100
                              ).toFixed(2)}
                              %
                            </Typography>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>Passing Year : </b>
                              {data.year3}
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>Qualification : </b>
                              {data.qualification4 + " "}
                            </Typography>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>University/board : </b>
                              {data.authority4 + " "}
                            </Typography>
                            <Typography
                              textTransform={"capitalize"}
                              variant="body1"
                            >
                              <b>Passing Year : </b>
                              {data.year4}
                            </Typography>
                          </>
                        )}
                      </Box>
                    ) : index === 2 ? (
                      !data.isFresher ? (
                        <Box color="purple">
                          <Typography
                            textTransform={"capitalize"}
                            variant="body1"
                          >
                            <b>Organization : </b>
                            {data?.company1}
                          </Typography>
                          <Typography
                            textTransform={"capitalize"}
                            variant="body1"
                          >
                            <b>Role : </b>
                            {data?.role1}
                          </Typography>
                          <Typography
                            textTransform={"capitalize"}
                            variant="body1"
                          >
                            <b>Started on : </b>
                            {data?.work_start1}
                          </Typography>
                          <Typography
                            textTransform={"capitalize"}
                            variant="body1"
                          >
                            <b>Worked till : </b>
                            {data?.worked_till1}
                          </Typography>
                        </Box>
                      ) : (
                        <Typography
                          textTransform={"capitalize"}
                          variant="body1"
                          color={"purple"}
                        >
                          <b>
                            You are a Fresher Candidate, No experience added...!
                          </b>
                        </Typography>
                      )
                    ) : index === 3 ? (
                      <Box color="purple">
                        <Typography textTransform={"capitalize"}>
                          <b>Skills : </b>
                          {data?.skill1}
                        </Typography>
                        <Typography textTransform={"capitalize"}>
                          <b>Skills : </b>
                          {data?.skill2}
                        </Typography>
                        <Typography textTransform={"capitalize"}>
                          <b>Skills : </b>
                          {data?.skill3}
                        </Typography>
                      </Box>
                    ) : (
                      ""
                    )}
                  </CardContent>
                  <Box alignSelf={"center"} boxShadow={2}>
                    <Tooltip title="Edit Details">
                      <Button
                        color="secondary"
                        onClick={() => {
                          index === 0
                            ? setShowPersonal(true)
                            : index === 1
                            ? setshowEducation(true)
                            : index === 2
                            ? setshowExperience(true)
                            : setshowSkills(true);
                        }}
                      >
                        <EditNote />
                      </Button>
                    </Tooltip>
                  </Box>
                </Box>
              </Card>
           
            </Box>
          );
        })
      ) : (
        <Box color="purple" textAlign="center">
          <Typography variant="h5">Please Select any Resume To Edit</Typography>
          <br />
          <Button LinkComponent={Link} to="/myresume" color="secondary" variant="outlined" sx={{borderRadius:5}}>
            click to view resume
          </Button>
        </Box>
      )}
         <EditPersonal open={showPersonal} setOpen={setShowPersonal} />
              <EditEducation
                open={showEducation}
                setOpen={setshowEducation}
              />
              <EditExperience
                open={showExperience}
                setOpen={setshowExperience}
              />
              <EditSkills open={showSkills} setOpen={setshowSkills} />
    </Container>
  );
};

export default EditResume;
