import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

export default function SupersetHackathon2022() {
  return (
    <ButtonModal
      buttonText="Hackathon - frontend tagging"
      titleText="Apache Superset OSS - 2022"
      secondaryTitleText="Hackathon - POC for frontend tagging"
      bottomComponent
      experienceContent={
        <>
          <p style={{ lineHeight: "1.2" }}>
            I created a proof of concept for a long-awaited feature in Superset:
            Frontend tagging for dashboards, charts, and queries. The Canadian
            Centre for Cyber Security (CCCS) picked up where I left off on the
            hackathon project and finished the feature.
          </p>
          <BulletedLink
            title="My proof of concept"
            link="https://github.com/apache/superset/pull/20642"
          />
          <BulletedLink
            title="The CCCS's completed version"
            link="https://github.com/apache/superset/pull/20876"
          />
        </>
      }
    />
  );
}
