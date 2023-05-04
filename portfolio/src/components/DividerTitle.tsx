import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const DividerTitle = ({
  title,
  center,
  hSize = "h2",
}: {
  title: string;
  center?: boolean;
  hSize?: "h1" | "h2" | "h3" | "h4";
}) => {
  return (
    <Divider
      component="div"
      role="presentation"
      textAlign={center ? "center" : "left"}
      sx={{ margin: "28px 0", textShadow: `rgb(0 0 0 / 25%) 3px 3px` }}
    >
      <Typography variant={hSize} sx={{ fontFamily: "Kufam" }}>
        {title}
      </Typography>
    </Divider>
  );
};

export default DividerTitle;
