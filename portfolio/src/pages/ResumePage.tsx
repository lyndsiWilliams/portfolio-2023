// Package imports
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
// For some reason TS couldn't recognize the PDF import but it works.
// @ts-ignore
import resumePDF from "../downloadableContent/LyndsiWilliamsResume2023.pdf";

const ResumePage: FunctionComponent = () => (
  <div style={{ marginTop: "1%" }}>
    <h1 style={{ fontSize: "24px" }}>
      Want a copy? Click here to download a .pdf of my resume:
      <Button
        variant="contained"
        color="secondary"
        style={{
          borderWidth: "4px",
          marginLeft: "12px",
          borderRadius: "20px",
          border: "1px solid rgb(100, 100, 100)",
          boxShadow: "3px 3px rgba(0,0,0,.3)",
        }}
        href={resumePDF}
        download="LyndsiWilliamsResume2023.pdf"
      >
        Download
      </Button>
    </h1>
    <iframe
      src="https://docs.google.com/document/d/e/2PACX-1vRERMPCJxpPmykMYDJBhpiWHkq2_h-846yIRP1Ivti76hCfus1pHb-azUg96dGlVGmxr-h4c6VdFp8i/pub?embedded=true"
      title="file"
      width="80%"
      height="1900px"
      style={{
        maxWidth: "834px",
        minWidth: "834px",
        border: "none",
      }}
      loading="eager"
    ></iframe>
  </div>
);

export default ResumePage;
