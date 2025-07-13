import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Modal,
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
import Navbar from "./components/Navbar";
import AnimatedIntro from "./utils/HeroContent";
import CustomModal from "./utils/Modal";
import MotionModal from "./utils/Modal";

function App() {
  const handelClick = () => {
    console.log("you clicked chip");
  };
  return (
    <>
      {/* <WelcomePage /> */}
      <Navbar />
      <MainLayout>
        <Grid container sx={{ alignItems: "center" , mt : {xs : 10 , lg : 0}}}>
          <Grid size={{ xs: 12, lg: 6 }} sx={{ backgroundColor: "" }}>
            <AnimatedIntro/>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} sx={{ textAlign: "center" }}>
            <PathDrawing />
          </Grid>
        </Grid>
        <Typography variant="body1" className="section-title">About</Typography>

        <Grid container>
          <Grid size={{xs : 12 , lg : 6}}>
            
          </Grid>
          <Grid size={{xs : 12 , lg : 6}}></Grid>
        </Grid>
      </MainLayout>

    </>
  );
}

export default App;
