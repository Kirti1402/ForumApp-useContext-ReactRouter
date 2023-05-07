import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <p>Welcome John</p>
      <nav>
        <NavLink
          style={{
            border: "none",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#F6F1F1",
            textDecoration: "none",
            color: "black"
          }}
          to="/QuestionsList"
        >
          Show All Question List
        </NavLink>
      </nav>
    </>
  );
};
