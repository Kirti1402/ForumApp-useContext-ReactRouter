import { AnswerContext } from "./context/AnswerContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Answer = () => {
  const { answer } = useContext(AnswerContext);

  return (
    <div>
      <Link
        style={{
          border: "none",
          padding: "5px",
          borderRadius: "5px",
          textDecoration: "none",
          color: "black"
        }}
        to="/QuestionsList"
      >
        <span>🔙</span>
      </Link>
      <h4>Answer:</h4>
      <p>{answer}</p>
    </div>
  );
};
