import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import BulletedLink from "../../BulletedLink";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetFeatureWork2022() {
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
        data-testid="SupersetFeatureWork2022"
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
            Apache Superset OSS - 2022
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
              Feature work
            </p>
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
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
