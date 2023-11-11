import { FunctionComponent } from "react";
import preset from "../../../images/preset.png";
import SquareButtonModal from "../../SquareButtonModal";

const Preset: FunctionComponent = () => (
  <SquareButtonModal
    topButtonText="Full Stack Software Engineer"
    image={preset}
    imageNeedsSomeHeight
    bottomButtonText="Preset"
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
          • Worked with a team of frontend and backend developers, QA, and
          design using Scrum/Agile methodology
        </p>
        <p>
          • Planned out feature work by breaking it down into tickets and
          building architectural diagrams
        </p>
        <p>• Implemented feature work with clean, maintainable code</p>
        <p>
          • Reviewed code in pull requests to ensure everything stayed within
          the project's code styles
        </p>
        <p>
          • Created dynamic functional components to be used throughout the
          product
        </p>
        <p>
          • Removed tech debt by cleaning up errors/warnings in the code,
          converting JavaScript files to TypeScript, and converting Enzyme test
          files to React Testing Library
        </p>
        <p>• Improved and maintained frontend component tests</p>
        <p>
          • Upkept an ongoing initiative to remove async warnings from the test
          suite
        </p>
        <p>
          • Co-lead the Community Partners program - we helped new open-sourcers
          learn to contribute to open source projects by assisting with their
          first Superset contributions
        </p>
      </>
    }
  />
);

export default Preset;
