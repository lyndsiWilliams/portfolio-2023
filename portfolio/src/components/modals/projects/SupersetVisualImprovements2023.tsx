import { FunctionComponent } from "react";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

const SupersetVisualImprovements2023: FunctionComponent = () => (
  <ButtonModal
    buttonText="Visual improvements"
    titleText="Apache Superset OSS - 2023"
    secondaryTitleText="Visual improvements"
    experienceContent={
      <BulletedLink
        title="fix: Spacing in alert modal"
        link="https://github.com/apache/superset/pull/22709"
      />
    }
  />
);

export default SupersetVisualImprovements2023;
