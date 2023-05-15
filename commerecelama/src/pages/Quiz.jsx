import React from "react";
import { Navbar, Recommendation } from "../components";
import { QuizProvider } from "../contexts/exam";

const Quiz = () => {
  return (
    <div>
      <Navbar />
      <QuizProvider>
        <Recommendation />
      </QuizProvider>
    </div>
  );
};

export default Quiz;
