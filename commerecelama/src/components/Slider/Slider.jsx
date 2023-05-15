import React, { useState } from "react"; // Add useRef import
import {
  SliderContainer,
  Arrow,
  BannerWrapper,
  ImgContainer,
  Image,
  Slide,
} from "./Slider.elements";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import skin from "../../assets/skin.png";
import spray from "../../assets/spray.png";
import bottle from "../../assets/bottle.png";
import pills from "../../assets/pills.png";
import envelop from "../../assets/envelop.png";
import browse from "../../assets/browse.png";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 6;

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => {
        return prevIndex === 0 ? prevIndex : prevIndex - 1;
      });
    } else {
      setSlideIndex((prevIndex) => {
        return prevIndex === totalSlides - 1 ? prevIndex : prevIndex + 1;
      });
    }
  };

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <FaArrowLeft />
      </Arrow>
      <BannerWrapper slideIndex={slideIndex}>
        <Slide>
          <ImgContainer>
            <Image src={pills} alt="" />
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={skin} alt="" />
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={spray} alt="" />
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={bottle} alt="" />
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={envelop} alt="" />
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={browse} alt="" />
          </ImgContainer>
        </Slide>
      </BannerWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <FaArrowRight />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
