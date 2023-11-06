import Hero from "../Sections/Hero";
import OurServices from "../Sections/OurServices";
import OurTestimonial from "../Sections/OurTestimonial";
import ContactUs from "../Sections/ContactUs";
import Subscribe from "../Sections/Subscribe";
import Article from "../Sections/Article";
import Workflow from "../Sections/Workflow";


const Home = () => {
    return (
        <>
            <Hero/>
            <OurServices/>
            <Workflow/>
            <OurTestimonial/>
            <ContactUs/>
            <Article/>
            <Subscribe/>
        </>
      
    );
}
 
export default Home;