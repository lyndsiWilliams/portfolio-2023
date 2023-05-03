import ButtonModal from "../../ButtonModal";

export default function TeamLead() {
  return (
    <ButtonModal
      buttonText={
        <>
          • Bloom Institute of Technology (formerly Lambda School) •<br />
          Team Lead
        </>
      }
      noBullets
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
          <p>
            • Provided daily feedback and issue resolution of all curriculum
            through Slack, help channel, and/or code review.
          </p>
          <p>• Delivered 1:1 feedback and code review on a weekly basis</p>
          <p>
            • Led a team of 7-9 students that emulates a real work environment
            using Agile methodology
          </p>
          <p>
            • Mentored a team of 7-9 students on how to learn effectively and
            solve programming problems
          </p>
          <p>
            • Reviewed student code and provided detailed feedback on areas of
            improvement
          </p>
          <p>
            • Facilitated daily standup meetings to build camaraderie, encourage
            sharing of ideas and work progress, and provide guidance for that
            week's study material
          </p>
          <p>
            • Delivered supplemental lectures on various topics related to
            software engineering
          </p>
        </>
      }
    />
  );
}
