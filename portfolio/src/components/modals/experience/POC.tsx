import { FunctionComponent } from "react";
import electronicArts from "../../../images/electronicArts.png";
import SquareButtonModal from "../../SquareButtonModal";

const POC: FunctionComponent = () => (
  <SquareButtonModal
    buttonText="Quality Assurance Tester / Point of Contact"
    image={electronicArts}
    titleText={
      <>
        Electronic Arts (PRO Unlimited)
        <br />
        March 2011 - March 2012, July 2012 - June 2013
      </>
    }
    secondaryTitleText="Quality Assurance Tester - Baton Rouge LA"
    secondaryTitleTextAlign="center"
    experienceContent={
      <>
        <p>• Tested video games to ensure they met quality requirements and functionality standards</p>
        <p>• Documented detailed reproduction steps for issues discovered during testing</p>
        <p>• Participated in legal certification process for multiple major EA titles</p>
        <p>• Tracked tasks and time allocation in DevTest system</p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "1.5em",
            fontWeight: "bold",
            marginTop: "44px",
          }}
        >
          Point of Contact - Baton Rouge LA
        </p>
        <p>• Managed and mentored a team of 50 QA testers across night shift operations</p>
        <p>• Coordinated with development teams to ensure timely resolution of critical issues</p>
        <p>• Tracked team progress and bug metrics using Excel to optimize workflow efficiency</p>
        <p>• Reviewed and edited all bug reports from testers before submission to maintain quality standards</p>
      </>
    }
  />
);

export default POC;
