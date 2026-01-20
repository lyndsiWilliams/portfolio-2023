// React
import { FunctionComponent, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styling
import "./App.css";
// Components
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App: FunctionComponent = () => (
  <div className="App">
    <Router>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>}>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
      </ErrorBoundary>
      <ScrollToTop />
    </Router>
  </div>
);

export default App;
