import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blogs/Blog";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
