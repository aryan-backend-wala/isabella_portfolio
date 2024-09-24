import About from "./About/About";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";

export default function Content(){
  return (
    <div id="content">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}