
import alama from "../resources/alama.png"
import customerservice from "../resources/customerservice.png"
import raey from "../resources/raey.png"
import tunehub from "../resources/tunehub.png"
import vpoint from "../resources/vpoint.png"
import Rectangle from "../resources/Rectangle.jpg"
const OurServices = () => {
    return (
        <div className="grid gap-0 md:grid-cols-2 md:grid-rows-2 items-center justify-center">
            <div className="col-span-1 px-5 ">
                <h1 class="text-2xl md:text-5xl font-bold text-center mb-5">What is equb?</h1>
                <p>አብሮነት ከተለያዩ የሙያ ዘርፍና የሕይወት ልምድ ያላቸው፤አብሮ በመሠራት የሚያምኑ እንዲሁም ለሰዎች የሥራ ዕድልን በመፍጠር ፍላጎት ባላቸው ግለሰቦች ስብስብ የተመሰረተ ነው፡፡</p>
            </div>
            <div className="mt-20 grid grid-cols-3 px-5 gap-x-5">
                <div>
                    <img src={raey} />
                    <h2 className="objectives">ራዕይ</h2>
                    <p>ሰዎች የሚፈልጉትን ሥራ ለመጀመር የሚያስችላቸውን በእውቀት፣ በክህሎት፣ በአመለካከት አብቅቶ የመስሪያ ካፒታል በማመቻቸት ህልሞቻቸውን አሳክተው ማየት !</p>
                </div>
                <div>
                    <img src={customerservice} />
                    <h2 className="objectives">ተልዕኮ</h2>
                    <p>በጋራ በመስራት በአባላት መካከል መተማመን፤ አብሮ የማደግና ሃሳቦችን ወደ ተግባር በመለወጥ በኢኮኖሚ የደረጀ ማህበረሰብን መፍጠር፡፡</p>
                </div>
                <div>
                    <img src={alama} />
                    <h2 className="objectives">ዓላማ</h2>
                    <p>ሥልጠናና ማማከር ሥራ የሥራ መነሻ ካፒታል ማመቻቸት ከሌሎች ኩባንያችና የንግድ ድርጅቶች ጋር በሽርክና መሥራት ወይም ጆይንት ቬንቸር መመስረት</p>
                </div>
            </div>
            <div className="mt-20 flex justify-center ">
                <img src={Rectangle} className="w-1/2 lg:w-2/3" />
            </div>
            <div className="mt-20 px-5">
                <h1 className="text-2xl md:text-5xl font-bold text-center mb-5">ከ 200 በላይ ታማኝ አጋሮቻችን ።</h1>
                <p>Our mission is to help your business grow, especially financially. You can consult anytime</p>
                <div className="grid grid-cols-3 ">
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