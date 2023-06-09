import styled from "styled-components";
import { Link } from "react-router-dom";

export const SliderContainer = styled(Link)`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  cursor: grabbing;

  @media (min-width: 768px) {
  }
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #79965b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.direction === "right" && "5px"};
  left: ${(props) => props.direction === "left" && "5px"};
  margin: auto;
  cursor: grab;
  opacity: 0.5;
  z-index: 2;
`;

export const BannerWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -20}vw);
  align-items: center;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 150px;
  width: auto;

  justify-content: center;
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  height: 150px;
  border: none;
  border-radius: 20px;
  width: 250px;
  margin-right: 30px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: black;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20;
  color: black;
`;
export const Button = styled.button`
  background-color: #79965b;
  padding: 10px 30px;
  font-size: 18px;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;
