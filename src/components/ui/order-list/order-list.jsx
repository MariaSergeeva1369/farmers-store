import React from "react";
import { StyledList, StyledItem, StyledCheckBox } from "./styled";

function OrderList({ products }) {
  return (
    <StyledList>
      <StyledItem>
        <StyledCheckBox />
      </StyledItem>
    </StyledList>
  );
}

export default OrderList;
