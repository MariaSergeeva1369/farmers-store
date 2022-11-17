import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  line-height: 115%;
  font-weight: 700;
  font-size: ${(props) => {
    switch (props.$size) {
      case TitleSize.BIG:
        return "44px";
      case TitleSize.MEDIUM:
        return "36px";
      case TitleSize.SMALL:
        return "24x";
      case TitleSize.VERY_SMALL:
        return "18x";
      default:
        return "14px";
    }
  }};
`;
