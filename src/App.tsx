import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Hero from "./components/hero";
import ItemsList from "./components/items-list";
import AboutusPage from "./pages/Aboutus";
import BrowsePage from "./pages/Browse";
import HomePage from "./pages/Home";
function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
