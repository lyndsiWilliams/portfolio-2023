import { Link } from "react-router-dom";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

export default function SupersetFeatureWork2021() {
  return (
    <ButtonModal
      buttonText="Feature work"
      titleText="Apache Superset OSS - 2021"
      secondaryTitleText="Feature work"
      experienceContent={
        <>
          <p>
            • FE: Export for Queries:{" "}
            <Link
              to="https://github.com/apache/superset/pull/13981"
              target="_blank"
              rel="noopener noreferrer"
            >
              #13981
            </Link>{" "}
            |{" "}
            <Link
              to="https://github.com/apache/superset/pull/14086"
              target="_blank"
              rel="noopener noreferrer"
            >
              #14086
            </Link>
          </p>
          <BulletedLink
            title="FE: Import for Queries"
            link="https://github.com/apache/superset/pull/14091"
          />
          <BulletedLink
            title="Labeled Error-bound Input"
            link="https://github.com/apache/superset/pull/14530"
          />
          <BulletedLink
            title="Icon Button"
            link="https://github.com/apache/superset/pull/14818"
          />
          <BulletedLink
            title="Database Connection Modal"
            link="https://github.com/apache/superset/pull/14881"
          />
          <p>
            • Email report modal:
            <br />
            <Link
              to="https://github.com/apache/superset/pull/15666"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              #15666
            </Link>{" "}
            |{" "}
            <Link
              to="https://github.com/apache/superset/pull/15793"
              target="_blank"
              rel="noopener noreferrer"
            >
              #15793
            </Link>{" "}
            |{" "}
            <Link
              to="https://github.com/apache/superset/pull/15856"
              target="_blank"
              rel="noopener noreferrer"
            >
              #15856
            </Link>{" "}
            |{" "}
            <Link
              to="https://github.com/apache/superset/pull/15937"
              target="_blank"
              rel="noopener noreferrer"
            >
              #15937
            </Link>{" "}
            |{" "}
            <Link
              to="https://github.com/apache/superset/pull/15969"
              target="_blank"
              rel="noopener noreferrer"
            >
              #15969
            </Link>{" "}
            |{" "}
            <Link
              to="https://github.com/apache/superset/pull/16148"
              target="_blank"
              rel="noopener noreferrer"
            >
              #16148
            </Link>
          </p>
          <BulletedLink
            title="Help user to find the input fields in the dataset editor"
            link="https://github.com/apache/superset/pull/17824"
          />
        </>
      }
    />
  );
}
