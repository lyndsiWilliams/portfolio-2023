import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const DividerTitle = ({
  title,
  center,
  hSize = "h2",
  textShadowColor = "lightgray",
}: {
  title: string;
  center?: boolean;
  hSize?: "h1" | "h2" | "h3" | "h4";
  textShadowColor?: string;
}) => {
  return (
    <Divider
      component="div"
      role="presentation"
      textAlign={center ? "center" : "left"}
      sx={{ margin: "28px 0", textShadow: `3px 3px ${textShadowColor}` }}
    >
      <Typography variant={hSize} sx={{ fontFamily: "Kufam" }}>
        {title}
      </Typography>
    </Divider>
  );
};

export default DividerTitle;
