import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Portfolio from "./componentes/Portfolio";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}