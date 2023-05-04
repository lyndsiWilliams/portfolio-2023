import { Link } from "react-router-dom";

const BulletedLink = ({ title, link }: { title: string; link: string }) => (
  <p>
    •{" "}
    <Link to={link} target="_blank" rel="noopener noreferrer">
      {title}
    </Link>
  </p>
);

export default BulletedLink;
