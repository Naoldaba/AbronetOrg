import email from "../resources/email.png";
import mail from "../resources/mail.png";
import location from "../resources/location.png";
import name from "../resources/name.png";
import call from "../resources/call.png";


const ContactUs = () => {
    return (
        <div className="flex justify-center px-10 flex-wrap items-center gap:20 md:flex-nowrap ">
            <div className="flex flex-col gap-7 mb-20">
                <h1 className="text-2xl md:text-4xl font-bold ">Lets talk with our awesome team</h1>
                <p>Our mission is to help your business grow, especially financially. You can consult anytime</p>
                <div className="flex ">
                    <img src={call} className="w-10 h-10"/>
                    <div className="">
                         <h3 className="text-lg font-bold">Call</h3>
                         <span>0920375653</span>
                    </div>
                </div>
                <div className="flex">
                    <img src={email} className="w-10 h-10" />
                    <div className="">
                         <h3 className="text-lg font-bold">Email</h3>
                         <span>loremipsum@gmail.com</span>
                    </div>
                </div>
                <div className="flex">
                    <img src={location} className="w-10 h-10" />
                    <div className="">
                         <h3 className="text-lg font-bold">Location</h3>
                         <span>Ethiopia, Addis Ababa</span>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center w-1/2">
                <div className="">
                    <label for="name" className="text-lg">Your name</label>
                    <div className="flex my-7">
                        <img src={name} className="w-8 h-8"/>
                        <input className="border-none focus:outline-none" type="text" id="name" required placeholder="Full name here"/>
                    </div>
                    <label for="mail" className="text-lg">Your mail</label>
                    <div className="flex my-7">
                        <img src={mail} className="w-8 h-8"/>
                        <input className="border-none focus:outline-none"  type="email" id="email" placeholder="Your email address" />
                    </div>
                    <label for="message" className="text-lg">Message</label>
                    <textarea className="border-none block mt-7 mb-2 w-full h-20 resize-none focus:outline-none " id="message" placeholder="Type your message here"  ></textarea>
                    <button className="green_btn" type="submit">Send message</button>
                </div>
            </div>    
        </div>
    );
}
 
export default ContactUs;