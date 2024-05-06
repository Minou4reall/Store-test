import ContactForm from "../components/ContactForm";
import SlideHeader from "../components/SlideHeader";
function Contact() {
    return (
      <>
        <SlideHeader header={"Contact Us"} extension={"Contact"} />
        <ContactForm/>
      </>
    );
  }
  export default Contact;