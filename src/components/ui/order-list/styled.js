import styled from "styled-components";
import { Ul, Li } from "/src/components/styled";

export const StyledList = styled(Ul)``;

export const StyledItem = styled(Li)`
  position: relative;
  margin: 0;
`;

export const StyledCheckBox = styled.span`
  position: absolute;
  top: -4px;
  right: 0;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;

  ${(props) =>
    props.$isChecked &&
    `
      &::after {
        content: "";
        display: block;
        position: absolute;
        outline: none;
  }
  `}
`;
