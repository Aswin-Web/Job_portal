import { Box, Container } from '@mui/material';
import React from 'react'
import Cards from './Cards';

import RightSideNavbar from "./RightTopMenu"
const RightSideBar = () => {
  return (
    <div className="RightSide">
      <Box>
        <RightSideNavbar />  
      </Box>
      <Container>
        
        <Cards />
      </Container>
    </div>
  );
}

export default RightSideBar