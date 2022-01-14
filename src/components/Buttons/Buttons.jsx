import React from "react";
import Btn from "../Button/Button";

const Buttons = ({ onStopClick, onStartClick, onResetClick, onWaitClick }) => {
  return (
    <>
      <Btn onClick={onStartClick} text="Start" />

      <Btn onClick={onStopClick} text="Stop" />

      <Btn onClick={onResetClick} text="Reset" />
      <Btn onClick={onWaitClick} text="Wait" />
    </>
  );
};

export default Buttons;
