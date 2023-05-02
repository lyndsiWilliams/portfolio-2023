import ButtonModal from "../../ButtonModal";
import BulletedLink from "../../BulletedLink";

export default function SupersetFeatureWork2022() {
  return (
    <ButtonModal
      buttonText="Feature work"
      titleText="Apache Superset OSS - 2022"
      secondaryTitleText="Feature work"
      experienceContent={
        <>
          <BulletedLink
            title="fix: Keep Report modal open when there's an error"
            link="https://github.com/apache/superset/pull/17988"
          />
          <BulletedLink
            title="feat: Added success toasts for database, dataset, chart, dashboard, and query imports"
            link="https://github.com/apache/superset/pull/18190"
          />
          <BulletedLink
            title="fix(sqllab): Updated blank states for query results and query history"
            link="https://github.com/apache/superset/pull/19111"
          />
          <BulletedLink
            title="feat: Move Database Import option into DB Connection modal"
            link="https://github.com/apache/superset/pull/19314"
          />
          <BulletedLink
            title="feat(explore): Frontend implementation of dataset creation from infobox"
            link="https://github.com/apache/superset/pull/19855"
          />
          <BulletedLink
            title="feat(explore): Dataset Panel Options when Source = Query"
            link="https://github.com/apache/superset/pull/20299"
          />
          <BulletedLink
            title="feat(SqlLab): Change Save Dataset Button to Split Save Query Button"
            link="https://github.com/apache/superset/pull/20852"
          />
        </>
      }
    />
  );
}
