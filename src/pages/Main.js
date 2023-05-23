import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import mainBackground from "./main_background.png";
import diagnosisIcon from "./diagnosis.png";

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
  top: 190px;
  right: 640px; /* 수정된 값 */
`;

const Icon = styled.img`
  width: 200px;
  height: 220px;
  cursor: pointer;
  opacity: 0;
`;

function Main() {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/upload");
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
        </ImageContainer>
      </FullScreenImage>
    </div>
  );
}

export default Main;
