import React from "react";
import {
  ContainerRight,
  ContainerLeft,
  HeaderWrapper,
} from "./Header.elements";

const Header = ({ descriptionRight, descriptionLeft }) => {
  return (
    <HeaderWrapper>
      <ContainerRight>خطط العلاج الشخصية المعتمدة</ContainerRight>
      <ContainerLeft>
        العثور على ما يعمل يكون صعب. لهذا التسوق <br /> الإلكترونية من موقعنا مع
        خبرانا من الاطباء يسعدك ويغنيك عن البحث بزيادة
      </ContainerLeft>
    </HeaderWrapper>
  );
};

export default Header;
