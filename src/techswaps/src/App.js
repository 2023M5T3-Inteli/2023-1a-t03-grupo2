import "./App.css";
import HeroSection from "./components/HeroSection";
import HomeNavbar from "./components/Navbar";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <HomeNavbar />
      <ProjectsPage />
    </>
  );
}

export default App;
