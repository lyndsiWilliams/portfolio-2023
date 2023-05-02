import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

export default function SupersetBugFixes2022() {
  return (
    <ButtonModal
      buttonText="Bug fixes"
      titleText="Apache Superset OSS - 2022"
      secondaryTitleText="Bug fixes"
      experienceContent={
        <>
          <BulletedLink
            title="fix(sqllab): Fix tab state"
            link="https://github.com/apache/superset/pull/20947"
          />
          <BulletedLink
            title="fix: Columns not passing properly from SQL Lab to Explore"
            link="https://github.com/apache/superset/pull/20975"
          />
          <BulletedLink
            title="fix(sqllab): Async queries are now fetched properly"
            link="https://github.com/apache/superset/pull/21698"
          />
          <BulletedLink
            title="fix: Change dropdown in Alert/Report modal to use javascript for conditional rendering instead of css"
            link="https://github.com/apache/superset/pull/22360"
          />
        </>
      }
    />
  );
}
