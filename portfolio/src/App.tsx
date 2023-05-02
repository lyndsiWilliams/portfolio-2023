// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styling
import "./App.css";
// Components
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Projects } from "./pages/Projects";
import ResumePage from "./pages/ResumePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
