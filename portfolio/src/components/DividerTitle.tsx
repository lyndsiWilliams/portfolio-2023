import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const DividerTitle = ({
  title,
  center,
  hSize,
}: {
  title: string;
  center?: boolean;
  hSize?: "h1" | "h3" | "h4";
}) => {
  return (
    <Divider
      component="div"
      role="presentation"
      textAlign={center ? "center" : "left"}
      sx={{ margin: "28px 0" }}
    >
      <Typography variant={hSize || "h2"} sx={{ fontFamily: "Kufam" }}>
        {title}
      </Typography>
    </Divider>
  );
};

export default DividerTitle;
