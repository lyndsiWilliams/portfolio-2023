import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

export default function SupersetVisualImprovements2023() {
  return (
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
}
