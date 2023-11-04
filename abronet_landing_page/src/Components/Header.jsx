import favicon from "../resources/favicon.jpg";
import Styles from "../Styles/nav.module.css";
import Hamburger from "./Hamburger";
import { useState } from "react";
const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <>
            <div className="header">
                <div className={Styles.logo}>
                    <img src={favicon} alt="logo" width="124px" height="124px"/>
                </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Services</li>
                        <li>About Us</li>
                    </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
                </div>
                <div className="login_register">
                    <button id="login">Log in</button>
                    <button id="register">Create account</button>
                </div>
            </div>
            <style jsx>{`
                body{
                    overflow-x: hidden;
                }
                .header{     
                    position: relative;              
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 18px;
                    
                    & .menu{
                        display: flex;
                    }
                    & .menu ul{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        & li{
                            list-style-type: none;
                        }
                
                    }
                    & .login_register{
                        display: flex;
                        width: 40%;
                        flex-wrap: wrap;
                        & button{ 
                            width: 40%;
                            height: 60px;
                            margin: 0 5px;
                            border-radius: 8px;
                        }
                        & #login{
                            color: #01890D;
                            font-weight: 600;
                            border: 1px solid #01890D;
                            background-color: white;
                        }
                        & #register{
                            background-color: #01890D;
                            color: #FCFCFC;
                            border: none;       
                        }
                    }
                    & .hamburger{
                        display: none;
                    }
                   
                }
                @media only screen and (max-width: 1200px){
                    .header .hamburger{
                        display: flex;
                        padding-top: 10px;
                        margin-left: 10px;
                        
                    }

                    .header .menu{   
                        order: 3; 
                    }

                    .header .menu ul{
                        display: ${hamburgerOpen ? 'block' : 'none'};
                        background-color: #01890D;
                        width:80%;
                        margin-top: 100px;
                        position: absolute;      
                        left: 0;
                        z-index: 10;
                        & li{
                            color: white;
                            margin: 20px;
                        }
                    }
                }
            `}</style>
        </>
        
    );
}

export default Header;