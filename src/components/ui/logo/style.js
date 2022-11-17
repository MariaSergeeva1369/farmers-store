import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 44px;
  text-decoration: none;
  width: 398px;
`;

export const StyledLogoText = styled.span`
  font-family: "Inter";
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: #333333;
  margin-left: auto;
`;
