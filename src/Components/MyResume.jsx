import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteResume from "../Modals/deleteResume";
import { actions } from "../State/Actions";
import { Link } from "react-router-dom";

const MyResume = () => {
  const dispatch = useDispatch();
  const [showDel, setShowDel] = useState(false);
  const resumeData = useSelector((state) => state.completeForm);
  // console.log(resumeData)
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      dispatch(actions.accessLocal());
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Container maxWidth="md">
      {resumeData.length ? (
        resumeData.map((data, index) => {
          return (
            <Box mt={2} key={Math.random()}>
              <Card
                elevation={3}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <CardHeader
                    title={data.userdata[0].resumeName}
                    sx={{ color: "purple", textTransform: "capitalize" }}
                    subheader={data.date}
                  />
                  <CardContent>
                    <Typography variant="body1" color={"purple"}>
                      <b>
                        {data.userdata[1].qualification4
                          ? data.userdata[1].qualification4
                          : data.userdata[1].qualification3}

                        {` (${
                          data.userdata[1].authority4
                            ? data.userdata[1].authority4
                            : data.userdata[1].authority3
                        }-${
                          data.userdata[1].year4
                            ? data.userdata[1].year4
                            : data.userdata[1].year3
                        })`}
                      </b>
                    </Typography>
                    <Typography variant="subtitle2" color={"purple"}>
                      <i>{data.userdata[0].profession}</i>
                    </Typography>
                    <Typography
                      variant="button"
                      color={"purple"}
                      textTransform="capitalize"
                    >
                      <b>{`1.${data.userdata[3].skill1}, 2.${data.userdata[3].skill2}, 3.${data.userdata[3].skill3}`}</b>
                    </Typography>
                    {/* <Typography variant="body2">Resume Data Goes Here</Typography> */}
                  </CardContent>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  justifyContent="space-around"
                  mr={5}
                >
                  <Button
                    variant="contained"
                    color="success"
                    LinkComponent={Link}
                    to="/download"
                    onClick={() => {
                      dispatch(actions.goToDownload({ ...data }));
                    }}
                  >
                    download
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    LinkComponent={Link}
                    to="/edit_resume"
                    onClick={() =>
                      dispatch(
                        actions.editResume({
                          ...data,
                          resumeid: resumeData[index].resumeid,
                        })
                      )
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      dispatch(actions.resumeToDelete(data));
                      setShowDel(true);
                    }}
                  >
                    delete
                  </Button>
                </Box>
              </Card>
              <DeleteResume showDel={showDel} setShowDel={setShowDel} />
            </Box>
          );
        })
      ) : (
        <Box textAlign={"center"} mt={5}>
          <Typography variant="body1" color="red">
            <b>You Have Not Created Any Resume Yet...!</b>
          </Typography>
          <br />
          <Button
            variant="contained"
            color="secondary"
            LinkComponent={Link}
            to="/"
          >
            Create Resume
          </Button>
        </Box>
      )}
    </Container>
  );
};
export default MyResume;
