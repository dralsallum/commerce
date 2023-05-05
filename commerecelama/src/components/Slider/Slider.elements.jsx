import styled from "styled-components";
import { Link } from "react-router-dom";

export const SliderContainer = styled(Link)`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  text-decoration: none;
  overflow: hidden;
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
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const BannerWrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vh);
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  direction: rtl;
  width: auto;
  height: 50vh;
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid;
  border-radius: 20px;
`;

export const Image = styled.img`
  height: 100%;
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
