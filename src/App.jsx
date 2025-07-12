import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import WelcomePage from "./pages/Welcome";
import MainLayout from "./utils/mainLayout";
import BinaryMatrix from "./utils/BinaryBg";
import profileImg from "./assets/self-profile-img.jpg";
import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import HtmlTagLayout from "./utils/HtmlTagLayout";
import { grey } from "@mui/material/colors";
import Typical from "react-typical";
import PathDrawing from "./utils/Shapes";

function App() {
  const handelClick = () => {
    console.log("you clicked chip");
  };
  return (
    <>
      <WelcomePage />
      <Box
        sx={{
          width: 1,
          height: 50,
          backgroundColor: "rgba(0 , 0, 0,0.1)",
          backdropFilter: "blur(0.2rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
            transition: "all 250ms ease",
            cursor: "pointer",
          }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
            transition: "all 250ms ease",
            cursor: "pointer",
          }}
        >
          Skills
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
            transition: "all 250ms ease",
            cursor: "pointer",
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
            transition: "all 250ms ease",
            cursor: "pointer",
          }}
        >
          Contact
        </Typography>
      </Box>
      <MainLayout>
          <Grid container sx={{alignItems : 'center'}}>
          <Grid size={{ xs: 12, lg: 6 }} sx={{ backgroundColor: "" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", width: "max-content" }}
                className="text-shadow"
              >
                FrontEnd
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", width: "max-content", mb: 1 }}
                className="gradient-text-color"
              >
                Developer
              </Typography>
              <Typography variant="h6" sx={{ mb: 0 }}>
                <Typical
                  steps={["Network & technology student ! ", 1000]}
                  loop={1}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{ textTransform: "capitalize", color: grey[400] }}
              >
                hi this Amirreza & its my portfolio website . you can know{" "}
                <br /> my Skills in this webapp
              </Typography>
              <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
                <Chip sx={{ p: 1 }} label="React Js" onClick={handelClick} />
                <Chip sx={{ p: 1 }} label="Next Js" onClick={handelClick} />
                <Chip sx={{ p: 1 }} label="Redux" onClick={handelClick} />
                <Chip sx={{ p: 1 }} label="Django" onClick={handelClick} />
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: "max-content",
                  backgroundColor: grey[800],
                  color: "white",
                  px: 5,
                  mt: 2,
                  borderRadius: 20,
                }}
              >
                Contact
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} sx={{ textAlign : 'center' }}>
            <PathDrawing/>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
}

export default App;
