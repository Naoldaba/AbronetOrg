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
            <div className=''>
                <h1 className="text-2xl md:text-5xl font-bold mb-10">Our Testimonials</h1>
                {slides.map((slide,index)=>{
                    return (
                        <div
                            key={index}
                        >
                            {index===current && (<h3 className="text-xl font-bold">{slide.name}</h3>)}
                            {index===current && (<p className="">{slide.testimony}</p>)}
                            {index===current && (<span className="block text-gray-500 text-lg mt-5">{slide.position}</span>)}
                        </div>
                    )
                })}
                <div className="flex gap-5 mt-10 justify-end">
                    <img src={back} className="slideicon" onClick={prevSlide} />
                    <img src={forward} className="slideicon" onClick={nextSlide}/>
                </div>
            </div>
        </>
        
    );
}
 
export default TestimonySlider;