// Package imports
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
// Components
import Preset from "../components/modals/experience/Preset";
import TeamLead from "../components/modals/experience/TeamLead";
import POC from "../components/modals/experience/POC";
import Superset from "../components/modals/experience/Superset";
// Styling
import "../styles/Home.css";
import me from "../images/me.png";
import lambdaBadge from "../images/lambdaBadge.png";
import DividerTitle from "../components/DividerTitle";

const Home: FunctionComponent = () => (
  <div className="card-wrapper">
    <section className="intro-card">
      <img
        src={me}
        alt="Lyndsi Kay Williams"
        className="home-pic"
        style={{
          backgroundImage: "linear-gradient(to left, black, #ddd7ff, #ddd7ff)",
        }}
      />
      <div className="text-wrapper">
        <section className="intro-text" style={{ marginBottom: "48px" }}>
          <p>
            I am a detail-oriented frontend software engineer with a passion for
            creating user-friendly and visually appealing websites and
            applications. With over 2 years of experience in the industry, I
            have a broad understanding of web development technologies,
            including HTML, CSS, functional styling, JavaScript, TypeScript,
            Next.js, React, and React Native.
          </p>
          <p>
            I am dedicated to writing clean, maintainable code and am always on
            the lookout for ways to improve the user experience. I am a strong
            communicator and a team player, I am always willing to go the extra
            mile to ensure that the end product meets the client's needs.
          </p>
        </section>
        <section className="skills" style={{ marginBottom: "48px" }}>
          <DividerTitle title="Skills" center hSize="h4" />
          <h4>Front end</h4>
          <p>
            React, React Native, Next.js, Vite, Redux, React Context, React
            Testing Library, Jest, Cypress, Javascript, Typescript, HTML, CSS,
            LESS/SASS, Emotion, Tailwind CSS
          </p>
          <h4>Back end</h4>
          <p>Python, NodeJS, Express, SQL</p>
          <h4>Other relative skills</h4>
          <p>RESTful API, GraphQL, Deployment, Git, Agile/Scrum Methodology</p>
        </section>
        <section className="experience">
          <DividerTitle title="Experience" center hSize="h4" />
          <p
            style={{
              textAlign: "center",
              color: "#701dd6",
              fontSize: "1.5em",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "bold",
            }}
          >
            Click each job for details!
          </p>
          <div
            className="experience-btns"
            data-testid="experience-btns"
            style={{
              marginBottom: "48px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Superset />
            <Preset />
            <TeamLead />
            <POC />
          </div>
        </section>
        <section className="education" data-testid="education">
          <DividerTitle title="Education" center hSize="h4" />
          <h4>
            Bloom Institute of Technology (formerly Lambda School), Remote
            <br />
            September 2019 - September 2020
          </h4>
          <p>Full Stack Web Development & Computer Science</p>
          <p>
            Bloom Institute of Technology (formerly Lambda School) is a 9+ month
            accelerated program with an immersive (full-time, 40+ hours/week)
            hands-on curriculum with a focus on computer science, software
            engineering, and web development.
          </p>
          <div className="lambda-btn" style={{ marginBottom: "40px" }}>
            <img
              src={lambdaBadge}
              alt="Full-Stack Web Development + Technical Interviewing Bloom Institute of Technology (formerly Lambda School) badge"
              className="badge-pic"
            />
            <p>
              Check out my verified Full-Stack Web Development + Technical
              Interviewing badge issued by Bloom Institute of Technology
              (formerly Lambda School):
            </p>
            <Button
              variant="contained"
              color="secondary"
              style={{
                borderRadius: "20px",
                border: "1px solid rgb(100, 100, 100)",
                boxShadow: "3px 3px rgba(0,0,0,.3)",
              }}
              href="https://www.youracclaim.com/badges/f20e1df7-2a07-477e-887f-06ef174c9887/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              • Verified by BloomTech •
            </Button>
          </div>
          <h4>
            Baton Rouge Community College, Baton Rouge LA
            <br />
            2011-2012
          </h4>
          <p>
            Associate of Applied Science, Entertainment Technology - Game Design
          </p>
          <h4>
            Pensacola Junior College, Pensacola FL
            <br />
            2008-2010
          </h4>
          <p>Associate of Arts - AA, Computer Science</p>
        </section>
      </div>
    </section>
  </div>
);

export default Home;
