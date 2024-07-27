import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
   <Navbar />
   <Hero />
   <div className="container">
    <Title subTitle="Our Program" title="What We Offer" />
   <Programs />
   <About setPlayState={setPlayState}/>
   <Title subTitle="Gallary" title="Campus Photos" />
   <Campus />
   <Title subTitle="Testimonials" title="What Student Says" />
   <Testimonials/>
   <Title subTitle="Contact Us" title="Get in Touch" />
   <Contact />
   <Footer />
   
   </div>
   <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
