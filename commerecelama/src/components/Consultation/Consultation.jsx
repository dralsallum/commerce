import React from "react";
import {
  ConsultationButton,
  ConsultationContainer,
  ConsultationGrey,
  ConsultationText,
  ImgConsultationContainer,
  ImgConsultationRight,
  ImgConsultationLeft,
  ImgConsultationRightImg,
  ImgConsultationLeftImg,
  ConsultationMain,
} from "./Consultation.elements";
import Consutation1 from "../../assets/Consultation1.png";
import Consutation2 from "../../assets/Consultation2.png";
import Consutation3 from "../../assets/Consultation3.png";

const Consultation = () => {
  return (
    <ConsultationMain>
      <ConsultationContainer>
        <ConsultationText>
          نجعل من الاستشارات الطبية
          <ConsultationGrey> تجربة مختلفة</ConsultationGrey>
        </ConsultationText>
        <ConsultationButton>استشر الان</ConsultationButton>
      </ConsultationContainer>
      <ImgConsultationContainer>
        <ImgConsultationRight>
          <ImgConsultationRightImg src={Consutation1} alt="" />
        </ImgConsultationRight>
        <ImgConsultationLeft>
          <ImgConsultationLeftImg src={Consutation2} alt="" />
          <ImgConsultationLeftImg src={Consutation3} alt="" />
        </ImgConsultationLeft>
      </ImgConsultationContainer>
    </ConsultationMain>
  );
};

export default Consultation;
