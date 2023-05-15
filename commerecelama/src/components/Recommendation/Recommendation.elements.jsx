import styled from "styled-components";

export const QuizContainer = styled.div`
  background-color: #f9f9f9;
  box-sizing: border-box;
`;

export const QuizWrapper = styled.div`
  width: 975px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const QuizQuestion = styled.div`
  color: #0000000;
  padding: 10;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const QuizResults = styled.div`
  height: 300px;
  text-align: center;
`;

export const QuizCongratulations = styled.div`
  padding: 20px;
  font-size: 36px;
  color: #0000000;
`;

export const QuizResultsInfo = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  font-size: 18px;
`;

export const QuizAnswer = styled.div`
  width: 100%;
  background: #0084da;
  border: 1px solid #0084da;
  border-radius: 3px;
  min-height: 50px;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #1ea55b;
  }
`;

export const QuizAnswers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

export const QuizAnswerLetters = styled.div`
  font-size: 30px;
  background-color: #0084da;
  color: #fff;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  .correct-answer & {
    background-color: green;
  }

  .wrong-answer & {
    background-color: red;
  }
`;

export const QuizAnswerText = styled.div`
  font-size: 18px;
  padding: 15px;
  color: #000;
  flex: 1;
  background: #ffffff;

  &:hover {
    background-color: grey;
  }

  .correct-answer & {
    background-color: green;
  }

  .wrong-answer & {
    background-color: red;
  }
`;

export const QuizCorrectAnswer = styled.div`
  border: 2px solid #1ea55b;
  border-radius: 5px;
  background-color: #000000;
`;

export const QuizWrongAnswer = styled.div`
  border: 2px solid #1ea55b;
  border-radius: 5px;
  background-color: #000000;
`;

export const QuizNextButton = styled.button`
  // ... existing styles
  border: none;
  padding: 5px;
  background-color: #0084da;
  border-radius: 4px;
  display: inline-block;
  transition: background-color 0.3s;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: grey;
  }
`;

export const QuizScore = styled.div`
  background: #f8f8f8;
  color: 000;
  font-size: 18px;
  width: 200px;
  margin: 0 auto;
  font-weight: 600;
  height: 40px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuizDisabledAnswer = styled.div`
  pointer-events: none;
`;
export const QuizMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const QuizSelectedCorrectAnswer = styled.div`
  background-color: #1ea55b;
`;
