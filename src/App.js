import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
// import Projects from "./Components/Projects/Projects";
import Pro from "./Components/Pro/pro";
import Blog from "./Components/Blogs/Blog";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Github from "./Components/Github/Github";
import Resume from "./Components/Resume/Resume";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Pro />
        <Github />
        {/* <Blog /> */}
        {/* <Testimonials /> */}
        <Contact />
        {/* <Resume /> */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
