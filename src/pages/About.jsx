import AboutSlide from "../components/AboutSlide";
import SlideHeader from "../components/SlideHeader";
function About() {
    return (
      <>
        <SlideHeader header={"About Us"} extension={"About"} />
        <AboutSlide/>
      </>
    );
  }
  export default About;