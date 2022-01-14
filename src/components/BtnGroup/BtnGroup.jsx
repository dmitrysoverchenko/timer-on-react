import React from "react";
import Btn from "../Button/Button";
import { ButtonGroup } from "@mui/material";

const BtnGroup = ({ onStopClick, onStartClick, onResetClick, onWaitClick }) => {
  return (
    <ButtonGroup variant="contained">
      <Btn onClick={onStartClick} text="Start" />
      <Btn onClick={onStopClick} text="Stop" />
      <Btn onClick={onResetClick} text="Reset" />
      <Btn onClick={onWaitClick} text="Wait" />
    </ButtonGroup>
  );
};

export default BtnGroup;
