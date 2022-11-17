import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import { CardWrapper, StyledImage, StyledCardTitle } from "./styled";
import Description from "/src/components/ui/card-description/card-description";
import Features from "/src/components/ui/card-features/card-features";
import Properties from "/src/components/ui/card-properties/card-properties";
import Tabs from "/src/components/ui/tabs/tabs";

function ProductCard({ product }) {
  const tabs = [
    {
      title: product.description.title,
      content: <Description description={product.description}></Description>
    },
    {
      title: product.features.title,
      content: <Features features={product.features}></Features>
    },
    {
      title: product.properties.title,
      content: <Properties properties={product.properties}></Properties>
    }
  ];

  return (
    <CardWrapper>
      <StyledImage
        width={248}
        height={248}
        src={product.image}
        alt={product.title}
      />
      <div>
        <StyledCardTitle level={3} size={TitleSize.SMALL}>
          {product.title}
        </StyledCardTitle>
        <Tabs tabs={tabs} />
      </div>
    </CardWrapper>
  );
}

export default ProductCard;
