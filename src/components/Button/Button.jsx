import React from "react";
import { Button } from "@mui/material";

const Btn = ({ text, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

export default Btn;
