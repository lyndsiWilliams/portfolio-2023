import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const DividerTitle = ({
  title,
  center,
}: {
  title: string;
  center?: boolean;
}) => {
  return (
    <Divider
      component="div"
      role="presentation"
      textAlign={center ? "center" : "left"}
      sx={{ margin: "28px 0" }}
    >
      <Typography variant="h2" sx={{ fontFamily: "Kufam" }}>
        {title}
      </Typography>
    </Divider>
  );
};

export default DividerTitle;
