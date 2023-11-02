
import get_updates from "../resources/get_updates.png"
import Styles from "../Styles/Subscribe.module.css";

const Subscribe = () => {
    return (
        <div className={Styles.greendiv}>
            <img src={get_updates}/>
            <div>
                <h1>Subscribe now</h1>
                <span>to getour best promo first</span>
                <div className={Styles.whitediv}>
                    <input type="email" placeholder="Your email address"/>
                    <button>Subscribe</button>
                </div>
            </div>    
        </div>
    );
}
 
export default Subscribe;
