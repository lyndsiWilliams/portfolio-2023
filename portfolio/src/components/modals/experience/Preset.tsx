import { FunctionComponent } from "react";
import preset from "../../../images/preset.png";
import SquareButtonModal from "../../SquareButtonModal";

const Preset: FunctionComponent = () => (
  <SquareButtonModal
    buttonText="Full Stack Software Engineer"
    image={preset}
    imageNeedsSomeHeight
    titleText={
      <>
        Preset
        <br />
        March 2021 - February 2023
      </>
    }
    secondaryTitleText="Full Stack Software Engineer - Remote"
    secondaryTitleTextAlign="center"
    experienceContent={
      <>
        <p>
          • Built and maintained features for a SaaS platform managing Apache 
          Superset instances for enterprise customers
        </p>
        <p>
          • Collaborated with cross-functional teams (frontend, backend, QA, design) 
          using Scrum/Agile methodology
        </p>
        <p>
          • Architected feature work by breaking down requirements into tickets and 
          creating technical diagrams
        </p>
        <p>
          • Created dynamic functional components to improve user experience 
          throughout the product
        </p>
        <p>
          • Co-led the Community Partners program, mentoring new contributors 
          through their first open source contributions
        </p>
        <p>• Drove TypeScript migration and test modernization efforts across the codebase</p>
      </>
    }
  />
);

export default Preset;
