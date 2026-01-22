import { FunctionComponent } from "react";
import formerlyLambda from "../../../images/formerlyLambda.png";
import SquareButtonModal from "../../SquareButtonModal";

const TeamLead: FunctionComponent = () => (
  <SquareButtonModal
    buttonText="Team Lead"
    image={formerlyLambda}
    imageNeedsSomeHeight
    titleText={
      <>
        Bloom Institute of Technology (formerly Lambda School)
        <br />
        March 2020 - June 2020
      </>
    }
    secondaryTitleText="Team Lead - Remote"
    secondaryTitleTextAlign="center"
    experienceContent={
      <>
        <p>• Mentored a team of 7-9 students in an Agile environment that emulated real-world workflows</p>
        <p>• Delivered weekly 1:1 feedback and code reviews</p>
        <p>• Facilitated daily standup meetings to build camaraderie and provide guidance</p>
      </>
    }
  />
);

export default TeamLead;
