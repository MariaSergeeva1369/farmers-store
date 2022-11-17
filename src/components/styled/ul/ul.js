import styled, { css } from "styled-components";

const gridList = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.indent};
  padding: 0;
  margin: 0;

  li {
    width: 540px;
    height: 197px;
    padding: ${(props) => props.theme.indent};
    box-sizing: border-box;
  }
`;

const flexList = css`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    flex-direction: row;
    width: 727px;
    box-sizing: border-box;
    margin-bottom: 12px;
    padding: ${(props) => props.theme.indent};
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) =>
    props.$isGridList ? gridList : props.$isFlexList ? flexList : ""}
`;

export default Ul;
