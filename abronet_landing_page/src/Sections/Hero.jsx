
import Rectangle from "../resources/Rectangle.jpg"
import tick from "../resources/tick.png"
const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-secondary to-secondary">
            <div className="flex justify-center flex-wrap my-20 md:flex-nowrap md:justify-around md:items-center mx-10 gap-10 ">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-6xl font-bold mb-14">አብሮነት የካፒታል ማመቻቸት እና የስልጠና ማዕከል ኃለ/የተ/የግል ማኅበር</h1>
                    <p>አብሮነት ከተለያዩ የሙያ ዘርፍና የሕይወት ልምድ ያላቸው፤አብሮ በመሠራት የሚያምኑ እንዲሁም ለሰዎች የሥራ ዕድልን በመፍጠር ፍላጎት ባላቸው ግለሰቦች ስብስብ የተመሰረተ ነው፡፡</p>
                    <button className="green_btn mt-5 ">Get Started</button>
                </div>
                <div className=" w-1/2 relative ">
                    <img src={Rectangle} className=" lg:w-2/3 "/>
                    <div className="tags top-20 -left-10">
                        <img  src={tick} alt="vector image" class="tick"/>
                        <span className="text-xs pl-2">ታማኝ እና ቀልጣፋ</span>
                    </div>
                    <div className="tags bottom-3 right-0">
                        <img  src={tick} alt="vector image" className="tick"/>
                        <span className="text-xs pl-2">ከዘመኑ ጋር ይዘምኑ</span>   
                    </div>
                </div>
            </div>
        </div>
       
        
        
        
    );
}
 
export default Hero;