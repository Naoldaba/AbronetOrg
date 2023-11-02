import Styles from "../Styles/Hero.module.css"
import Rectangle from "../resources/Rectangle.jpg"
import Vector1 from "../resources/Vector1.png";
import Vector from "../resources/Vector.png";
const Hero = () => {
    return (
        <div className={Styles.Hero}>
            <div className={Styles.title}>
                <h1>አብሮነት የካፒታል ማመቻቸት እና የስልጠና ማዕከል ኃለ/የተ/የግል ማኅበር</h1>
                <p>አብሮነት ከተለያዩ የሙያ ዘርፍና የሕይወት ልምድ ያላቸው፤አብሮ በመሠራት የሚያምኑ እንዲሁም ለሰዎች የሥራ ዕድልን በመፍጠር ፍላጎት ባላቸው ግለሰቦች ስብስብ የተመሰረተ ነው፡፡</p>
                <button>Get Started</button>
            </div>
            <div className={Styles.rectangle}>
                <img src={Rectangle} id={Styles.rec} />
                <div className={Styles.Planning}>
                    <img id={Styles.V1} src={Vector1} alt="vector image"/>
                    <span>Planning Consultation</span>
                    <button>Try</button>
                </div>
                <div className={Styles.Monthly}>
                    <img id={Styles.v2} src={Vector} alt="vector image" />
                    <span>Monthly Report</span>
                    <button>Try</button>
                </div>
            </div>
            
        </div>
        
        
        
    );
}
 
export default Hero;