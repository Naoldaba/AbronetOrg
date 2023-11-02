import favicon from "../resources/favicon.jpg";
import Styles from "../Styles/nav.module.css";
const Nav = () => {
    return (
        <div className={Styles.header}>
            <div className={Styles.logo}>
                <img src={favicon} alt="logo" width="124px" height="124px"/>
            </div>
            <div className={Styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Services</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={Styles.login_register}>
                <button id={Styles["login"]}>Log in</button>
                <button id={Styles['register']}>Create account</button>
            </div>
        </div>
    );
}
 
export default Nav;