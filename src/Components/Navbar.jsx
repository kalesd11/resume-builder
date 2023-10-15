import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="relative"
      color="inherit"
      style={{
        width: "100%",
        padding: 8,
      }}
      elevation={3}
    >
      <Box display={"flex"} justifyContent="space-between">
        <Typography variant="h6" component={Button} color='purple' LinkComponent={Link} to="/">
          <b>
            Make-<i style={{ color: "blue" }}>my</i>-Resume
          </b>
        </Typography>
        <Box display="flex">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: 12 }}
            LinkComponent={Link}
            to="/myresume"
          >
            My Resume
          </Button>
          <Button variant="outlined" color="secondary">
            About Us
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
