import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledSection = styled(Section)`
  position: relative;
  margin: 0 auto;
  padding: 183px 553px 160px 90px;
  width: ${(props) => props.theme.pageWidth};
  background: ${(props) => props.theme.colorBlue};
  box-sizing: border-box;

  &::after {
    position: absolute;
    display: block;
    top: 37px;
    right: ${(props) => props.theme.indent};
    content: "";
    width: 446px;
    height: 563px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(${aboutImage});
  }
`;

export const TextWrapper = styled.div`
  width: 538px;
`;

export const StyledText = styled.p`
  margin: 24px 0 24px;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
`;
