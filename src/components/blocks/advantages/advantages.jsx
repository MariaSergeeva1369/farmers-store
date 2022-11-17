import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import AdvantadeCard from "/src/components/ui/advantage-card/advantage-card";
import { StyledAdvantages, StuledList, StyledItem } from "./style";

function Advantages({ advantages }) {
  return (
    <StyledAdvantages>
      {advantages?.length ? (
        <>
          <Title size={TitleSize.MEDIUM} level={TitleLevel.H2}>
            Почему фермерские продукты лучше?
          </Title>
          <StuledList $isGridList>
            {advantages.map((advantage) => (
              <StyledItem key={advantage.id}>
                <AdvantadeCard {...advantage} />
              </StyledItem>
            ))}
          </StuledList>
          <Button link="/buy">Купить</Button>
        </>
      ) : null}
    </StyledAdvantages>
  );
}

export default Advantages;
