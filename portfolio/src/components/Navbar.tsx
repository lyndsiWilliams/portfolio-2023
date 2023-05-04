// React
import { Link } from "react-router-dom";
// Styling
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="nav-bar" id="back-to-top-anchor">
        <Link to="/">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="title-card">
        <div className="artifacts" data-testid="artifacts">
          <Link
            to="https://www.linkedin.com/in/lyndsiwilliams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          |
          <Link
            to="https://github.com/lyndsiWilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          | <Link to="/resume">Resume</Link> |
          <Link
            to="mailto:lyndsikaywilliams@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
        </div>
        <h1>Lyndsi Kay Williams</h1>
        <h2>Frontend Software Engineer</h2>
      </div>
    </header>
  );
};
