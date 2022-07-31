import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "20vh",
        padding: "10px",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "#ff758f", fontWeight: "bold" }}
      >
        Medical Vocabulary
      </Typography>
      <Typography
        variant="h6"
        style={{ textAlign: "center", fontWeight: "thinner" }}
      >
        Created By - ဒပလုပ်ပါငဇိုး
      </Typography>
    </Box>
  );
};

export default Header;
