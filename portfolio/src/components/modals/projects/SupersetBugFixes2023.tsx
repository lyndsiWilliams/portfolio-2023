import { FunctionComponent } from "react";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

const SupersetBugFixes2023: FunctionComponent = () => (
  <ButtonModal
    buttonText="Bug fixes"
    titleText="Apache Superset OSS - 2023"
    secondaryTitleText="Bug fixes"
    experienceContent={
      <>
        <BulletedLink
          title="fix: Report screenshot cut off on left and right sides"
          link="https://github.com/apache/superset/pull/22614"
        />
        <BulletedLink
          title="fix(docs): Change postgres to postgresql in brew install command"
          link="https://github.com/apache/superset/pull/23202"
        />
      </>
    }
  />
);

export default SupersetBugFixes2023;
