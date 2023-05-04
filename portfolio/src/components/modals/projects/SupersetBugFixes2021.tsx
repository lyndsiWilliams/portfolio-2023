import { FunctionComponent } from "react";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

const SupersetBugFixes2021: FunctionComponent = () => (
  <ButtonModal
    buttonText="Bug fixes"
    titleText="Apache Superset OSS - 2021"
    secondaryTitleText="Bug fixes"
    experienceContent={
      <>
        <BulletedLink
          title="fix: Big Query additional parameters field doesn't keep value"
          link="https://github.com/apache/superset/pull/16161"
        />
        <BulletedLink
          title="fix: FilterableTable result div width"
          link="https://github.com/apache/superset/pull/16912"
        />
        <BulletedLink
          title="fix(sqllab): Hover tooltip flashes in SQL Lab"
          link="https://github.com/apache/superset/pull/17068"
        />
        <BulletedLink
          title="fix: Update package-lock.json of superset-frontend and cypress-base"
          link="https://github.com/apache/superset/pull/17125"
        />
        <BulletedLink
          title="fix(reports): Owners no longer showing undefined in reports"
          link="https://github.com/apache/superset/pull/17223"
        />
        <BulletedLink
          title="fix(sqllab): Query limit dropdown number breaks to separate lines"
          link="https://github.com/apache/superset/pull/17382"
        />
        <BulletedLink
          title="fix(sql lab): NULL styling in grid cell"
          link="https://github.com/apache/superset/pull/17385"
        />
        <BulletedLink
          title="fix: Dataset column names are no longer editable"
          link="https://github.com/apache/superset/pull/18164"
        />
      </>
    }
  />
);

export default SupersetBugFixes2021;
