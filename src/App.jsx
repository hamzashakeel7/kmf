import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./app/components/About";
import AIDesignGenerator from "./app/components/AiDesign";
import Contact from "./app/components/Contact";
import Footer from "./app/components/Footer";
import Hero from "./app/components/Hero";
import Navigation from "./app/components/Navbar";
import Process from "./app/components/Process";
import Projects from "./app/components/Projects";
import Team from "./app/components/Team";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AIDesignGenerator />
              <About />
              <Projects />
              <Process />
              <Contact />
            </>
          }
        />

        {/* Individual pages */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
