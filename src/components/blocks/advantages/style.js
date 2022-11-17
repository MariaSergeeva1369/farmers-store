import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledAdvantages = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 100px 90px;
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
`;

export const StuledList = styled(Ul)`
  padding: 0;
  margin: 64px 0;
`;

export const StyledItem = styled(Li)`
  list-style-type: none;
`;
