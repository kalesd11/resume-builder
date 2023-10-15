import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Container } from "@mui/material";
import jsPDF from "jspdf";

import GreenPadded from "./GreenPadded";
const Download = () => {
  const resumeToDownload = useSelector((state) => state.goToDownload);
  const skills = [];
  for (let i in resumeToDownload.userdata[3]) {
    skills.push(resumeToDownload.userdata[3][i]);
  }
  // console.log(skills);
  console.log(resumeToDownload);
  const generatePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    let pdfjs = document.getElementById("resume");
    doc.html(pdfjs, {
      callback: (doc) => {
        // let pagecount = doc.internal.getNumberOfPages();
        // doc.deletePage(pagecount);
        doc.save("mypdf.pdf");
      },
      x: 1,
      y: 1,
      width: 595,
      windowWidth: 735,
    });
  };
  return (
    <>
      {/* <Box my={2} mx={2} textAlign='center'>
        <Button
          onClick={() => generatePDF()}
          variant="contained"
          color="secondary"
        >
          Create pdf
        </Button>
      </Box> */}

      <Container maxWidth="md" id="resume" sx={{ marginY: 2 }}>
        {resumeToDownload.templateName === "green_padded" ? (
          <GreenPadded />
        ) : (
          <GreenPadded />
        )}
      </Container>

      <Box my={2} mx={2} textAlign="center">
        <Button
          onClick={() => generatePDF()}
          variant="contained"
          color="secondary"
        >
          Create pdf
        </Button>
      </Box>
      {/* <Test/> */}
    </>
  );
};

export default Download;
