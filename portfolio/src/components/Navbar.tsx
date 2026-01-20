// React
import { Link } from "react-router-dom";
// Styling
import "../styles/Navbar.css";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  border-width: 4px;
  border-radius: 15px;
  border: 1px solid rgb(100, 100, 100);
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(
    to right,
    #cba0f1,
    #ddd7ff,
    #ddd7ff,
    #ddd7ff,
    #cba0f1
  );
  font-weight: bold;
  padding: 12px;
  margin-bottom: 28px;
`;

export const Navbar = () => (
  <header>
    <nav className="nav-bar" id="back-to-top-anchor" aria-label="Main navigation">
      <Link to="/">About Me</Link>
      <Link to="/projects">Projects</Link>
    </nav>
    <div className="title-card">
      <div className="artifacts" data-testid="artifacts" aria-label="Social links">
        <a
          href="https://www.linkedin.com/in/lyndsiwilliams/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/lyndsiWilliams"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          GitHub
        </a>{" "}
        | <Link to="/resume">Resume</Link> |{" "}
        <a
          href="mailto:lyndsikaywilliams@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </div>
      <h1>Lyndsi Kay Williams</h1>
      <h2>Frontend Software Engineer</h2>
      <StyledButton>
        <a
          href="https://calendly.com/lyndsiwilliams/chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a quick chat
        </a>
      </StyledButton>
    </div>
  </header>
);
