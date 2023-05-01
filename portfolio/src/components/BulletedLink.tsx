const BulletedLink = ({ title, link }: { title: string; link: string }) => (
  <p>
    •{" "}
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </p>
);

export default BulletedLink;
