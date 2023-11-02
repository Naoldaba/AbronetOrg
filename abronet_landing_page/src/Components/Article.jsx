import Rectangle from "../resources/Rectangle.jpg";
import Styles from "../Styles/Article.module.css";
const Article = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.section1}>
                <img src={Rectangle}/>
                <span>17-12-2020</span>
                <h3>Grow your small business to super big business with this step</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a><span>Continue reading &gt;</span></a>
            </div>
            
            <div className={Styles.section2}>
                <h1>Articles</h1>
                <div className={Styles.articles}>
                    <span>17-12-2020</span>
                    <h3>This is for you who want to start a business with with 0 capital</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <a><span>Continue reading &gt; </span></a>
                </div>
                <div>
                    <span>17-12-2020</span>
                    <h3>don't be afraid to start a business, do this step to start business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <a><span>Continue reading &gt; </span></a>
                </div>
                
            </div>
        </div>
    );
}

export default Article;