import React from "react";
import Btn from "../Button/Button";
import { ButtonGroup } from "@mui/material";
import { StyledTitleWrapper } from "./Styles";

const BtnGroup = ({ onStopClick, onStartClick, onResetClick, onWaitClick }) => {
  return (
    <StyledTitleWrapper>
      <ButtonGroup variant="contained">
        <Btn onClick={onStartClick} text="Start" />
        <Btn onClick={onStopClick} text="Stop" />
        <Btn onClick={onResetClick} text="Reset" />
        <Btn onClick={onWaitClick} text="Wait" />
      </ButtonGroup>
    </StyledTitleWrapper>
  );
};

export default BtnGroup;
