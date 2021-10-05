import React, { Component } from "react";
import { Container } from "@material-ui/core";

import Slider from "./Slider";
//import { Box } from '@material-ui/core';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Typography component="div">
          <Box sx={{ textAlign: "center", m: 3 }}>
            Better clothing for the planet
            Create screens directly in Method or add ypur images from Sketch or Figma.
          </Box>

          <Box sx={{ textAlign: "center", m: 3}}>
            You can even sync designs from your cloud storage!
            
            </Box>
            <Box sx={{ textAlign: "center", m: 3}}>
            <Button variant="contained" color="secondary" size="large"  href="/shop">
                   SHOP
               </Button>
          
            </Box>
        </Typography>
        <Container>
          <Slider></Slider>
        </Container>
      </div>
    );
  }
}
