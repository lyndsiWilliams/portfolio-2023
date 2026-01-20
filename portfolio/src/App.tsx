// React
import { FunctionComponent, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styling
import "./App.css";
// Components
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const App: FunctionComponent = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Suspense fallback={<div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
    </Router>
  </div>
);

export default App;
