import React from "react";
import {
  QuizAnswer,
  QuizAnswerLetters,
  QuizAnswerText,
} from "./Recommendation.elements";

const RecommendationAnswer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  return (
    <QuizAnswer
      className={`${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <QuizAnswerLetters>{letterMapping[index]}</QuizAnswerLetters>
      <QuizAnswerText>{answerText}</QuizAnswerText>
    </QuizAnswer>
  );
};

export default RecommendationAnswer;
