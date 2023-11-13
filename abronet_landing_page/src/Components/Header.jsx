import favicon from "../resources/favicon.jpg";
import Hamburger from "./Hamburger";
import { useState } from "react";
const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <>
            <div>
                <div className="flex justify-around items-center overflow-x-hidden mt-5 md:mt-0">
                    <div className="w-20 md:w-40">
                        <img src={favicon} alt="logo" className="w-full"/>
                    </div>
                    <div className="order-3  md:flex md:justify-between md:order-2">
                        <ul className="hidden md:flex md:justify-between md:gap-5 md:text-lg lg:text-2xl">
                            <li className="hover:cursor-pointer"><a>Home</a></li>
                            <li className="hover:cursor-pointer"><a>Menu</a></li>
                            <li className="hover:cursor-pointer"><a>Services</a></li>
                            <li className="hover:cursor-pointer"><a>About Us</a></li>
                        </ul>
                        <div className="md:hidden" onClick={toggleHamburger}>
                            <Hamburger  isOpen={hamburgerOpen}/>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className=" text-sm w-15 h-10 border-2 border-primary md:w-32 px-3 py-2 rounded-md">Log in</button>
                        <button className="text-sm bg-primary text-white px-3 md:w-32 rounded-md w-20 h-10 ">Create account</button>
                    </div>
                </div>
                <div id="dropdown" className="hidden mt-5 bg-primary py-5 md:hidden">
                    <ul className="px-5 text-xl text-white flex flex-col gap-4 items-center ">
                        <li className="hover:cursor-pointer"><a>Home</a></li>
                        <li className="hover: cursor-pointer"><a>Menu</a></li>
                        <li className="hover: cursor-pointer"><a>Services</a></li>
                        <li className="hover: cursor-pointer"><a>About Us</a></li>
                    </ul>
                </div>
           
            </div>
            <style jsx>{`
                #dropdown{
                    display: ${hamburgerOpen ? 'block': 'hidden'}
                }
            `}</style>
        </>
        
        
    );
}

export default Header;