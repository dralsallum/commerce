import React from "react";
import { QuizQuestion, QuizAnswers } from "./Recommendation.elements";
import RecommendationAnswer from "./RecommendationAnswer";
import { useContext } from "react";
import { QuizContext } from "../../contexts/exam";

const RecommendationQuestion = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <>
      <QuizQuestion>{currentQuestion.question}</QuizQuestion>
      <QuizAnswers>
        {quizState.answers.map((answer, index) => (
          <RecommendationAnswer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </QuizAnswers>
    </>
  );
};

export default RecommendationQuestion;
