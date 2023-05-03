import ButtonModal from "../../ButtonModal";

export default function Superset() {
  return (
    <ButtonModal
      buttonText={
        <>
          • The Apache Software Foundation •<br />
          Apache Superset Committer
        </>
      }
      noBullets
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
          <p>• Implement feature work with clean, maintainable code</p>
          <p>
            • Review code in pull requests to ensure everything stays within the
            project's code styles
          </p>
          <p>
            • Remove tech debt by cleaning up errors/warnings in the code,
            converting JavaScript files to TypeScript, and converting Enzyme
            test files to React Testing Library
          </p>
          <p>• Improve and maintain frontend component tests</p>
          <p>
            • Contribute to an ongoing initiative to remove async warnings from
            the test suite
          </p>
        </>
      }
    />
  );
}
