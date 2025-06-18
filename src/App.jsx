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
      <div>
        <Navigation />
        <Hero />
        <AIDesignGenerator />
        <About />
        <Projects />
        <Team />
        <Process />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
