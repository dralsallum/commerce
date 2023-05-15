import React from "react";
import {
  QuizContainer,
  QuizWrapper,
  QuizResults,
  QuizCongratulations,
  QuizResultsInfo,
  QuizScore,
  QuizNextButton,
  QuizMain,
} from "./Recommendation.elements";
import RecommendationQuestion from "./RecommendationQuestion";
import { QuizContext } from "../../contexts/exam";
import { useContext } from "react";

const RecommendationQuiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
  return (
    <QuizContainer>
      <QuizWrapper>
        {quizState.showResults ? (
          <QuizResults>
            <QuizCongratulations>Congratulations</QuizCongratulations>
            <QuizResultsInfo>
              <div>You have completed the quiz.</div>
              <div>
                You've got {quizState.correctAnswersCount} of &nbsp;
                {quizState.questions.length} right.
              </div>
            </QuizResultsInfo>
            <div
              onClick={() => dispatch({ type: "RESTART" })}
              className="next-button"
            >
              Restart
            </div>
          </QuizResults>
        ) : (
          <QuizMain>
            <QuizScore>
              Question {quizState.currentQuestionIndex + 1}/
              {quizState.questions.length}
            </QuizScore>
            <RecommendationQuestion />
            {quizState.currentAnswer && (
              <QuizNextButton
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                className="next-button"
              >
                Next question
              </QuizNextButton>
            )}
          </QuizMain>
        )}
      </QuizWrapper>
    </QuizContainer>
  );
};

export default RecommendationQuiz;
