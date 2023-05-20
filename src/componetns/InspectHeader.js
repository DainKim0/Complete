import React from "react";
import { ReactComponent as HomeIcon } from ".././asset/Home.svg";
import styled from "styled-components";

const InspectHeaderBox = styled.header`
  padding: 35px 20px;
  border-bottom: 4px solid;
  position: relative;
`;

const HeaderText = styled.h2`
  color: #796b5d;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 35px;
`;

export default function InspectHeader({ text }) {
  return (
    <InspectHeaderBox>
      <HomeIcon />
      <HeaderText>{text}</HeaderText>
    </InspectHeaderBox>
  );
}
