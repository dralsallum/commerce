import styled from "styled-components";
import { Link } from "react-router-dom";

export const SliderContainer = styled(Link)`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
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
`;

export const BannerWrapper = styled.div`
  height: 100%;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1``;
export const Desc = styled.p``;
export const Button = styled.button``;
