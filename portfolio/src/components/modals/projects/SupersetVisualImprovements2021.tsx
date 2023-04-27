import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetVisualImprovements2021() {
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
        data-testid="SupersetVisualImprovements2021"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "8px",
        }}
      >
        • Visual improvements •
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
              Visual improvements
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14192"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Center each import icon and add a tooltip
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14846"
                target="_blank"
                rel="noopener noreferrer"
              >
                chore: Align down icons on header
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14870"
                target="_blank"
                rel="noopener noreferrer"
              >
                chore: Bulk Select X Button Alignment
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15119"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Database connect UI Polish - Step 1
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15187"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Database connect UI Polish - Step 3
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15204"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Sticky header in db modal
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15234"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Database Modal UI Polish
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15379"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Database connection form - step 2 and 3 tuneup
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15412"
                target="_blank"
                rel="noopener noreferrer"
              >
                style: Database Connection Modal UI Polish R5
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15486"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Database connection R6 fixes
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/15612"
                target="_blank"
                rel="noopener noreferrer"
              >
                fix: Database Connection Modal - corrected tooltip alignment and
                info alert width
              </a>
            </p>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
