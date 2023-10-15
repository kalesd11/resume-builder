import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../State/Actions";
const Home = () => {
  const [show, Setshow] = useState({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  });
  
  // const [templateName, setTemplateName] = useState('')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.delData());
    let data = JSON.parse(localStorage.getItem("data"));
    if(data){
      dispatch(actions.accessLocal())
      // console.log(data)
    }
    // eslint-disable-next-line
  },[])
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} marginY={12} textAlign="center">
        <Grid
          item
          sm={6}
          lg={3}
          onMouseEnter={() => {
            Setshow({ show1: true });
          }}
          onMouseLeave={() => {
            Setshow({ show1: false });
          }}
        >
          <img
            src="https://images.template.net/116/Professional-Resume-Template.jpg"
            width="65%"
            alt="Templates"
          />
          <Button
            size="small"
            className="usetheme"
            LinkComponent={Link}
            to="/info"
            variant="contained"
            color="secondary"
            style={{ visibility: show.show1 ? "visible" : "hidden" }}
            onClick={()=>dispatch(actions.templateName({templateName:"blue_scar1"}))}
          >
            use theme
          </Button>
        </Grid>
        <Grid
          item
          sm={6}
          lg={3}
          onMouseEnter={() => {
            Setshow({ show2: true });
          }}
          onMouseLeave={() => {
            Setshow({ show2: false });
          }}
        >
          <img
            src="https://images.template.net/116/Professional-Resume-Template.jpg"
            width="65%"
            alt="Templates"
          />
          <Button
            size="small"
            className="usetheme"
            LinkComponent={Link}
            to="/info"
            variant="contained"
            color="secondary"
            style={{ visibility: show.show2 ? "visible" : "hidden" }}
            onClick={()=>dispatch(actions.templateName({templateName:"blue_scar1"}))}
          >
            use theme
          </Button>
        </Grid>
        <Grid
          item
          sm={6}
          lg={3}
          onMouseEnter={() => {
            Setshow({ show3: true });
          }}
          onMouseLeave={() => {
            Setshow({ show3: false });
          }}
        >
          <img
            src="https://images.template.net/116/Professional-Resume-Template.jpg"
            width="65%"
            alt="Templates"
          />
          <Button
            size="small"
            className="usetheme"
            LinkComponent={Link}
            to="/info"
            variant="contained"
            color="secondary"
            style={{ visibility: show.show3 ? "visible" : "hidden" }}
            onClick={()=>dispatch(actions.templateName({templateName:"blue_scar1"}))}
          >
            use theme
          </Button>
        </Grid>
        <Grid
          item
          sm={6}
          lg={3}
          onMouseEnter={() => {
            Setshow({ show4: true });
          }}
          onMouseLeave={() => {
            Setshow({ show4: false });
          }}
        >
          <img
            src="https://images.template.net/116/Professional-Resume-Template.jpg"
            width="65%"
            alt="Templates"
          />
          <Button
            size="small"
            className="usetheme"
            LinkComponent={Link}
            to="/info"
            variant="contained"
            color="secondary"
            style={{ visibility: show.show4 ? "visible" : "hidden" }}
            onClick={()=>dispatch(actions.templateName({templateName:"blue_scar1"}))}
          >
            use theme
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
