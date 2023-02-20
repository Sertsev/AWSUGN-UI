import { Box } from "@mui/material";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ItemsList from "./components/items-list";
function App() {
  return (
    <Box>
      <Hero />
      <ItemsList />
      <Footer />
    </Box>
  );
}

export default App;
