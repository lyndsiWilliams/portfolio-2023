import { FunctionComponent } from "react";
import superset from "../../../images/superset.png";
import SquareButtonModal from "../../SquareButtonModal";

const Superset: FunctionComponent = () => (
  <SquareButtonModal
    buttonText="Apache Superset Committer"
    image={superset}
    titleText={
      <>
        The Apache Software Foundation
        <br />
        October 2021 - Present
      </>
    }
    secondaryTitleText="Apache Superset Committer - Remote"
    secondaryTitleTextAlign="center"
    experienceContent={
      <>
        <p>
          • Maintain and contribute to a widely-used open source data visualization platform 
          as a trusted committer
        </p>
        <p>• Review community pull requests and ensure contributions meet project code standards</p>
        <p>
          • Lead tech debt initiatives including TypeScript migration and test modernization 
          (Enzyme to React Testing Library)
        </p>
        <p>
          • Improve frontend component test coverage and maintain ongoing async warning removal 
          initiative
        </p>
      </>
    }
  />
);

export default Superset;
