import styled from "styled-components";

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 100px 90px;
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
`;

export default Section;
