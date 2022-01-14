import React from "react";
import { Button } from "@mui/material";

const Button = ({ text, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

export default Button;
