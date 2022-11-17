import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: ${(props) => props.theme.indent};
  padding-left: ${(props) => props.theme.indent};
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  box-sizing: border-box;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledCopyRidht = styled.span`
  min-width: 148px;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
`;
