import React from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import BulletedLink from "../../BulletedLink";
import { BootstrapDialog, BootstrapDialogTitle } from "../sharedFunctionality";

export default function SupersetVisualImprovements2022() {
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
        data-testid="SupersetVisualImprovements2022"
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
              Visual improvements
            </p>
            <BulletedLink
              title="chore: Move edit dataset lock"
              link="https://github.com/apache/superset/pull/17930"
            />
            <BulletedLink
              title="fix(sqllab): Dancing Tooltip in SQL editor dropdown"
              link="https://github.com/apache/superset/pull/17931"
            />
            <BulletedLink
              title="fix: Fixed dancing tooltip in database list action buttons"
              link="https://github.com/apache/superset/pull/18686"
            />
            <BulletedLink
              title="fix(sqllab): Fix spacing on Schedule option in SqlEditor dropdown"
              link="https://github.com/apache/superset/pull/21832"
            />
            <BulletedLink
              title="fix: Change timer font to monospace"
              link="https://github.com/apache/superset/pull/21876"
            />
            <BulletedLink
              title="fix: Fixed spacing in alert modal"
              link="https://github.com/apache/superset/pull/22066"
            />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
