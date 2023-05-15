import React, { useState, useEffect } from "react"; // Add useRef import
import {
  SliderContainer,
  BannerWrapper,
  ImgContainer,
  Image,
  Slide,
  WhoText,
  WhoGrey,
} from "./Who.elements";
import whopage from "../../assets/package.png";
import Make from "../../assets/whopage.png";
import GlobalStyle from "../../globalStyles";

const Who = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 5;

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => {
        return prevIndex === 0 ? totalSlides - 1 : prevIndex - 1;
      });
    } else {
      setSlideIndex((prevIndex) => {
        return prevIndex === totalSlides - 1 ? 0 : prevIndex + 1;
      });
    }
  };

  useEffect(() => {
    const id = setTimeout(() => handleClick("right"), 2000); // Add auto-slide every 3 seconds
    return () => clearTimeout(id); // Clean up timer
  }, [slideIndex]);

  return (
    <>
      <WhoText>
        الصحة النفسية <WhoGrey>بمنتجات صنعت خصيصاً لك</WhoGrey>
      </WhoText>
      <SliderContainer>
        <BannerWrapper slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <Image src={whopage} alt="" />
            </ImgContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={Make} alt="" />
            </ImgContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={whopage} alt="" />
            </ImgContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={Make} alt="" />
            </ImgContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={whopage} alt="" />
            </ImgContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={Make} alt="" />
            </ImgContainer>
          </Slide>
        </BannerWrapper>
      </SliderContainer>
    </>
  );
};

export default Who;
