import React from "react";
import { StyledWeight, StyledText } from "./styled";

function Description({ description }) {
  return (
    <>
      <StyledText>{description.text}</StyledText>
      <StyledWeight>
        {description.price} руб./{description.weight}
      </StyledWeight>
    </>
  );
}

export default Description;
