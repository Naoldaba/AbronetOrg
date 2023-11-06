import forward from "../resources/forward.png"
import back from "../resources/back.png";
import {useState} from 'react';

const TestimonySlider = ({slides}) => {
    const [current, setCurrent]=useState(0);
    const length=slides.length;

    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0: current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0? length-1: current-1)
    }

    if (!Array.isArray(slides) || slides.length<=0){
        return null;
    }

    return (
        <>
            <div className='testimonies'>
                <h1>Our Testimonials</h1>
                {slides.map((slide,index)=>{
                    return (
                        <div
                            key={index}
                        >
                            {index===current && (<h3 className="name">{slide.name}</h3>)}
                            {index===current && (<p className="testimony">{slide.testimony}</p>)}
                            {index===current && (<span className="">{slide.position}</span>)}
                        </div>
                    )
                })}
                <div className="btns">
                    <img src={back} className="left-arrow" onClick={prevSlide} />
                    <img src={forward} className="right-arrow" onClick={nextSlide}/>
                </div>
            </div>
            <style jsx>{`
                & .testimonies{
                    position: relative;
                    width: 50%;
                    height: 100%;
                    margin-bottom: 30px;
                    & h1{
                        font-size: 48px;
                    }
                    & div h3{
                        font-size: 24px;
                    }
                    & div p,div span {
                       font-size: 18px;
                       font-weight: 400;
                       color:rgba(196, 196, 196, 1)
                    }
                    & .btns{
                        position: absolute;
                        right: 40px;
                        bottom: -4px;
                        & img{
                            margin: 0 10px;
                            width: 1.9rem;
                        }
                    }
                    & .btns:hover{
                        cursor: pointer;
                    }
                }
            `}</style>
        </>
        
    );
}
 
export default TestimonySlider;