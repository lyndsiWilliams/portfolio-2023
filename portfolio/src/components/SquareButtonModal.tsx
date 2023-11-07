import React, { ReactElement } from "react";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "./modals/sharedFunctionality";

export default function SquareButtonModal({
  buttonText,
  noBullets,
  titleText,
  secondaryTitleText,
  secondaryTitleTextAlign,
  experienceContent,
  thereIsAButtonUnderThisComponent,
  bottomComponent,
}: {
  buttonText: string | ReactElement<any, any>;
  noBullets?: boolean;
  titleText: string | ReactElement<any, any>;
  secondaryTitleText: string;
  secondaryTitleTextAlign?: CanvasTextAlign;
  experienceContent: ReactElement<any, any>;
  thereIsAButtonUnderThisComponent?: boolean;
  bottomComponent?: boolean;
}) {
  const [open, setOpen] = React.useState<boolean>(false);

  // Set the bottomMargin space based on the position of the component
  const marginBottomCheck: () => string = () => {
    if (bottomComponent) {
      return "20px";
    } else if (thereIsAButtonUnderThisComponent) {
      return "16px";
    } else return "8px";
  };

  // If titleText is an element, return the first string from the element
  const titleTextCheck: () => string = () => {
    if (typeof titleText === "string") {
      return titleText;
    } else return titleText.props.children[0];
  };

  return (
    <div style={{ marginTop: "2%", width: "48%" }}>
      <Button
        data-testid={`${titleTextCheck().split(" ").join("")}-test`}
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
        style={{
          borderWidth: "4px",
          borderRadius: "8px",
          border: "1px solid rgb(100, 100, 100)",
          marginBottom: marginBottomCheck(),
          boxShadow: "3px 3px rgba(0,0,0,.3)",
        }}
      >
        {noBullets ? buttonText : `• ${buttonText} •`}
      </Button>
      <BootstrapDialog onClose={() => setOpen(false)} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => setOpen(false)}
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
                textAlign: secondaryTitleTextAlign || undefined,
                fontFamily: "'Raleway', sans-serif",
                fontSize: "1.5em",
                fontWeight: "bold",
                minWidth: "300px",
                marginTop: "8px",
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
