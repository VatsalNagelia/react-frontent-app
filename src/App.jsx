import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProblemPage from "./pages/ProblemPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problemPage" element={<ProblemPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
