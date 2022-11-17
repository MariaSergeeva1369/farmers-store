import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLink, StyledLogoText } from "./style";

function Logo() {
  return (
    <StyledLink to="/">
      <LogoImage />
      <StyledLogoText>Фермерские продукты</StyledLogoText>
    </StyledLink>
  );
}

export default Logo;
