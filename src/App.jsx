import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Add top padding equal to the navbar's height */}
      <Box as="main" pt="60px" pb="60px">
        {" "}
        {/* Adjust pt="60px" according to your navbar height */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
