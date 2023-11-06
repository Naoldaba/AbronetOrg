import Styles from "../Styles/Hero.module.css"
import Rectangle from "../resources/Rectangle.jpg"
import tick from "../resources/tick.png"
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
                    <img  src={tick} alt="vector image"/>
                    <span>ታማኝ እና ቀልጣፋ</span>
                    
                </div>
                <div className={Styles.Monthly}>
                    <img  src={tick} alt="vector image" />
                    <span>ከዘመኑ ጋር ይዘምኑ</span>   
                </div>
            </div>
            
        </div>
        
        
        
    );
}
 
export default Hero;