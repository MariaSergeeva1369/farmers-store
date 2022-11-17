import React from "react";
import { StyledButton } from "./style";

function Button({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  maxWidth, // делает кнопку на 100% родителя
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}) {
  return (
    <StyledButton
      {...props}
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
