
import TestimonySlider from "../Components/TestimonySlider";
import Rectangle from "../resources/Rectangle.jpg";
import Styles from "../Styles/OurTestimonial.module.css";
import { SliderData } from "../utils/SliderData";
import { accordionData } from "../utils/accordionData";
import Accordion from "../Components/Accordion";
const OurTestimonial = () => {
    return (
        <div>
            <div className={Styles.main}>
                <TestimonySlider slides={SliderData} className={Styles.testimonies}/>
                <div className={Styles.pic}>
                    <img src={Rectangle} />
                </div>
            </div>
            <div className={Styles.frequentlyasked}>
                <h1>Frequently asked questions</h1>
                <div className={Styles.questions}>
                    {accordionData.map(({question, answer})=>(
                        <Accordion question={question} answer={answer} />
                    ))}
                </div>
            </div>
        </div>
        
    );
}
 
export default OurTestimonial;