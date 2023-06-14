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
      <StyledButton>
        <Link
          to="https://calendly.com/lyndsiwilliams/chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a quick chat
        </Link>
      </StyledButton>
    </div>
  </header>
);
