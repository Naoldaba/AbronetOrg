
import get_updates from "../resources/get_updates.png"

const Subscribe = () => {
    return (
        <div className=" bg-primary my-20 py-5 flex justify-center gap-2 w-2/3 mx-auto rounded-md">
            <img src={get_updates} class="hidden md:block md:ml-3 md:mt-5 md:w-1/3 md:h-1/4"/>
            <div className="flex flex-col justify-end ml-3 gap-3 md:w-2/3 pr-5 ">
                <h1 className="text-2xl text-white font-bold md:text-4xl">Subscribe now</h1>
                <span>to getour best promo first</span>
                <div className="w-full mb-5 h-14 bg-white flex justify-center items-center rounded-md">
                    <input className="text-sm pl-1 w-2/3 h-full border-none focus:outline-none rounded-md" type="email" placeholder="Your email address"/>
                    <button  className="text-xs sm:text-xs w-1/3 md:text-lg bg-gray-600 h-3/4 mr-2 text-white rounded-md" >Subscribe</button>
                </div>
            </div>    
        </div>
    );
}
 
export default Subscribe;
