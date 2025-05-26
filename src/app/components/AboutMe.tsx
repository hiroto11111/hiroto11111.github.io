import { Box, Typography, Divider } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      id ="aboutme"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      textAlign="center"
      paddingTop="60px"
      bgcolor={"#fff"}
      sx={{
        color: "#000",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "'Noto Serif JP', sans-serif" }}
      >
        About Me
      </Typography>
      <Divider
        sx={{
          borderColor: "#000",
          borderWidth: "2px",
          width: "60%",
          mx: "auto",
          mt: "5px",
          mb: "5px"
        }}
      />
      <Typography variant="body1" fontSize="1.4rem" sx={{ fontFamily: 'Sawarabi Mincho', maxWidth: 840, mt: "10px" }}>
        三重県出身、石川県在住<br />金沢工業大学 工学部情報工学科3年<br />
        高校卒業後、石川県に移住し、金沢工業大学に進学。大学では情報工学を専攻し、課外活動ではWebアプリの開発に励んでいます。
      </Typography>
    </Box>
  );
}