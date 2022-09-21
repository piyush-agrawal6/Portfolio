import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blogs/Blog";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
