import { TextField } from "@mui/material";
import React from "react";

function CustomizeInput(props) {
  return (
    <TextField
    margin="normal"
      InputLabelProps={{ style: { color: "black" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      InputProps={{
        style: {
          width: "350px",
          borderRadius: 10,
          color: "black",
        },
      }}
    />
  );
}

export default CustomizeInput;
