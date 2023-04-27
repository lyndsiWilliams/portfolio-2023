import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetBugFixes2021() {
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
        data-testid="SupersetBugFixes2021"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "16px",
        }}
      >
        • Bug fixes •
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <span
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
          >
            Apache Superset OSS - 2021
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
              Bug fixes
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/16161"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Big Query additional parameters field doesn't keep value
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/16912"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: FilterableTable result div width
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17068"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix(sqllab): Hover tooltip flashes in SQL Lab
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17125"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Update package-lock.json of superset-frontend and
                cypress-base
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17223"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix(reports): Owners no longer showing undefined in reports
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17382"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix(sqllab): Query limit dropdown number breaks to separate
                lines
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17385"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix(sql lab): NULL styling in grid cell
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/18164"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Dataset column names are no longer editable
              </a>
            </p>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
