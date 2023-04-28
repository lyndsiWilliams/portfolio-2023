import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetTechDebt2021() {
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
        data-testid="SupersetTechDebt2021"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "16px",
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
              Tech debt
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/12739"
                target="_blank"
                rel="noopener noreferrer"
              >
                docs: Fixed typo on line 348
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/12772"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Change Windows new tab shortcut to ctrl + q
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/12795"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Updated tooltip help text in SQL Lab settings
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/12873"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: TemplateParamsEditor.jsx converted from class to
                functional component
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14196"
                target="_blank"
                rel="noopener noreferrer"
              >
                chore: Code cleanup in DatabaseModal
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15394"
                target="_blank"
                rel="noopener noreferrer"
              >
                test: RTL testing on DatabaseModal
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15458"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Fixed "connetion" typo
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15463"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Database connection modal touch up
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/16339"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Reports - dashboards
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/16376"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Charts cleanup
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/16622"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Reports - ReportModal
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/16911"
                target="_blank"
                rel="noopener noreferrer"
              >
                test: Cypress 7.0.0 migration
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17424"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Reports code clean 10-29
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17573"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix(sqllab): Floating numbers not sorting correctly in result
                column
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17578"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactor: Reports code cleaning
              </a>
            </p>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
