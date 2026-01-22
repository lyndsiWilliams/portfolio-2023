import { FunctionComponent } from "react";
import nbcUniversal from "../../../images/nbcUniversal.jpeg";
import SquareButtonModal from "../../SquareButtonModal";

const NBCUniversal: FunctionComponent = () => (
  <SquareButtonModal
    buttonText="Frontend Engineer"
    image={nbcUniversal}
    imageNeedsSomeHeight
    titleText={
      <>
        NBCUniversal (Fincons)
        <br />
        August 2023 - July 2024
      </>
    }
    secondaryTitleText="Lead Superset Engineer / Frontend Software Engineer - Remote"
    secondaryTitleTextAlign="center"
    experienceContent={
      <>
        <p>
          • Led a team of frontend developers in creating a custom version of Apache 
          Superset as an interim solution during the development of a new telemetry tool
        </p>
        <p>
          • Developed a custom Video Experience telemetry tool, achieving a 75% 
          cost reduction compared to the previous solution
        </p>
        <p>
          • Planned and designed custom Apache Superset features in Figma to meet 
          over 200 stakeholder requirements
        </p>
        <p>
          • Managed stakeholder expectations and timelines for feature development
        </p>
        <p>
          • Authored comprehensive documentation for using the custom version of Apache Superset
        </p>
        <p>
          • Developed and enforced a testing plan to ensure production safety during new deployments
        </p>
      </>
    }
  />
);

export default NBCUniversal;
