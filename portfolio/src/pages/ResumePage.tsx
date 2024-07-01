// Package imports
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
// For some reason TS couldn't recognize the PDF import but it works.
// @ts-ignore
import resumePDF from "../downloadableContent/LyndsiWilliamsResume2024.pdf";

const ResumePage: FunctionComponent = () => (
  <div style={{ marginTop: "1%" }}>
    <h1 style={{ fontSize: "24px" }}>
      Want a copy? Click
      <Button
        variant="contained"
        color="secondary"
        style={{
          borderWidth: "4px",
          margin: "0 12px 0 8px",
          borderRadius: "20px",
          border: "1px solid rgb(100, 100, 100)",
          boxShadow: "3px 3px rgba(0,0,0,.3)",
        }}
        href={resumePDF}
        download="LyndsiWilliamsResume2024.pdf"
      >
        here
      </Button>
      to download a .pdf of my resume
    </h1>
    <iframe
      src="https://docs.google.com/document/d/e/2PACX-1vTtancVjkPi4LBUnMa75z4gzWafttJg7RcZck94qmFIzSZVi7zpgOzOZZVSHgMrZtJhedpyc_VvQey5/pub?embedded=true"
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
