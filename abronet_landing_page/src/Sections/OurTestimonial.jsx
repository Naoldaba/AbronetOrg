import { Accordion } from "flowbite-react";
import TestimonySlider from "../Components/TestimonySlider";
import Rectangle from "../resources/Rectangle.jpg";
import { SliderData } from "../utils/SliderData";

const OurTestimonial = () => {
    return (
        <div className="mb-14">
            <div className="flex justify-center items-center px-10 mb-14">
                <TestimonySlider slides={SliderData} className=""/>
                <div className="flex justify-center">
                    <img src={Rectangle} className="w-3/4"/>
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl px-10 md:text-4xl font-bold mb-10">Frequently asked questions</h1>
                <div className="w-2/3 mx-auto">
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title className="font-bold text-lg">
                                What is equb
                            </Accordion.Title>
                            <Accordion.Content>
                            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="font-bold text-lg">
                            What is your favorite template from BRIX Template?
                            </Accordion.Title>
                            <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a magnam nihil vero beatae quidem ipsum itaque dignissimos eius illo.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="font-bold text-lg">
                            How do you clone a template from the Showcase?
                            </Accordion.Title>
                            <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni architecto cupiditate voluptates pariatur?
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="font-bold text-lg">
                            Why is BRIX Templates the best Webflow agency?
                            </Accordion.Title>
                            <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore in unde at accusantium eligendi ea asperiores provident!
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </div>
        
    );
}
 
export default OurTestimonial;