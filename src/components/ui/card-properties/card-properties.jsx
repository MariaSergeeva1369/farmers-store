import React from "react";
import {
  StyledDetermin,
  StyledTermin,
  StyledList
} from "/src/components/ui/card-features/styled";

function Properties({ properties }) {
  return (
    <StyledList>
      <StyledTermin>Энергетическая ценность:</StyledTermin>
      <StyledDetermin>{properties.energyValue}</StyledDetermin>
      <StyledTermin>Пищевая ценность:</StyledTermin>
      <StyledDetermin>{properties.nutritionalValue}</StyledDetermin>
    </StyledList>
  );
}

export default Properties;
