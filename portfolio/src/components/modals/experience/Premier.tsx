import { FunctionComponent } from "react";
import premierIncLogo from "../../../images/premierIncLogo.png";
import SquareButtonModal from "../../SquareButtonModal";

const Premier: FunctionComponent = () => (
  <SquareButtonModal
    buttonText="Frontend Engineer"
    image={premierIncLogo}
    imageNeedsSomeHeight
    titleText={
      <>
        Premier, Inc (Hiregenics)
        <br />
        September 2024 - Present
      </>
    }
    secondaryTitleText="Frontend Software Engineer - Remote"
    secondaryTitleTextAlign="center"
    experienceContent={
      <>
        <p>
          • Developed core frontend features for an AI-powered contract labeling 
          feedback tool, designing the foundational UI from scratch to enable human 
          labelers to train and refine an LLM for contract analysis, contributing to 
          348% revenue increase ($29K → $130K annually)
        </p>
        <p>
          • Team delivered $1.25M in total annual profit for 2025 through high-impact 
          product development and innovation
        </p>
        <p>
          • Built dynamic filtering system with searchable sidebar components for a 
          spend analytics dashboard, enabling real-time data analysis across multiple 
          business dimensions using React, TypeScript, and Material-UI
        </p>
        <p>
          • Integrated GraphQL APIs to efficiently fetch and manage complex data 
          structures, enabling real-time updates and optimal performance
        </p>
        <p>
          • Implemented pixel-perfect UI components from Figma designs and collaborated 
          with a cross-functional team of 8 developers in an agile environment
        </p>
      </>
    }
  />
);

export default Premier;
