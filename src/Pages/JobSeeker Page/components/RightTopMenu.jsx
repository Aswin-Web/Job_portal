import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Tooltip, tooltipClasses } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styled from "styled-components";
import Popup from "./Utils/Popup";
import AddApplication from './AddApplication'
import Test from './Test'

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  
  [`& .${tooltipClasses.tooltip}`]: {
   backgroundColor:' #635985',
   fontWeight:'bolder'
    
  },
}));


export default function RowRadioButtonsGroup() {
  
    

  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControl
          sx={{
            color: "white",
            accentColor: "red",
          }}
        >
          <FormLabel
            sx={{
              color: "white",
            }}
          ></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              sx={{}}
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="Pending"
            />
            <FormControlLabel
              value="rejected"
              control={<Radio />}
              label="Rejected"
            />
            <FormControlLabel
              value="passed"
              control={<Radio />}
              label="Passed"
            />
          </RadioGroup>
        </FormControl>
          <Popup content={<AddCircleOutlineIcon/>} body={<AddApplication/>}  titles={'Create New Post'} />
      </Box>
    </>
  );
}
