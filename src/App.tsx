import "./index.css";
import Navbar from "./components/navbar/navbar.tsx";
import Hero from "./components/hero/hero.tsx";
import About from "./components/about/about.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
