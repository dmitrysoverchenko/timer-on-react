import React from "react";

const Timer = ({ time }) => {
  return (
    <>
      <span>{("0" + Math.floor((time / (60 * 60)) % 24)).slice(-2)}</span>
      &nbsp;:&nbsp;
      <span>{("0" + (Math.floor(time / 60) % 60)).slice(-2)}</span>
      &nbsp;:&nbsp;
      <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
    </>
  );
};

export default Timer;
