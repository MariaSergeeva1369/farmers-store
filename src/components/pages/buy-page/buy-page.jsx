import React, { useState } from "react";
import ProductCard from "/src/components/ui/product-card/product-card";
import {
  StyledForm,
  ProductsWrapper,
  StyledTitle,
  AddressInput,
  PriceLabel,
  PriceValue,
  CheckboxLabel
} from "./styled";
import Button from "/src/components/ui/button/button";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import { Wrapper, ProductSwiper, StyledSwiperSlide } from "./styled.js";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [address, setAddress] = useState("");

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  //id в продукты
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  //цена покупки
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.description.price),
    0
  );
  // ОБРАБОТЧИК НА КНОПКУ КУПИТЬ
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.title} - ${product.description.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
    <Wrapper as="form">
      <StyledForm>
        <ProductsWrapper>
          <StyledTitle level={2} verySmall>
            Выберите продукты
          </StyledTitle>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.title
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </ProductsWrapper>
        <ProductsWrapper>
          <StyledTitle level={2} verySmall marginBottom={24}>
            Сделать заказ
          </StyledTitle>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </ProductsWrapper>
      </StyledForm>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <StyledSwiperSlide key={product.id}>
            <ProductCard product={product} />
          </StyledSwiperSlide>
        ))}
      </ProductSwiper>
    </Wrapper>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default BuyPage;
