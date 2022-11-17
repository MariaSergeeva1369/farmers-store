import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const StyledButton = styled.button`
  padding: 8px 12px;
  display: block;
  background-color: ${(props) =>
    props.active ? "#88AA4D" : props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-right: 8px;
`;

export const TitleList = styled.div`
  display: inline-flex;
  margin-bottom: 15px;
`;

export const StyledButtonTitle = styled(Title)`
  font-weight: 400;
  line-height: 150%;
  background-color: ${(props) =>
    props.active ? "#88AA4D" : props.theme.colorGray};
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlack};
`;
