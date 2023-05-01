import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import BulletedLink from "../../BulletedLink";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetBugFixes2022() {
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
        data-testid="SupersetBugFixes2022"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: "8px",
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
              Bug fixes
            </p>
            <BulletedLink
              title="fix(sqllab): Fix tab state"
              link="https://github.com/apache/superset/pull/20947"
            />
            <BulletedLink
              title="fix: Columns not passing properly from SQL Lab to Explore"
              link="https://github.com/apache/superset/pull/20975"
            />
            <BulletedLink
              title="fix(sqllab): Async queries are now fetched properly"
              link="https://github.com/apache/superset/pull/21698"
            />
            <BulletedLink
              title="fix: Change dropdown in Alert/Report modal to use javascript for conditional rendering instead of css"
              link="https://github.com/apache/superset/pull/22360"
            />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
