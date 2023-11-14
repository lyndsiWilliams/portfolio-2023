import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "./modals/sharedFunctionality";

type StringFunction = () => string;

export default function SquareButtonModal({
  titleText,
  buttonText,
  image,
  imageAlt,
  secondaryTitleText,
  secondaryTitleTextAlign,
  experienceContent,
  thereIsAButtonUnderThisComponent,
  bottomComponent,
  imageNeedsSomeHeight,
}: {
  buttonText?: string;
  titleText: string | ReactElement<any, any>;
  image?: string;
  imageAlt?: string;
  secondaryTitleText: string;
  secondaryTitleTextAlign?: CanvasTextAlign;
  experienceContent: ReactElement<any, any>;
  thereIsAButtonUnderThisComponent?: boolean;
  bottomComponent?: boolean;
  imageNeedsSomeHeight?: boolean;
}) {
  const [open, setOpen] = React.useState<boolean>(false);

  // If titleText is an element, return the first string from the element
  const titleTextCheck: StringFunction = () => {
    if (typeof titleText === "string") {
      return titleText;
    } else return titleText.props.children[0];
  };

  // Set the bottomMargin space based on the position of the component
  const marginBottomCheck: StringFunction = () => {
    if (bottomComponent) {
      return "20px";
    } else if (thereIsAButtonUnderThisComponent) {
      return "16px";
    } else return "8px";
  };

  const StyledButton = styled(Button)`
    border-width: 4px;
    border-radius: 8px;
    border: 1px solid rgb(100, 100, 100);
    margin-bottom: ${marginBottomCheck()};
    box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    padding: 0;

    p {
      text-align: center;
      font-size: 1.1em;
      padding: 8px;
      margin: 4px 0;
    }

    img {
      background-color: white;
      width: 92%;
      border-radius: 6px;
      padding: ${imageNeedsSomeHeight ? `8% 0` : undefined};
      margin-bottom: 12px;
    }
  `;

  return (
    <div style={{ marginTop: "2%", width: "46%" }}>
      <StyledButton
        data-testid={`${titleTextCheck().split(" ").join("")}-test`}
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        <p>{buttonText && buttonText}</p>
        {image && <img src={image} alt={imageAlt} />}
      </StyledButton>
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
