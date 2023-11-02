import Hero from "../Components/Hero";
import OurServices from "../Components/OurServices";
import OurTestimonial from "../Components/OurTestimonial";
import ContactUs from "../Components/ContactUs";
import Subscribe from "../Components/Subscribe";
import Article from "../Components/Article";
import Workflow from "../Components/Workflow";

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