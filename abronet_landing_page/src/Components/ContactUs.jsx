import email from "../resources/email.png";
import mail from "../resources/mail.png";
import location from "../resources/location.png";
import name from "../resources/name.png";
import call from "../resources/call.png";
import Styles from "../Styles/ContactUs.module.css"

const ContactUs = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.section1}>
                <h1>Lets talk with our awesome team</h1>
                <p>Our mission is to help your business grow, especially financially. You can consult anytime</p>
                <div className={Styles.div1}>
                    <img src={call}/>
                    <div className={Styles.div2}>
                         <h3>Call</h3>
                         <span>0920375653</span>
                    </div>
                </div>
                <div className={Styles.div1}>
                    <img src={email} />
                    <div className={Styles.div2}>
                         <h3>Email</h3>
                         <span>loremipsum@gmail.com</span>
                    </div>
                </div>
                <div className={Styles.div1}>
                    <img src={location} />
                    <div className={Styles.div2}>
                         <h3>Location</h3>
                         <span>Ethiopia, Addis Ababa</span>
                    </div>
                </div>
            </div>
            <div className={Styles.section2}>
                <label for="name">Your name</label>
                <div>
                    <img src={name} />
                    <input type="text" id="name" required placeholder="Full name here"/>
                </div>
                <label for="mail">Your mail</label>
                <div>
                    <img src={mail} />
                    <input type="email" id="email" placeholder="Your email address" />
                </div>
                <label for="message">Message</label>
                <textarea id="message" placeholder="Type your message here"  ></textarea>
                <button className={Styles.message_btn} type="submit">Send message</button>
            </div>
        </div>
    );
}
 
export default ContactUs;