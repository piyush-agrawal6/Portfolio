import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
