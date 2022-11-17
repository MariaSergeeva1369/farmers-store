import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledCopyRidht, StyledFooter } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <StyledCopyRidht>Создано 2021</StyledCopyRidht>
    </StyledFooter>
  );
}

export default Footer;
