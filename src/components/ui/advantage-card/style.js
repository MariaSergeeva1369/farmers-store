import styled, { css } from "styled-components";

const FarmProduct = css`
  background: ${(props) => props.theme.colorforIconFarmBg};

  span {
    background: ${(props) => props.theme.colorforIconFarm};
  }
`;

const ShopProduct = css`
  background: ${(props) => props.theme.colorForIconShopBg};

  span {
    background: ${(props) => props.theme.colorForIconShop};
  }
`;

export const StyledAdvantagesCard = styled.div`
  width: 540px;
  height: 197px;
  padding: 20px;
  box-sizing: border-box;
  ${(props) => (props.isFarmProduct ? FarmProduct : ShopProduct)}
`;

export const StyledIcon = styled.img`
  position: absolute;
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-left: 72px;
  margin-bottom: 20px;
`;

export const StyledFootnote = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 21px;
  padding: 2px 10px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const StyledCardText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`;
