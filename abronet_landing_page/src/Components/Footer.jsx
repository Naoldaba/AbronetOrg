import Styles from "../Styles/Footer.module.css";


const Footer = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.sect1}>
                <h1>አብሮነት</h1>
                <h2>Grow your business with us</h2>
            </div>
            <div className={Styles.sect2}>
                <div>
                    <span>Home</span>
                    <span>Menu</span>
                    <span>Services</span>
                    <span>About</span>
                </div>
                <div>
                    <span>Finance consultant</span>
                    <span>Tax consultant</span>
                    <span>Business consultant</span>
                </div>
                <div>
                    <span>About us</span>
                    <span>Contact us</span>
                    <span>Career</span>
                </div>
            </div>
            <p>&copy; Abronet. All rights reserved</p>
        </div>
    );
}
 
export default Footer;