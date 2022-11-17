import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import {
  StyledAdvantagesCard,
  StyledIcon,
  TitleWrapper,
  StyledFootnote,
  StyledCardText
} from "./style";

function AdvantageCard({ isFarmProduct, footnote, title, text, src }) {
  return (
    <StyledAdvantagesCard isFarmProduct={isFarmProduct}>
      <StyledIcon width={56} height={56} alt={title} src={src} />
      <TitleWrapper>
        <StyledFootnote>{footnote}</StyledFootnote>
        <Title level={TitleLevel.H3}>{title}</Title>
      </TitleWrapper>
      <StyledCardText dangerouslySetInnerHTML={{ __html: text }} />
    </StyledAdvantagesCard>
  );
}

export default AdvantageCard;
