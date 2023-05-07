import { fakeFetch } from "./fakeFetch";
import { QuestionContext } from "./context/QuestionListContext";
import { AnswerContext } from "./context/AnswerContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const QuestionList = () => {
  const { ques, settingQues } = useContext(QuestionContext);
  const { settingAnAnswer } = useContext(AnswerContext);
  const [loading, setLoading] = useState(true);
  const fakeData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/questions");
      console.log("response", response.data.questions);
      settingQues(response.data.questions);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fakeData();
  }, []);
  console.log("ques", ques);
  return (
    <div style={{ margin: "20px" }}>
      <Link
        style={{
          margin: "20px",
          border: "none",
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: "#F6F1F1",
          textDecoration: "none",
          color: "black"
        }}
        to="/"
      >
        Go To Home
      </Link>
      {loading && <p>Loading Question</p>}
      {loading === false &&
        ques.map(({ question, answer }) => (
          <>
            <h3>{question}</h3>
            <button
              style={{
                border: "none",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#A4D0A4"
              }}
            >
              UpVote
            </button>
            <button
              style={{
                margin: "5px",
                border: "none",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#F99B7D"
              }}
            >
              DownVote
            </button>

            <Link
              style={{
                border: "none",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#F6F1F1",
                textDecoration: "none",
                color: "black"
              }}
              to="/answer"
              onClick={() => settingAnAnswer(answer)}
            >
              Answer
            </Link>
          </>
        ))}
    </div>
  );
};
