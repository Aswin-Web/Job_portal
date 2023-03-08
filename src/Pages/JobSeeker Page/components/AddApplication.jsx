import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DropDown from "./Utils/Dropdown"

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor:'white',
        height:'100vh',
        padding:'25px',
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{
        display:'flex',
        flexDirection:'column'
      }}>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          placeholder="Google"
          focused
        />
        <TextField
          
          id="outlined-disabled"
          label="Designation"
          placeholder="Software Developer"
          focused
        />
        <TextField
          id="outlined-password-input"
          label="Status"
          type="text"
        />
        <TextField
          id="outlined-read-only-input"
          label="Where Did You Apply"
          defaultValue="Hello World"
          focused
          
        />
        <TextField
          id="outlined-number"
          label="Job Link "
          type="text"
          placeholder="https://google.com"
          focused
          
        />

      <DropDown options={["Pending","Selected","Rejected"] } title={'Status'}/>
        </Box>
    </Box>
  );
}
