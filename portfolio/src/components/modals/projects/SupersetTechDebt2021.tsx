import { FunctionComponent } from "react";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

const SupersetTechDebt2021: FunctionComponent = () => (
  <ButtonModal
    buttonText="Tech debt"
    titleText="Apache Superset OSS - 2021"
    secondaryTitleText="Tech debt"
    thereIsAButtonUnderThisComponent
    experienceContent={
      <>
        <BulletedLink
          title="docs: Fixed typo on line 348"
          link="https://github.com/apache/superset/pull/12739"
        />
        <BulletedLink
          title="refactor: Change Windows new tab shortcut to ctrl + q"
          link="https://github.com/apache/superset/pull/12772"
        />
        <BulletedLink
          title="refactor: Updated tooltip help text in SQL Lab settings"
          link="https://github.com/apache/superset/pull/12795"
        />
        <BulletedLink
          title="refactor: TemplateParamsEditor.jsx converted from class to functional component"
          link="https://github.com/apache/superset/pull/12873"
        />
        <BulletedLink
          title="chore: Code cleanup in DatabaseModal"
          link="https://github.com/apache/superset/pull/14196"
        />
        <BulletedLink
          title="test: RTL testing on DatabaseModal"
          link="https://github.com/apache/superset/pull/15394"
        />
        <BulletedLink
          title={`style: Fixed "connetion" typo`}
          link="https://github.com/apache/superset/pull/15458"
        />
        <BulletedLink
          title="fix: Database connection modal touch up"
          link="https://github.com/apache/superset/pull/15463"
        />
        <BulletedLink
          title="refactor: Reports - dashboards"
          link="https://github.com/apache/superset/pull/16339"
        />
        <BulletedLink
          title="refactor: Charts cleanup"
          link="https://github.com/apache/superset/pull/16376"
        />
        <BulletedLink
          title="refactor: Reports - ReportModal"
          link="https://github.com/apache/superset/pull/16622"
        />
        <BulletedLink
          title="test: Cypress 7.0.0 migration"
          link="https://github.com/apache/superset/pull/16911"
        />
        <BulletedLink
          title="refactor: Reports code clean 10-29"
          link="https://github.com/apache/superset/pull/17424"
        />
        <BulletedLink
          title="fix(sqllab): Floating numbers not sorting correctly in result column"
          link="https://github.com/apache/superset/pull/17573"
        />
        <BulletedLink
          title="refactor: Reports code cleaning"
          link="https://github.com/apache/superset/pull/17578"
        />
      </>
    }
  />
);

export default SupersetTechDebt2021;
