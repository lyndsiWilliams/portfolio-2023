import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// Styling
import "../styles/Projects.css";
import citrics from "../images/citrics.jpg";
import medCabinet from "../images/medCabinet.png";
import conway from "../images/conway.png";
import superset from "../images/superset.png";
import reactHooks from "../images/reactHooks.png";
import amythio from "../images/amythio.png";
import useReducerForm from "../images/useReducerForm.png";
// Componenets
import { Button } from "@mui/material";
import DividerTitle from "../components/DividerTitle";
import ProjectCard from "../components/ProjectCard";
import SupersetTechDebt2021 from "../components/modals/projects/SupersetTechDebt2021";
import SupersetVisualImprovements2021 from "../components/modals/projects/SupersetVisualImprovements2021";
import SupersetBugFixes2021 from "../components/modals/projects/SupersetBugFixes2021";
import SupersetFeatureWork2021 from "../components/modals/projects/SupersetFeatureWork2021";
import SupersetTechDebt2022 from "../components/modals/projects/SupersetTechDebt2022";
import SupersetVisualImprovements2022 from "../components/modals/projects/SupersetVisualImprovements2022";
import SupersetBugFixes2022 from "../components/modals/projects/SupersetBugFixes2022";
import SupersetFeatureWork2022 from "../components/modals/projects/SupersetFeatureWork2022";
import SupersetHackathon2022 from "../components/modals/projects/SupersetHackathon2022";
import SupersetTechDebt2023 from "../components/modals/projects/SupersetTechDebt2023";
import SupersetVisualImprovements2023 from "../components/modals/projects/SupersetVisualImprovements2023";
import SupersetBugFixes2023 from "../components/modals/projects/SupersetBugFixes2023";
import SupersetFeatureWork2023 from "../components/modals/projects/SupersetFeatureWork2023";

