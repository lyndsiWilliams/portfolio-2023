import { FunctionComponent } from "react";
import electronicArts from "../../../images/electronicArts.png";
import SquareButtonModal from "../../SquareButtonModal";

const POC: FunctionComponent = () => (
  <SquareButtonModal
    topButtonText="Quality Assurance Tester / Point of Contact"
    image={electronicArts}
    bottomButtonText="Electronic Arts (PRO Unlimited)"
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
        <p>• Tested video games to ensure that they met certain requirements</p>
        <p>
          • Found any bugs and reported them in a professional and
          well-explained manner
        </p>
        <p>
          • Accurately filled out tasks and time spent on those tasks in DevTest
        </p>
        <p>
          • Participated in the legal certification of multiple major Electronic
          Arts titles
        </p>
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
        <p>
          • Communicated with developers to ensure issues were fixed in a timely
          manner
        </p>
        <p>• Held attendance and managed scheduling for a team of 50</p>
        <p>
          • Distributed various reports dealing with issues and stability of the
          product being tested
        </p>
        <p>
          • Distributed tasks and managed all testers during the night shift
        </p>
        <p>
          • Handled the Quality Assurance side of regressions during the night
          shift
        </p>
        <p>
          • Was the main point of contact during night shift for the developers
          on project SSX
        </p>
        <p>• Tracked the night shift testers' bug count and their progress</p>
        <p>
          • Helped all testers with any questions they had to the best of my
          abilities
        </p>
        <p>
          • Used problem-solving skills to help the improvement of testers who
          were not doing as well as others
        </p>
        <p>• Trained all new night shift testers</p>
        <p>• Held pod meetings to encourage efficiency and communication</p>
        <p>
          • Looked over and edited all bugs written by testers before they were
          submitted
        </p>
        <p>• Created and kept up with Excel documents</p>
        <p>
          • Handled conflicts between testers that did not need to be extended
          to Human Resources
        </p>
      </>
    }
  />
);

export default POC;
