// Styling
import "../styles/Projects.css";
import citrics from "../images/citrics.jpg";
import medCabinet from "../images/medCabinet.png";
import conway from "../images/conway.png";
import superset from "../images/superset.png";
import reactHooks from "../images/reactHooks.png";

export const Projects = () => {
  return (
    <>
      <h1>- Blogs -</h1>
      <div className="card-container">
        <div className="project-card">
          <div className="link-btns">
            <a
              href="https://dev.to/lyndsiwilliams/react-hooks-how-to-convert-usestate-to-usereducer-5f64"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            >
              Check it out!
            </a>
          </div>
          <a
            href="https://dev.to/lyndsiwilliams/react-hooks-how-to-convert-usestate-to-usereducer-5f64"
            target="_blank"
            rel="noopener noreferrer"
            className="project-img"
          >
            <img
              src={reactHooks}
              alt="Apache Supserset logo"
              className="project-img"
            />
          </a>
          <h3>React hooks: How to convert useState to useReducer</h3>
          <h4 style={{ textAlign: "center" }}>
            # webdev # react # tutorial # programming
          </h4>
          <div className="description">
            <p>
              A basic example of how to use the useReducer hook for state
              instead of the useState hook.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="link-btns">
            <a
              href="https://dev.to/lyndsiwilliams/superset-testing-and-enzyme-to-rtl-conversion-1j6a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            >
              Check it out!
            </a>
          </div>
          <a
            href="https://dev.to/lyndsiwilliams/superset-testing-and-enzyme-to-rtl-conversion-1j6a"
            target="_blank"
            rel="noopener noreferrer"
            className="project-img"
          >
            <img
              src={superset}
              alt="Apache Supserset logo"
              className="project-img"
              style={{ backgroundColor: "white", opacity: ".9" }}
            />
          </a>
          <h3>Apache Superset: Testing and Enzyme to RTL conversion</h3>
          <h4 style={{ textAlign: "center" }}>
            # testing # react # opensource # webdev
          </h4>
          <div className="description">
            <p>
              Helpful tips for writing tests in Apache Superset with Jest and
              React Testing Library.
            </p>
          </div>
        </div>
      </div>
      <h1>- Projects -</h1>
      <h1>- 2020 -</h1>
      <div className="card-container">
        <div className="project-card">
          <div className="link-btns">
            <a
              href="https://citrics.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderTopLeftRadius: "20px" }}
            >
              Deployment
            </a>
            <a
              href="https://github.com/labs26-citrics/Labs26-Citrics-FE-TeamB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderTopRightRadius: "20px" }}
            >
              Github
            </a>
          </div>
          <a
            href="https://citrics.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-img"
          >
            <img
              src={citrics}
              alt="Citrics home page"
              className="project-img"
            />
          </a>
          <h3>Citrics</h3>
          <h4 style={{ textAlign: "center" }}>
            Labs project - ReactJS | Redux | Ant.Design
          </h4>
          <div className="description">
            <p>
              An app designed to help users research and compare cities while
              searching for a new home.
            </p>
            <p>
              • Collaborated with 4 web and 2 data science team members during
              an 8-week simulated work environment
            </p>
            <p>
              • Constructed and maintained the team{" "}
              <a
                href="https://whimsical.com/341zvP6EuiJdMGJt3neFJa"
                target="_blank"
                rel="noopener noreferrer"
              >
                flowchart
              </a>{" "}
              and{" "}
              <a
                href="https://whimsical.com/T5VcCfKv8TwyKzgjfUnAeE"
                target="_blank"
                rel="noopener noreferrer"
              >
                wireframe
              </a>
            </p>
            <p>
              • Solely responsible for creating and styling the team's{" "}
              <a
                href="https://citrics.netlify.app/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                About page
              </a>
            </p>
            <p>
              • Utilized the Redux state management system to manage data on the
              front end
            </p>
            <p>
              • Communicated with our team project lead in order to touch base
              with our stakeholder, implementing any changes to properly
              implement his product vision
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="link-btns">
            <a
              href="https://med-cabinet-3.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderTopLeftRadius: "20px" }}
            >
              Deployment
            </a>
            <a
              href="https://github.com/bw-med-cabinet-3/Front-End"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderTopRightRadius: "20px" }}
            >
              Github
            </a>
          </div>
          <a
            href="https://med-cabinet-3.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-img"
          >
            <img
              src={medCabinet}
              alt="Med Cabinet home page"
              className="project-img"
            />
          </a>
          <h3>Med Cabinet</h3>
          <h4 style={{ textAlign: "center" }}>
            React II developer - ReactJS | Redux
          </h4>
          <div className="description">
            <p>
              An app designed to help users find the best medical marijuana
              strain for their needs.
            </p>
            <p>
              • Collaborated with 3 web and 3 data science team members during a
              4-day sprint
            </p>
            <p>
              • Solely responsible for incorporating Redux as a state management
              system
            </p>
            <p>• Created client-side authentication</p>
          </div>
        </div>
        <div className="project-card">
          <div className="link-btns">
            <a
              href="https://lyndsis-game-of-life.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderTopLeftRadius: "20px" }}
            >
              Deployment
            </a>
            <a
              href="https://github.com/lyndsiWilliams/conways-game-of-life"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderTopRightRadius: "20px" }}
            >
              Github
            </a>
          </div>
          <a
            href="https://lyndsis-game-of-life.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-img"
          >
            <img
              src={conway}
              alt="My version of Conway's Game of Life home page"
              className="project-img"
            />
          </a>
          <h3>Conway's Game of Life</h3>
          <h4 style={{ textAlign: "center" }}>
            Computer science project - ReactJS | CSS
          </h4>
          <div className="description">
            <p>
              An app to display a deceptively simple simulation of an
              environment where simple rules produce great complexity over time.
            </p>
            <p>• Created a graph and styled the display purely with CSS</p>
            <p>
              • Applied Conway's rules for the Game of Life to each cell in the
              graph
            </p>
            <p>
              • Implemented extra functionality: User can make the cell sizes
              smaller or larger, and user can populate the graph with a random
              assortment of living cells.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
