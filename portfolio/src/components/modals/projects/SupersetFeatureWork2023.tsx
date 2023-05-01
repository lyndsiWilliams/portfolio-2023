import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import BulletedLink from "../../BulletedLink";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetFeatureWork2023() {
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
        data-testid="SupersetFeatureWork2023"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "8px",
        }}
      >
        • Feature work •
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
              New dataset creation flow
            </p>
            <p>
              I worked with a small group of developers and designers to redo
              the entire dataset creation flow. The creation process was
              originally confined to a modal, now it has a whole dedicated (and
              completely redesigned) page with a new flow.
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
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
