import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

export default function SupersetVisualImprovements2021() {
  return (
    <ButtonModal
      buttonText="Visual improvements"
      titleText="Apache Superset OSS - 2021"
      secondaryTitleText="Visual improvements"
      experienceContent={
        <>
          <BulletedLink
            title="fix: Center each import icon and add a tooltip"
            link="https://github.com/apache/superset/pull/14192"
          />
          <BulletedLink
            title="chore: Align down icons on header"
            link="https://github.com/apache/superset/pull/14846"
          />
          <BulletedLink
            title="chore: Bulk Select X Button Alignment"
            link="https://github.com/apache/superset/pull/14870"
          />
          <BulletedLink
            title="style: Database connect UI Polish - Step 1"
            link="https://github.com/apache/superset/pull/15119"
          />
          <BulletedLink
            title="style: Database connect UI Polish - Step 3"
            link="https://github.com/apache/superset/pull/15187"
          />
          <BulletedLink
            title="style: Sticky header in db modal"
            link="https://github.com/apache/superset/pull/15204"
          />
          <BulletedLink
            title="style: Database Modal UI Polish"
            link="https://github.com/apache/superset/pull/15234"
          />
          <BulletedLink
            title="style: Database connection form - step 2 and 3 tuneup"
            link="https://github.com/apache/superset/pull/15379"
          />
          <BulletedLink
            title="style: Database Connection Modal UI Polish R5"
            link="https://github.com/apache/superset/pull/15412"
          />
          <BulletedLink
            title="fix: Database connection R6 fixes"
            link="https://github.com/apache/superset/pull/15486"
          />
          <BulletedLink
            title="fix: Database Connection Modal - corrected tooltip alignment and info alert width"
            link="https://github.com/apache/superset/pull/15612"
          />
        </>
      }
    />
  );
}
