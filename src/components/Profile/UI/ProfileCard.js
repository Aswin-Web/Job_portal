import React from "react";
import classes from "./ProfileCard.module.css";
import { IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import Add from "../ProfileEdit/Add/Add";

const ProfileCard = (props) => {
  const editButtonHandler = (event) => {
    console.log(props.CardName);
  };

  return (
    <div className={classes.profileCard}>
      <Box display="flex" sx={{ padding: "0.5em" }}>
        <IconButton onClick={editButtonHandler} sx={{ marginLeft: "auto" }}>
          <EditIcon  />
        </IconButton>

        <Add Card={props.CardName} />
      </Box>
      <div className={classes.cardContent}>{props.children}</div>
    </div>
  );
};

export default ProfileCard;
