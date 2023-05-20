import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MainText = styled.h1`
  font-size: 30px;
  text-align: center;
`;

export default function MainPage() {
  return (
    <MainWrapper>
      <MainText>메인페이지</MainText>
    </MainWrapper>
  );
}
