import React from "react";
import { StyledDetermin, StyledTermin, StyledList } from "./styled";

function Features({ features }) {
  return (
    <StyledList>
      <StyledTermin>Масса:</StyledTermin>
      <StyledDetermin>{features.weight}</StyledDetermin>
      <StyledTermin>Срок годности:</StyledTermin>
      <StyledDetermin>{features.shelfLife}</StyledDetermin>
      <StyledTermin>Порода:</StyledTermin>
      <StyledDetermin>{features.breed}</StyledDetermin>
      <StyledTermin>Место происхождения:</StyledTermin>
      <StyledDetermin>{features.madeIn}</StyledDetermin>
    </StyledList>
  );
}

export default Features;
