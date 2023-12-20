import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import { Banner } from "../src/components/Banner";
import { Skills } from "../src/components/Skills";
import { Experiences } from "./components/Experiences";
import { Projects } from "../src/components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <div style={{ margin: "60px 0" }}>
        <Experiences />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
