
import './App.css'
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Logos from './component/Logos.jsx';
import Section2 from "./component/Section2.jsx";
// import Section3 from "./component/Section3.jsx";
import Footer from "./component/Footer.jsx";

function App() {

  return (
<div>
  <Navbar/>
  <Hero/>
  <Logos/>
  <Section2/>
  {/* <Section3/> */}
  <Footer/>
</div>
  )
}

export default App
