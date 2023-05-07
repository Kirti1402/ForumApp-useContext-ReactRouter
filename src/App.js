import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { QuestionList } from "./questionList";
import { Answer } from "./Answer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuestionsList" element={<QuestionList />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </div>
  );
}
