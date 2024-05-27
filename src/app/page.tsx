import About from "./components/About";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Familiartech from "./components/FamiliarTech";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Topbar from "./components/Topbar";
import Volunteering from "./components/Volunteering";

export default function Home() {
  return (
    <main className="app">
      <Topbar></Topbar>
      <div className="sections">
        <Landing />
        <About />
        <Familiartech />
        <Education />
        <Experience />
        <Volunteering />
        <Awards />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
