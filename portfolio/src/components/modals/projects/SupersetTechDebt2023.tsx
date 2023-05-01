import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import BulletedLink from "../../BulletedLink";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetTechDebt2023() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Button
        data-testid="SupersetTechDebt2023"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "20px",
        }}
      >
        • Tech debt •
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <span
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
          >
            Apache Superset OSS - 2023
          </span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="experience-bullets">
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
            >
              Tech debt
            </p>
            <BulletedLink
              title="chore: Use visibilityToggle prop to control password input visibility"
              link="https://github.com/apache/superset/pull/22363"
            />
            <BulletedLink
              title="test: Convert DatasetList test from jsx to tsx"
              link="https://github.com/apache/superset/pull/22971"
            />
            <BulletedLink
              title="chore: Remove dependency warnings from DatasetList.tsx"
              link="https://github.com/apache/superset/pull/22973"
            />
            <BulletedLink
              title="chore: Remove dependency warnings from SqlEditor/index.jsx"
              link="https://github.com/apache/superset/pull/22974"
            />
            <BulletedLink
              title="chore: Remove dependency warnings from SqlEditorLeftBar/index.tsx"
              link="https://github.com/apache/superset/pull/22975"
            />
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
            >
              Test suite warning cleanup
            </p>
            <p>
              This started as an internal hackathon and turned into an ongoing
              initiative to remove all async errors/warnings from the test
              suite.
            </p>
            <BulletedLink
              title="test: Fix act errors in DatasourceControl test"
              link="https://github.com/apache/superset/pull/22845"
            />
            <BulletedLink
              title="test: Fix act errors in DatabaseModal test"
              link="https://github.com/apache/superset/pull/22846"
            />
            <BulletedLink
              title="test: Clean up AdhocFilterOption test warnings"
              link="https://github.com/apache/superset/pull/22915"
            />
            <BulletedLink
              title="test: Clean up SelectAsyncControl test warnings"
              link="https://github.com/apache/superset/pull/22969"
            />
            <BulletedLink
              title="test: Fix act errors in DatabaseList test"
              link="https://github.com/apache/superset/pull/22970"
            />
            <BulletedLink
              title="test: Clean up QueryList test warnings"
              link="https://github.com/apache/superset/pull/22972"
            />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