export const Projects: FunctionComponent = () => (
  <>
    {/* <a href="#2020">{"2020 | "}</a>
    <a href="#2021">{"2021 | "}</a>
    <a href="#2022">{"2022 | "}</a>
    <a href="#2023">{"2023"}</a> */}
    <div id="2023" />
    <DividerTitle title="2023" />
    <div className="card-container">
      <ProjectCard
        primaryLink="https://github.com/apache/superset/pulls?q=is%3Apr+sort%3Aupdated-desc+author%3AlyndsiWilliams+is%3Amerged"
        primaryLinkText="Check out my PRs on Github"
        image={superset}
        imageAlt="Apache Supserset logo"
        addImageBackground
        title="Apache Superset OSS contributions"
        secondaryTitle="ReactJS | TypeScript | Redux | Hooks | Emotion | Material UI | React
          Testing Library"
        description={
          <>
            <p>My open source contributions to Apache Superset in 2023.</p>
            <p>Click to see details and links to pull requests:</p>
            <SupersetFeatureWork2023 />
            <SupersetBugFixes2023 />
            <SupersetVisualImprovements2023 />
            <SupersetTechDebt2023 />
          </>
        }
      />
      <ProjectCard
        primaryLink="https://hackernoon.com/migrating-from-usestate-to-usereducer-in-react-hooks"
        primaryLinkText="Hackernoon"
        secondaryLink="https://dev.to/lyndsiwilliams/react-hooks-how-to-convert-usestate-to-usereducer-5f64"
        secondaryLinkText="dev.to"
        image={reactHooks}
        imageAlt="React symbol + fish hook"
        title="React hooks: How to convert useState to useReducer"
        secondaryTitle={
          <>
            • Tech blog on Hackernoon and dev.to •
            <br /># webdev # react # tutorial # programming
          </>
        }
        description={
          <p>
            A basic example of how to use the useReducer hook for state instead
            of the useState hook.
          </p>
        }
      />
      <ProjectCard
        primaryLink="https://usereducer-form.vercel.app/"
        secondaryLink="https://github.com/lyndsiWilliams/vite-example"
        image={useReducerForm}
        imageAlt="useReducer form"
        title="Vite/useReducer form state example"
        secondaryTitle="Vite | React | React Hooks | ReactJS | TypeScript | Emotion |
          Material UI | Vercel | Lodash"
        description={
          <>
            <p>
              My first app created with Vite. This project demonstrates
              manipulating state with the useReducer React hook.
            </p>
            <p>
              This form uses an action to change state independently by field.
              Alternatively, the data can be changed as a whole by manipulating
              the entire JSON directly.
            </p>
          </>
        }
      />
      <ProjectCard
        primaryLink="https://hackernoon.com/an-advanced-approach-to-migrating-from-usestate-to-usereducer"
        primaryLinkText="Hackernoon"
        secondaryLink="https://dev.to/lyndsiwilliams/react-hooks-an-advanced-look-at-converting-usestate-to-usereducer-2il6"
        secondaryLinkText="dev.to"
        image={reactHooks}
        imageAlt="React symbol + fish hook"
        title="React hooks: An advanced look at converting useState to useReducer"
        secondaryTitle={
          <>
            • Tech blog on Hackernoon and dev.to •
            <br /># webdev # react # tutorial # programming
          </>
        }
        description={
          <p>
            A more complex example of how to use the useReducer hook for state
            instead of the useState hook.
          </p>
        }
      />
    </div>
    <div id="2022" />
    <DividerTitle title="2022" />
    <div className="card-container">
      <ProjectCard
        primaryLink="https://github.com/apache/superset/pulls?q=is%3Apr+sort%3Aupdated-desc+author%3AlyndsiWilliams+is%3Amerged"
        primaryLinkText="Check out my PRs on Github"
        image={superset}
        imageAlt="Apache Supserset logo"
        addImageBackground
        title="Apache Superset OSS contributions"
        secondaryTitle="ReactJS | TypeScript | Redux | Hooks | Emotion | Material UI | React
          Testing Library"
        description={
          <>
            <p>My open source contributions to Apache Superset in 2022.</p>
            <p>Click to see details and links to pull requests:</p>
            <SupersetFeatureWork2022 />
            <SupersetBugFixes2022 />
            <SupersetVisualImprovements2022 />
            <SupersetTechDebt2022 />
            <SupersetHackathon2022 />
          </>
        }
      />
      <ProjectCard
        primaryLink="https://hackernoon.com/testing-apache-superset-migrating-from-enzyme-to-rtl-for-improved-testing"
        primaryLinkText="Hackernoon"
        secondaryLink="https://dev.to/lyndsiwilliams/superset-testing-and-enzyme-to-rtl-conversion-1j6a"
        secondaryLinkText="dev.to"
        image={superset}
        imageAlt="Apache Supserset logo"
        addImageBackground
        title="Apache Superset: Testing and Enzyme to RTL conversion"
        secondaryTitle={
          <>
            • Tech blog on Hackernoon and dev.to •
            <br /># testing # react # opensource # webdev
          </>
        }
        description={
          <p>
            Helpful tips for writing tests in Apache Superset with Jest and
            React Testing Library.
          </p>
        }
      />
    </div>
    <div id="2021" />
    <DividerTitle title="2021" />
    <div className="card-container">
      <ProjectCard
        primaryLink="https://github.com/apache/superset/pulls?q=is%3Apr+sort%3Aupdated-desc+author%3AlyndsiWilliams+is%3Amerged"
        primaryLinkText="Check out my PRs on Github"
        image={superset}
        imageAlt="Apache Supserset logo"
        addImageBackground
        title="Apache Superset OSS contributions"
        secondaryTitle="ReactJS | TypeScript | Redux | Hooks | Emotion | Material UI | React
          Testing Library"
        description={
          <>
            <p>My open source contributions to Apache Superset in 2021.</p>
            <p>Click to see details and links to pull requests:</p>
            <SupersetFeatureWork2021 />
            <SupersetBugFixes2021 />
            <SupersetVisualImprovements2021 />
            <SupersetTechDebt2021 />
            <Button
              data-testid="Hackathon2021"
              variant="contained"
              color="secondary"
              style={{
                borderWidth: "4px",
                borderRadius: "20px",
                border: "1px solid rgb(100, 100, 100)",
                boxShadow: "3px 3px rgba(0,0,0,.3)",
                marginBottom: "20px",
              }}
            >
              <Link
                to="https://github.com/apache/superset/pull/16626"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                • Hackathon - RTL cleanup •
              </Link>
            </Button>
          </>
        }
      />
      <ProjectCard
        primaryLink="https://amythio.vercel.app/"
        secondaryLink="https://github.com/lyndsiWilliams/amyth.io"
        image={amythio}
        imageAlt="amythio storybook page"
        title=".: Amyth.io :."
        secondaryTitle={
          <>
            • Component library •<br /> ReactJS | TypeScript | Emotion |
            Material UI | Cypress | Vercel | Storybook
          </>
        }
        description={
          <>
            <p>
              My first component library built with a fun space theme. I used
              this project to teach myself how to:
            </p>
            <p>• Animate a static image</p>
            <p>• Deploy to Storybook</p>
            <p>• Set up component testing in Cypress</p>
            <p>• Publish packages to NPM</p>
          </>
        }
      />
    </div>
    <div id="2020" />
    <DividerTitle title="2020" />
    <div className="card-container">
      <ProjectCard
        primaryLink="https://citrics.netlify.app/"
        secondaryLink="https://github.com/labs26-citrics/Labs26-Citrics-FE-TeamB"
        image={citrics}
        imageAlt="Citrics home page"
        title="Citrics"
        secondaryTitle="Labs project - ReactJS | Redux | Ant.Design"
        description={
          <>
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
              <Link
                to="https://whimsical.com/341zvP6EuiJdMGJt3neFJa"
                target="_blank"
                rel="noopener noreferrer"
              >
                flowchart
              </Link>{" "}
              and{" "}
              <Link
                to="https://whimsical.com/T5VcCfKv8TwyKzgjfUnAeE"
                target="_blank"
                rel="noopener noreferrer"
              >
                wireframe
              </Link>
            </p>
            <p>
              • Solely responsible for creating and styling the team's{" "}
              <Link
                to="https://citrics.netlify.app/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                About page
              </Link>
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
          </>
        }
      />
      <ProjectCard
        primaryLink="https://med-cabinet-3.now.sh/"
        secondaryLink="https://github.com/bw-med-cabinet-3/Front-End"
        image={medCabinet}
        imageAlt="Med Cabinet home page"
        title="Med Cabinet"
        secondaryTitle="React II developer - ReactJS | Redux"
        description={
          <>
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
          </>
        }
      />
      <ProjectCard
        primaryLink="https://lyndsis-game-of-life.now.sh/"
        secondaryLink="https://github.com/lyndsiWilliams/conways-game-of-life"
        image={conway}
        imageAlt="My version of Conway's Game of Life home page"
        title="Conway's Game of Life"
        secondaryTitle="Computer science project - ReactJS | CSS"
        description={
          <>
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
          </>
        }
      />
    </div>
  </>
);
