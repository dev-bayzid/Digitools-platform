import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

    <main>
      <HeroSection></HeroSection>
    </main>

    </>
  );
}

export default App;
