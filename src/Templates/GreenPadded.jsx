import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const GreenPadded = () => {
  const resumeToDownload = useSelector((state) => state.goToDownload);
  const skills = [];
  for (let i in resumeToDownload.userdata[3]) {
    skills.push(resumeToDownload.userdata[3][i]);
  }
  // console.log(skills);
  // console.log(resumeToDownload);
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="body2" color={"green"} fontSize={22}>
            <b>
              Name :{" "}
              {resumeToDownload.userdata
                ? resumeToDownload.userdata[0].fname +
                  " " +
                  resumeToDownload.userdata[0].mname[0] +
                  ". " +
                  resumeToDownload.userdata[0].lname
                : ""}
            </b>
          </Typography>
          <Typography variant="subtitle2" color={"green"}>
            <b>
              {resumeToDownload.userdata
                ? resumeToDownload.userdata[0].profession
                : ""}
            </b>
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="green">
            <b>Mob No :</b>{" "}
            {resumeToDownload.userdata
              ? resumeToDownload.userdata[0].mobile
              : ""}
          </Typography>
          <Typography variant="subtitle2" color="green">
            <b>Email Id :</b>{" "}
            {resumeToDownload.userdata
              ? resumeToDownload.userdata[0].email
              : ""}
          </Typography>
          <Typography variant="subtitle2" color="green">
            <b>Address :</b>{" "}
            {resumeToDownload.userdata
              ? resumeToDownload.userdata[0].city +
                ", " +
                resumeToDownload.userdata[0].district +
                ", " +
                resumeToDownload.userdata[0].state
              : ""}
          </Typography>
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "green",
          height: 3,
          borderColor: "green",
          borderRadius: 5,
        }}
      />
      <Box display={"flex"} flexWrap={"wrap"} mt={2.5} flexDirection="column">
        <Typography
          variant="body1"
          fontSize={17}
          boxShadow={3}
          p={0.5}
          ml={1}
          color="white"
          borderRadius={2}
          sx={{ backgroundColor: "green", px: 2 }}
        >
          <b>About :</b>
        </Typography>
        <Box>
          <Typography variant="subtitle2" ml={8} my={1} color="royalblue">
            <b>{resumeToDownload.userdata[0].about}</b>
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} mt={3} flexDirection="column">
        <Typography
          variant="body1"
          fontSize={17}
          boxShadow={3}
          p={0.5}
          ml={1}
          color="white"
          borderRadius={2}
          sx={{ backgroundColor: "green", px: 2 }}
        >
          <b>Education :</b>
        </Typography>
        <Box ml={2} sx={{ textTransform: "capitalize" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Education</b>
                </TableCell>
                <TableCell align="center">
                  <b>Board/University</b>
                </TableCell>
                <TableCell align="center">
                  <b>Passing Year</b>
                </TableCell>
                {/* <TableCell align="center">
                  <b>Marks</b>
                </TableCell>
                <TableCell align="center">
                  <b>Total</b>
                </TableCell> */}
                <TableCell align="center">
                  <b>Percentage</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {resumeToDownload.userdata[1].qualification1}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].authority1}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].year1}
                </TableCell>
                {/* <TableCell align="center">
                  {resumeToDownload.userdata[1].obtainedmarks1}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].totalMarks1}
                </TableCell> */}
                <TableCell align="center">
                  {(
                    (resumeToDownload.userdata[1].obtainedmarks1 /
                      resumeToDownload.userdata[1].totalMarks1) *
                    100
                  ).toFixed(2)}
                  %
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {resumeToDownload.userdata[1].qualification2}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].authority2}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].year2}
                </TableCell>
                {/* <TableCell align="center">
                  {resumeToDownload.userdata[1].obtainedmarks2}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].totalMarks2}
                </TableCell> */}
                <TableCell align="center">
                  {(
                    (resumeToDownload.userdata[1].obtainedmarks2 /
                      resumeToDownload.userdata[1].totalMarks2) *
                    100
                  ).toFixed(2)}
                  %
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {resumeToDownload.userdata[1].qualification3}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].authority3}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].year3}
                </TableCell>
                {/* <TableCell align="center">
                  {resumeToDownload.userdata[1].obtainedmarks3}
                </TableCell>
                <TableCell align="center">
                  {resumeToDownload.userdata[1].totalMarks3}
                </TableCell> */}
                <TableCell align="center">
                  {(
                    (resumeToDownload.userdata[1].obtainedmarks3 /
                      resumeToDownload.userdata[1].totalMarks3) *
                    100
                  ).toFixed(2)}
                  %
                </TableCell>
              </TableRow>
              {resumeToDownload.userdata[1].qualification4 ? (
                <TableRow>
                  <TableCell>
                    {resumeToDownload.userdata[1].qualification4}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[1].authority4}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[1].year4}
                  </TableCell>
                  {/* <TableCell align="center">
                    {resumeToDownload.userdata[1].obtainedmarks4}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[1].totalMarks4}
                  </TableCell> */}
                  <TableCell align="center">
                    {(
                      (resumeToDownload.userdata[1].obtainedmarks4 /
                        resumeToDownload.userdata[1].totalMarks4) *
                      100
                    ).toFixed(2)}
                    %
                  </TableCell>
                </TableRow>
              ) : (
                ""
              )}
            </TableBody>
          </Table>
        </Box>
      </Box>
      {!resumeToDownload.userdata[2].isFresher ? (
        <Box display={"flex"} flexWrap={"wrap"} mt={3} flexDirection="column">
          <Typography
            variant="body1"
            fontSize={17}
            boxShadow={3}
            p={0.5}
            ml={1}
            color="white"
            borderRadius={2}
            sx={{ backgroundColor: "green", px: 2 }}
          >
            <b>Experience :</b>
          </Typography>
          <Box ml={2}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Company</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Designation</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Started On</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Worked Till</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>CTC(Annual)</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">
                    {resumeToDownload.userdata[2].company1}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[2].role1}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[2].work_start1}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[2].worked_till1}
                  </TableCell>
                  <TableCell align="center">
                    {resumeToDownload.userdata[2].anuual_salary1
                      ? resumeToDownload.userdata[2].anuual_salary1
                      : "-"}
                  </TableCell>
                </TableRow>
                {resumeToDownload.userdata[2].company2 ? (
                  <TableRow>
                    <TableCell align="left">
                      {resumeToDownload.userdata[2].company2}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].role2}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].work_start2}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].worked_till2}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].anuual_salary2
                        ? resumeToDownload.userdata[2].anuual_salary2
                        : "-"}
                    </TableCell>
                  </TableRow>
                ) : (
                  ""
                )}
                {resumeToDownload.userdata.company3 ? (
                  <TableRow>
                    <TableCell align="left">
                      {resumeToDownload.userdata[2].company3}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].role3}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].work_start3}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].worked_till3}
                    </TableCell>
                    <TableCell align="center">
                      {resumeToDownload.userdata[2].anuual_salary3
                        ? resumeToDownload.userdata[2].anuual_salary3
                        : "-"}
                    </TableCell>
                  </TableRow>
                ) : (
                  ""
                )}
              </TableBody>
            </Table>
          </Box>
        </Box>
      ) : (
        ""
      )}
      <Box display={"flex"} flexWrap={"wrap"} mt={3} flexDirection="column">
        <Typography
          variant="body1"
          fontSize={17}
          boxShadow={3}
          p={0.5}
          ml={1}
          color="white"
          borderRadius={2}
          sx={{ backgroundColor: "green", px: 2 }}
        >
          <b>Personal Skills :</b>
        </Typography>
        <Grid container>
          {skills.map((data, index) => {
            return (
              <Grid item key={index + 1}>
                <Typography
                  variant="subtitle2"
                  ml={8}
                  my={1}
                  color="royalblue"
                  textTransform={"capitalize"}
                >
                  <b>{data}</b>;
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default GreenPadded;
