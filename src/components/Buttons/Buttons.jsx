import React from "react";
import Button from "../Button/Button";

const Buttons = ({ onStopClick, onStartClick, onResetClick, onWaitClick }) => {
  return (
    <>
      <Button onClick={onStartClick} text="Start" />

      <Button onClick={onStopClick} text="Stop" />

      <Button onClick={onResetClick} text="Reset" />
      <Button onClick={onWaitClick} text="Wait" />
    </>
  );
};

export default Buttons;
