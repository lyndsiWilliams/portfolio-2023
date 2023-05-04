import { ReactElement } from "react";
import { Link } from "react-router-dom";

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
        <Link
          to={primaryLink}
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
        </Link>
        {secondaryLink && (
          <Link
            to={secondaryLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderTopRightRadius: "20px" }}
          >
            Github
          </Link>
        )}
      </div>
      <Link
        to={primaryLink}
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
      </Link>
      <h3>{title}</h3>
      <h4 style={{ textAlign: "center" }}>{secondaryTitle}</h4>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProjectCard;
