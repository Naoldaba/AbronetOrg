import forward from "../resources/forward.png"
import back from "../resources/back.png";
import Rectangle from "../resources/Rectangle.jpg";
import Styles from "../Styles/OurTestimonial.module.css"
const OurTestimonial = () => {
    return (
        <div>
            <div className={Styles.main}>
                <div className={Styles.testimonies}>
                    <h1>Our Testimonials</h1>
                    <p>With this platform, it really helps my company when it struggles and helps our company to be more planned, not only providing financial assistance but also providing direction for our company in the future.</p>
                    <h3>Abebe Kebede</h3>
                    <p>Ceo of Ngatmobilung</p>
                    <div className={Styles.btns}>
                        <img src={back} />
                        <img src={forward}/>
                    </div>
                </div>
                <div className={Styles.pic}>
                    <img src={Rectangle} />
                </div>
            </div>
            <div className={Styles.frequentlyasked}>
                <h1>Frequently asked questions</h1>
                <div className={Styles.questions}>
                    <h3>What is Equb</h3>
                    <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                    <div>
                        <span>What is your favorite template from BRIX Template?</span>
                        <span>+</span>
                    </div>
                    <div>
                        <span>How do you clone a template from the Showcase?</span>
                        <span>+</span>
                    </div>
                    <div>
                        <span>Why is BRIX Templates the best Webflow agency?</span>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default OurTestimonial;