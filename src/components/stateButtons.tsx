import React from "react";
import styled from "styled-components";

const FlexButtonsContainer = styled.div`
  display: flex;
`;

export type ConversionState = "preprocess" | "AST" | "convertedAST" | "Compile";

type StateButtonsProps = {
  states: ConversionState[];
  onClick: (arg0: ConversionState) => void;
};
const StateButtons = ({ states, onClick }: StateButtonsProps) => {
  return (
    <FlexButtonsContainer>
      <span>Select what do you want to do:</span>
      {states.map((state) => {
        return <button onClick={() => onClick(state)}>{state}</button>;
      })}
    </FlexButtonsContainer>
  );
};

export default StateButtons;
