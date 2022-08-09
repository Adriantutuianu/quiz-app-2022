import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
  return (
    <div>
      <div className="score">
        Question {quizState.currentQuestionIndex + 1} /{" "}
        {quizState.questions.length}
      </div>
    </div>
  );
};

export default Quiz;
