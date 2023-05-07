import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QuestionListProvider } from "./context/QuestionListContext";
import { AnswerProvider } from "./context/AnswerContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <QuestionListProvider>
        <AnswerProvider>
          <App />
        </AnswerProvider>
      </QuestionListProvider>
    </Router>
  </StrictMode>
);
