import Styles from "../Styles/OurServices.module.css"
import alama from "../resources/alama.png"
import customerservice from "../resources/customerservice.png"
import raey from "../resources/raey.png"
import tunehub from "../resources/tunehub.png"
import vpoint from "../resources/vpoint.png"
import Rectangle from "../resources/Rectangle.jpg"
const OurServices = () => {
    return (
        <div className={Styles.grid}>
            <div className={Styles.info}>
                <h1>What is equb?</h1>
                <p>አብሮነት ከተለያዩ የሙያ ዘርፍና የሕይወት ልምድ ያላቸው፤አብሮ በመሠራት የሚያምኑ እንዲሁም ለሰዎች የሥራ ዕድልን በመፍጠር ፍላጎት ባላቸው ግለሰቦች ስብስብ የተመሰረተ ነው፡፡</p>
            </div>
            <div className={Styles.div2}>
                <div>
                    <img src={raey} />
                    <h2>ራዕይ</h2>
                    <p>ሰዎች የሚፈልጉትን ሥራ ለመጀመር የሚያስችላቸውን በእውቀት፣ በክህሎት፣ በአመለካከት አብቅቶ የመስሪያ ካፒታል በማመቻቸት ህልሞቻቸውን አሳክተው ማየት !</p>
                </div>
                <div>
                    <img src={customerservice} />
                    <h2>ተልዕኮ</h2>
                    <p>በጋራ በመስራት በአባላት መካከል መተማመን፤ አብሮ የማደግና ሃሳቦችን ወደ ተግባር በመለወጥ በኢኮኖሚ የደረጀ ማህበረሰብን መፍጠር፡፡</p>
                </div>
                <div>
                    <img src={alama} />
                    <h2>ዓላማ</h2>
                    <p>ሥልጠናና ማማከር ሥራ የሥራ መነሻ ካፒታል ማመቻቸት ከሌሎች ኩባንያችና የንግድ ድርጅቶች ጋር በሽርክና መሥራት ወይም ጆይንት ቬንቸር መመስረት</p>
                </div>
            </div>
            <div className={Styles.div3}>
                <img src={Rectangle} />
            </div>
            <div className={Styles.div4}>
                <h1>ከ 200 በላይ ታማኝ አጋሮቻችን ።</h1>
                <p>Our mission is to help your business grow, especially financially. You can consult anytime</p>
                <div>
                    <img src={tunehub}/>
                    <img src={vpoint}/>
                    <img src={tunehub}/>
                    <img src={vpoint}/>
                    <img src={tunehub}/>
                    <img src={vpoint}/>
                </div>
            </div>
        </div>
    );
}
 
export default OurServices;