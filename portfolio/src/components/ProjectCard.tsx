import { ReactElement } from "react";

const ProjectCard = ({
  primaryLink,
  primaryLinkText,
  secondaryLink,
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
  image: string;
  imageAlt: string;
  addImageBackground?: boolean;
  title: string;
  secondaryTitle: string | ReactElement<any, any>;
  description: ReactElement<any, any>;
}) => {
  return (
    <div className="project-card">
      <div className="link-btns">
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
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
            style={{ borderTopRightRadius: "20px" }}
          >
            Github
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
          style={
            addImageBackground
              ? { backgroundColor: "white", opacity: ".9" }
              : undefined
          }
        />
      </a>
      <h3>{title}</h3>
      <h4 style={{ textAlign: "center" }}>{secondaryTitle}</h4>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProjectCard;
