import React from "react";
import { StyledSpan, StyledTitleWrapper } from "./Styles";

const Timer = ({ time }) => {
  return (
    <StyledTitleWrapper>
      <StyledSpan>
        {("0" + Math.floor((time / (60 * 60)) % 24)).slice(-2)}
      </StyledSpan>
      &nbsp;:&nbsp;
      <StyledSpan>{("0" + (Math.floor(time / 60) % 60)).slice(-2)}</StyledSpan>
      &nbsp;:&nbsp;
      <StyledSpan>{("0" + Math.floor(time % 60)).slice(-2)}</StyledSpan>
    </StyledTitleWrapper>
  );
};

export default Timer;
