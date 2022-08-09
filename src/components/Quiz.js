import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
  return (
    <div className="quiz">
      <div className="score">
        Question {quizState.currentQuestionIndex + 1} /{" "}
        {quizState.questions.length}
      </div>
      <Question />
    </div>
  );
};

export default Quiz;
