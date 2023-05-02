import React, { ReactElement } from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "./modals/sharedFunctionality";

export default function ButtonModal({
  buttonText,
  titleText,
  secondaryTitleText,
  experienceContent,
  thereIsAButtonUnderThisComponent,
  bottomComponent,
}: {
  buttonText: string;
  titleText: string;
  secondaryTitleText: string;
  experienceContent: ReactElement<any, any>;
  thereIsAButtonUnderThisComponent?: boolean;
  bottomComponent?: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const marginBottomCheck = () => {
    if (bottomComponent) {
      return "20px";
    } else if (thereIsAButtonUnderThisComponent) {
      return "16px";
    } else {
      return "8px";
    }
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Button
        data-testid={`${titleText.split(" ").join("")}-test`}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Kufam",
          borderWidth: "4px",
          marginBottom: marginBottomCheck(),
        }}
      >
        • {buttonText} •
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <span
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
          >
            {titleText}
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
              {secondaryTitleText}
            </p>
            {experienceContent}
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
