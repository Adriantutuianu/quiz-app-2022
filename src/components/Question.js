import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "../components/Answer";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer key={index} answerText={answer} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Question;
