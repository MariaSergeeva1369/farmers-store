import styled, { css } from "styled-components";
import { Section } from "/src/components/styled";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Title from "/src/components/ui/title/title";
import TextInput from "/src/components/ui/text-input/text-input";
import checkboxSelect from "/src/assets/arrow.svg";
import Price from "/src/components/ui/price/price";

export const Wrapper = styled(Section)`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  margin-left: auto;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  flex-direction: column;
`;

export const StyledForm = styled.div`
  background-color: ${(props) => props.theme.colorGray};
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const ProductsWrapper = styled.div`
  background-color: ${(props) => props.theme.colorWhite};
  margin-bottom: 18px;
  padding: 24px 20px;
  width: 353px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const StyledTitle = styled(Title)`
  line-height: 27px;
  margin-bottom: ${(props) => props.marginBottom || 27}px;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.colorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
  }
`;
