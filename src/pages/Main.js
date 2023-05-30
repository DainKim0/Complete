import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import mainBackground from "./main_background.png";
import diagnosisIcon from "./diagnosis.png";
import LoginbuttonImg from "./loginbutton.png";

const FullScreenImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const IconContainer = styled.div`
  position: absolute;
  top: calc(33% + 20px);
  right: calc(54.5% + 20px);
  max-width: 50%;
  max-height: 50%;

  @media (max-width: 768px) {
    top: calc(50% + 10px);
    right: calc(50% + 10px);
    max-width: 70%;
    max-height: 70%;
  }

  @media (max-width: 480px) {
    top: calc(60% + 5px);
    right: calc(60% + 5px);
    max-width: 90%;
    max-height: 90%;
  }
`;

const Icon = styled.img`
  width: 200px;
  height: 220px;
  cursor: pointer;
  opacity: 0;
`;

const LoginButton = styled.img`
  position: absolute;
  top: calc(6% + 40px);
  right: calc(67% + 20px);
  max-width: 50%;
  max-height: 50%;
  width: 150px;
  height: 150px;
  opacity: 0;
`;
function Main() {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/upload");
  };

  const handleButtonClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <FullScreenImage>
        <ImageContainer>
          <BackgroundImage src={mainBackground} alt="Main Background" />
          <IconContainer>
            <Icon
              src={diagnosisIcon}
              alt="Diagnosis Icon"
              onClick={handleIconClick}
            />
          </IconContainer>
          <LoginButton
            src={LoginbuttonImg}
            alt="Login Button"
            onClick={handleButtonClick}
          />
        </ImageContainer>
      </FullScreenImage>
    </div>
  );
}

export default Main;
