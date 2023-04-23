import { useState } from "react";
const problems1 = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "202. Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptanceRate: "42%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];
const problems2 = [
  {
    title: "Title1",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "Title2",
    difficulty: "Medium",
    acceptanceRate: "65%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];

function App() {
  const [problems, setProblems] = useState([]);

  return (
    <div>
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="password"></input>
      <button>Sign In</button>
      <div>
        <button id="page1" onClick={() => {
          setProblems(problems => problems1)
        }}>Page 1</button>
        <button id="page2" onClick={() => {
          setProblems(problems => problems2)
        }}>Page 2</button>
      </div>
      <div>
        {problems.map(problem => <ProblemStatement
          title={problem.title}
          difficulty={problem.difficulty}
          acceptanceRate={problem.acceptanceRate}
        />)}
      </div>
    </div >
  )
}

function ProblemStatement(props) {
  const title = props.title;
  const difficulty = props.difficulty;
  const acceptanceRate = props.acceptanceRate;


  return (
    <tr>
      <td>{title}</td>
      <td style={{ color: difficulty === "Medium" ? "yellow" : "red" }}>
        {difficulty}
      </td>
      <td>
        {acceptanceRate}
      </td>
    </tr>)
}

export default App
