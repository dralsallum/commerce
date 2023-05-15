import styled from "styled-components";

export const ConsultationMain = styled.div`
  height: 700px;
  margin-bottom: 50px;
`;

export const ConsultationContainer = styled.div`
  padding-right: 90px;
  padding-left: 90px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  direction: rtl;
  align-items: center;
`;

export const ConsultationText = styled.h2`
  color: #000000;
  font-size: 26px;
`;

export const ConsultationGrey = styled.span`
  color: grey;
`;

export const ConsultationButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: grey;
  }
`;

export const ImgConsultationContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-bottom: 200px;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ImgConsultationRight = styled.div`
  display: flex;
  max-height: 600px;
`;

export const ImgConsultationRightImg = styled.img`
  max-height: 600px;
  border-radius: 8px;
`;

export const ImgConsultationLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  gap: 0.5em;
`;

export const ImgConsultationLeftImg = styled.img`
  max-height: 300px;
  border-radius: 8px;
`;
