import  react,{useEffect}  from 'react'
import Header from './Components/Header/Header'
import Home from "./Components/Homme/Home"
import AboutMe from './Components/Aboutme/Aboutme'
import Portfolio from './Components/Portfolio/Portfolio'
import Contactme from "./Components/Contactme/Contactme"
import Skilles from "./Components/Skilles/Skilles"
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './Components/ScrollTop/ScrollTop'
import Footer from './Components/Footer/Footer'
function App() {

useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Portfolio />
      <Skilles />
      <Contactme />
      <ScrollToTop/>
      <Footer/>
    </>
  );
}

export default App
