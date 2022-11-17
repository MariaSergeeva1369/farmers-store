import React, { useState } from "react";
import { StyledButton, TitleList, StyledButtonTitle } from "./styled";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <StyledButton active key={`item${index * 10}`}>
                  <StyledButtonTitle active level={4}>
                    {item.title}
                  </StyledButtonTitle>
                </StyledButton>
              );
            }
            return (
              <StyledButton
                key={item.title}
                onClick={() => setActiveTab(index)}
              >
                <StyledButtonTitle level={4}>{item.title}</StyledButtonTitle>
              </StyledButton>
            );
          })}
      </TitleList>
      <div>{tabs[activeTab].content}</div>
    </>
  );
}

export default Tabs;
