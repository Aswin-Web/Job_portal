import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradingIcon from "@mui/icons-material/Grading";

const LeftSideBar = () => {
  const ButtonStyles = {
    margin: "10px",
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
    };
  return (
    <div className="LeftSide">
      <Typography
        variant="h5"
        sx={{
          padding: "5%",
          textAlign: "center",
          margin: "10px",
        }}
      >
        Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <Button variant="outlined" sx={ButtonStyles}>
          <MoreHorizIcon />
          <Typography
            component="h6"
            sx={{ fontWeight: "bold", marginLeft: "7px",textTransform:'capitalize' }}
          >
            Application Status
          </Typography>
        </Button>
        <Button variant="outlined" sx={ButtonStyles}>
          <ScheduleIcon />
          <Typography
            component="h6"
            sx={{ fontWeight: "bold", marginLeft: "7px" }}
          >
            Schedule
          </Typography>
        </Button>
        <Button variant="outlined" sx={ButtonStyles}>
          <FavoriteBorderIcon />
          <Typography
            component="h6"
            sx={{ fontWeight: "bold", marginLeft: "7px" }}
          >
            Wishlist
          </Typography>
        </Button>
        <Button variant="outlined" sx={ButtonStyles}>
          <GradingIcon />
          <Typography
            component="h6"
            sx={{ fontWeight: "bold", marginLeft: "7px" }}
          >
            Feed
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default LeftSideBar;
