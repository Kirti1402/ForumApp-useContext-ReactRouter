import { createContext, useState } from "react";

export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [answer, setAnswer] = useState();
  const settingAnAnswer = (ans) => {
    setAnswer(ans);
  };

  return (
    <AnswerContext.Provider value={{ answer, settingAnAnswer }}>
      {children}
    </AnswerContext.Provider>
  );
};
