
const Footer = () => {
    return (
            <div className="bg-gray-500">
                <div className="flex flex-wrap md:flex-nowrap gap-5 px-5 justify-center">
                    <div className="w-1/2 mt-2">
                        <h1 className="text-3xl font-bold md:text-5xl mb-5">አብሮነት</h1>
                        <h2 className="text-xl">Grow your business with us</h2>
                    </div>
                    <div className="w-1/2 grid grid-cols-3 gap-20 text-xl my-10">
                        <div className="col-span-1">
                            <a><span className="block">Home</span></a>
                            <a><span className="block">Menu</span></a>
                            <a><span className="block">Services</span></a>
                            <a><span className="block">About</span></a>
                        </div>
                        <div className="col-span-1">
                            <a></a><span className="block">Finance </span>
                            <a></a><span className="block">Tax </span>
                            <a></a><span className="block">Business</span>
                        </div>
                        <div className="col-span-1">
                            <a><span className="block">About us</span></a>
                            <a><span className="block">Contact us</span></a>
                            <a><span className="block">Career</span></a> 
                        </div>
                    </div> 
                </div>
                <p className="text-center text-lg py-5">&copy; Abronet. All rights reserved</p>
            </div>
        
    );
}
 
export default Footer;