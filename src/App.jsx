import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import AnimatedTextPage from "./pages/Welcome";
import MainLayout from "./utils/mainLayout";
import BinaryMatrix from "./utils/BinaryBg";
import profileImg from "./assets/self-profile-img.jpg";
import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { purple, red } from "@mui/material/colors";
import HtmlTagLayout from "./utils/HtmlTagLayout";

function App() {
  return (
    <>
      <BinaryMatrix />
      <AnimatedTextPage />
      <MainLayout>
        <Grid container>
          <Grid
            size={{ xs: 12, lg: 4 }}
            sx={{
              height: "100dvh",
              backgroundColor: "rgba(12 ,12 , 12 , 0.1)",
              backdropFilter: "blur(0.5rem)",
            }}
          >
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar
                src={profileImg}
                sx={{ width: 200, height: 200, margin: "auto" }}
              />
              <Typography variant="h5">Amirreza Abdollahi</Typography>
              <Box>
                <IconButton
                  sx={{
                    transition: "all 250ms ease",
                    ":hover": { color: purple[700] },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  sx={{
                    transition: "all 250ms ease",
                    ":hover": { color: "primary.main" },
                  }}
                >
                  <Telegram />
                </IconButton>
                <IconButton
                  sx={{
                    transition: "all 250ms ease",
                    ":hover": { color: "error.dark" },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{
                    transition: "all 250ms ease",
                    ":hover": { color: "primary.dark" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>

              <Typography variant="body1">
                Hi👋 im{" "}
                <span style={{ fontWeight: "bold" }}>
                  Amir
                </span>{" "}
                , im frontend developer
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 8 }}
            sx={{
              backdropFilter: "blur(0.2rem)",
              height: "100dvh",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <HtmlTagLayout title={"start"}>
                <>
                  I started learning programming when I was 16 years old. First,
                  I learned Python. Then I became interested in the web field.
                  Since I already knew Python, I wanted to move toward backend
                  and learn Django. But then I thought, let me learn frontend
                  first. After that, I'll go into Django backend so I can become
                  an amazing full-stack developer.
                </>
              </HtmlTagLayout>
            </Box>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
}

export default App;
