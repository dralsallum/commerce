import styled from "styled-components";
import { Link } from "react-router-dom";

export const SliderContainer = styled(Link)`
  width: 100%;
  height: 30vh;
  display: flex;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const BannerWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -10}vw);
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 20vh;
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  border: none;
  border-radius: 20px;
  width: 25vh;
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

export const WhoText = styled.h1`
  font-size: 30px;
  direction: rtl;
  padding-right: 90px;
`;
export const WhoGrey = styled.span`
  color: grey;
`;
