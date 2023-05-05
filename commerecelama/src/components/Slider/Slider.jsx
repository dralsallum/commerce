import React from "react";
import {
  SliderContainer,
  Arrow,
  BannerWrapper,
  ImgContainer,
  InfoContainer,
  Image,
  Desc,
  Title,
  Button,
  Slide,
} from "./Slider.elements";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Home from "../../assets/Home.webp";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <SliderContainer>
      <Arrow direction="left" onClick={handleClick("left")}>
        <FaArrowLeft />
      </Arrow>
      <BannerWrapper>
        <Slide>
          <ImgContainer>
            <Image src={Home} alt="" />
          </ImgContainer>
          <InfoContainer>
            <Title>اختار الفيتامينات المفضلة عندك</Title>
            <Desc>
              هنا بتحصل اهم الطرق للحفاظ على صحتك الشخصية والوصول لكامل
              امكانياتك الجسمانية
            </Desc>
            <Button>اضغط هنا</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={Home} alt="" />
          </ImgContainer>
          <InfoContainer>
            <Title>اختار الفيتامينات المفضلة عندك</Title>
            <Desc>
              هنا بتحصل اهم الطرق للحفاظ على صحتك الشخصية والوصول لكامل
              امكانياتك الجسمانية
            </Desc>
            <Button>اضغط هنا</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={Home} alt="" />
          </ImgContainer>
          <InfoContainer>
            <Title>اختار الفيتامينات المفضلة عندك</Title>
            <Desc>
              هنا بتحصل اهم الطرق للحفاظ على صحتك الشخصية والوصول لكامل
              امكانياتك الجسمانية
            </Desc>
            <Button>اضغط هنا</Button>
          </InfoContainer>
        </Slide>
      </BannerWrapper>
      <Arrow direction="right" onClick={handleClick("right")}>
        <FaArrowRight />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
