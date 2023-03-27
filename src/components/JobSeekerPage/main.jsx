import React from "react";
import Navbar from "./Navbar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Box } from "@mui/material";

const JobseekerPage = () => {
  
  return (
    <div className="components">
      <Navbar className="Navbar" />

      <Box className="UserBody">
        <Box>
          <LeftSideBar />
        </Box>
        <RightSideBar />
      </Box>
    </div>
  );
};

export default JobseekerPage;
