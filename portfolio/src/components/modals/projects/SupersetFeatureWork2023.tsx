import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

export default function SupersetFeatureWork2023() {
  return (
    <ButtonModal
      buttonText="Feature work"
      titleText="Apache Superset OSS - 2023"
      secondaryTitleText="New dataset creation flow"
      experienceContent={
        <>
          <p>
            I worked with a small group of developers and designers to redo the
            entire dataset creation flow. The creation process was originally
            confined to a modal, now it has a whole dedicated (and completely
            redesigned) page with a new flow.
          </p>
          <BulletedLink
            title="feat: Create dataset blank state"
            link="https://github.com/apache/superset/pull/21058"
          />
          <BulletedLink
            title="feat: Create dataset header component"
            link="https://github.com/apache/superset/pull/21189"
          />
          <BulletedLink
            title="fix: Dataset creation header is now uneditable and holds proper default values"
            link="https://github.com/apache/superset/pull/21557"
          />
          <BulletedLink
            title="fix: Dataset left panel now uses client side search"
            link="https://github.com/apache/superset/pull/21770"
          />
          <BulletedLink
            title="feat: Add dataset visuals for when a table is selected"
            link="https://github.com/apache/superset/pull/21893"
          />
          <BulletedLink
            title="feat: Flow for tables that already have a dataset"
            link="https://github.com/apache/superset/pull/22136"
          />
          <BulletedLink
            title="fix: Create dataset polish/bug fix"
            link="https://github.com/apache/superset/pull/22262"
          />
          <BulletedLink
            title="feat: Enable new dataset creation flow"
            link="https://github.com/apache/superset/pull/22610"
          />
          <BulletedLink
            title="feat: Enable new dataset creation flow II"
            link="https://github.com/apache/superset/pull/22835"
          />
          <BulletedLink
            title="feat: add tabs to edit dataset page"
            link="https://github.com/apache/superset/pull/22043"
          />
        </>
      }
    />
  );
}
