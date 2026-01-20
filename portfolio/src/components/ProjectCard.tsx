import { ReactElement } from "react";

const ProjectCard = ({
  primaryLink,
  primaryLinkText,
  secondaryLink,
  secondaryLinkText,
  image,
  imageAlt,
  addImageBackground,
  title,
  secondaryTitle,
  description,
}: {
  primaryLink: string;
  primaryLinkText?: string;
  secondaryLink?: string;
  secondaryLinkText?: string;
  image: string;
  imageAlt: string;
  addImageBackground?: boolean;
  title: string;
  secondaryTitle: string | ReactElement<any, any>;
  description: ReactElement<any, any>;
}) => (
  <div className="project-card">
    <div className="link-btns">
      <a
        href={primaryLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} primary link`}
        style={
          secondaryLink
            ? {
                borderTopLeftRadius: "20px",
              }
            : {
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }
        }
      >
        {primaryLinkText || "Deployment"}
      </a>
      {secondaryLink && (
        <a
          href={secondaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} secondary link`}
          style={{ borderTopRightRadius: "20px" }}
        >
          {secondaryLinkText || "Github"}
        </a>
      )}
    </div>
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-img"
    >
      <img
        src={image}
        alt={imageAlt}
        className="project-img"
        loading="lazy"
        decoding="async"
        style={
          addImageBackground
            ? { backgroundColor: "white", opacity: ".9" }
            : undefined
        }
      />
    </a>
    <h3>{title}</h3>
    <h4 style={{ textAlign: "center", margin: "0 16px", fontWeight: "normal" }}>
      {secondaryTitle}
    </h4>
    <div className="description">{description}</div>
  </div>
);

export default ProjectCard;
