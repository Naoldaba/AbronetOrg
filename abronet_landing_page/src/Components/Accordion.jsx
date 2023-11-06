import { useState } from "react";
const Accordion = ({question, answer}) => {
    const [isActive, setIsActive]= useState(false);
    return(
        <>
            <div className="accordion-item">
                <div className="accordion-question" onClick={()=>setIsActive(!isActive)}>
                    <h3>{question}</h3>
                    <span>{isActive ? "-" : "+"}</span>
                </div>
                {isActive && <div className="accordion-answer">{answer}</div>}
            </div>
            <style jsx>{`
                .accordion-question{
                    display: flex;
                    align-items: center;
                    & h3{
                        width: 80%;
                        text-align: left;
                    }
                    & span{
                        width: 20%;
                        font-size: 1.2rem;
                        text-align: right;
                    }
                }
                .accordion-question:hover{
                    cursor:pointer;
                }
            `}</style>
        </>
        
    )
    
}
 
export default Accordion;