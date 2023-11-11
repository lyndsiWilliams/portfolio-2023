import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import nbcUniversal from "../../../images/nbcUniversal.jpeg";
import SquareButtonModal from "../../SquareButtonModal";

const NBCUniversal: FunctionComponent = () => (
  <SquareButtonModal
    topButtonText="Frontend Engineer"
    image={nbcUniversal}
    imageNeedsSomeHeight
    bottomButtonText="NBCUniversal (Fincons)"
    titleText={
      <>
        NBCUniversal (Fincons)
        <br />
        August 2023 - Present
      </>
    }
    secondaryTitleText="Frontend Engineer - Remote"
    secondaryTitleTextAlign="center"
    experienceContent={
      <p>
        Coming Soon! Feel free to{" "}
        <Link
          to="mailto:lyndsikaywilliams@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact me
        </Link>{" "}
        with any inquiries 😁
      </p>
    }
  />
);

export default NBCUniversal;
