import React from "react";
import {
  SliderContainer,
  Arrow,
  BannerWrapper,
  ImgContainer,
  InfoContainer,
  Image,
} from "./Slider.elements";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Home from "../../assets/Home.webp";

const Slider = () => {
  return (
    <SliderContainer>
      <Arrow direction="left">
        <FaArrowLeft />
      </Arrow>
      <BannerWrapper>
        <ImgContainer>
          <Image src={Home} alt="" />
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </BannerWrapper>
      <Arrow direction="right">
        <FaArrowRight />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
