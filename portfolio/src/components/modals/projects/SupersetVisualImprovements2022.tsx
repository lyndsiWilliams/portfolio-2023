import { FunctionComponent } from "react";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

const SupersetVisualImprovements2022: FunctionComponent = () => (
  <ButtonModal
    buttonText="Visual improvements"
    titleText="Apache Superset OSS - 2022"
    secondaryTitleText="Visual improvements"
    experienceContent={
      <>
        <BulletedLink
          title="chore: Move edit dataset lock"
          link="https://github.com/apache/superset/pull/17930"
        />
        <BulletedLink
          title="fix(sqllab): Dancing Tooltip in SQL editor dropdown"
          link="https://github.com/apache/superset/pull/17931"
        />
        <BulletedLink
          title="fix: Fixed dancing tooltip in database list action buttons"
          link="https://github.com/apache/superset/pull/18686"
        />
        <BulletedLink
          title="fix(sqllab): Fix spacing on Schedule option in SqlEditor dropdown"
          link="https://github.com/apache/superset/pull/21832"
        />
        <BulletedLink
          title="fix: Change timer font to monospace"
          link="https://github.com/apache/superset/pull/21876"
        />
        <BulletedLink
          title="fix: Fixed spacing in alert modal"
          link="https://github.com/apache/superset/pull/22066"
        />
      </>
    }
  />
);

export default SupersetVisualImprovements2022;
