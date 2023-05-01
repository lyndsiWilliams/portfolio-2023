import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import BulletedLink from "../../BulletedLink";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetHackathon2022() {
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
        data-testid="SupersetHackathon2022"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "20px",
        }}
      >
        • Hackathon - frontend tagging •
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
              Hackathon - POC for frontend tagging
            </p>
            <p style={{ lineHeight: "1.2" }}>
              I created a proof of concept for a long-awaited feature in
              Superset: Frontend tagging for dashboards, charts, and queries.
              The Canadian Centre for Cyber Security (CCCS) picked up where I
              left off on the hackathon project and finished the feature.
            </p>
            <BulletedLink
              title="My proof of concept"
              link="https://github.com/apache/superset/pull/20642"
            />
            <BulletedLink
              title="The CCCS's completed version"
              link="https://github.com/apache/superset/pull/20876"
            />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
