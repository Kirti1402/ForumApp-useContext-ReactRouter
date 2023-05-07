import { createContext, useState } from "react";
export const QuestionContext = createContext();

export const QuestionListProvider = ({ children }) => {
  const [ques, setQues] = useState([]);
  const settingQues = (item) => {
    setQues(() => item);
  };
  return (
    <QuestionContext.Provider
      value={{
        ques,
        settingQues
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
