import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
// import Experience from "./Components/Experience/Experience";
import Pro from "./Components/Pro/pro";
// import Blog from "./Components/Blogs/Blog";
// import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Github from "./Components/Github/Github";
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
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
