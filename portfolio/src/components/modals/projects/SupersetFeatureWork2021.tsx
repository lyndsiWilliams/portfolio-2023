import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetFeatureWork2021() {
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
        data-testid="SupersetFeatureWork2021"
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
              Feature work
            </p>
            <p>
              • FE: Export for Queries:{" "}
              <a
                href="https://github.com/apache/superset/pull/13981"
                target="_blank"
                rel="noopener noreferrer"
              >
                #13981
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/apache/superset/pull/14086"
                target="_blank"
                rel="noopener noreferrer"
              >
                #14086
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14091"
                target="_blank"
                rel="noopener noreferrer"
              >
                FE: Import for Queries
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14530"
                target="_blank"
                rel="noopener noreferrer"
              >
                Labeled Error-bound Input
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14818"
                target="_blank"
                rel="noopener noreferrer"
              >
                Icon Button
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/14881"
                target="_blank"
                rel="noopener noreferrer"
              >
                Database Connection Modal
              </a>
            </p>
            <p>
              • Email report modal:
              <br />
              <a
                href="https://github.com/apache/superset/pull/15666"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                #15666
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/apache/superset/pull/15793"
                target="_blank"
                rel="noopener noreferrer"
              >
                #15793
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/apache/superset/pull/15856"
                target="_blank"
                rel="noopener noreferrer"
              >
                #15856
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/apache/superset/pull/15937"
                target="_blank"
                rel="noopener noreferrer"
              >
                #15937
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/apache/superset/pull/15969"
                target="_blank"
                rel="noopener noreferrer"
              >
                #15969
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/apache/superset/pull/16148"
                target="_blank"
                rel="noopener noreferrer"
              >
                #16148
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://github.com/apache/superset/pull/17824"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help user to find the input fields in the dataset editor
              </a>
            </p>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
