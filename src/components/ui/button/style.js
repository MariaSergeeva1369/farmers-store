import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  width: 260px;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  border: none;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  text-align: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:focus {
    background: ${(props) => props.theme.colorForButtonHover};
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.4;
  }
`;
