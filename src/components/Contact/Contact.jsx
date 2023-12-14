import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";



function Contact() {
  const onChange =() =>{};
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6gssqpt', 'template_yujfo1d', form.current, '6wWv7FZtMEYX5OEvS')
      .then((result) => {
          console.log(result.text);
          console.log("message sent ✅")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    
    <div id="contact" className="container m-auto mt-16 mb-16">         

      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
      <div className="left flex-1">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102154.45697257644!2d10.120236827830878!3d36.85859626360447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbde59c36e41%3A0xcaf5294a805ae134!2sPizzaiolo!5e0!3m2!1sfr!2stn!4v1700176675796!5m2!1sfr!2stn" style={{'width':'100%','height':'360px','border':'solid'}}></iframe>
      </div>
        

        <div className="right flex-1  " >
          <form            
            data-aos="zoom-in"            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[75%] mx-auto"
            ref={form} onSubmit={sendEmail}
            style={{'height':'360px'}}>
              
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g.   Pizzaiolo@email.com"
              name="from_email"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Pizzaiolo"
              name="from_name"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              cols="50"
              rows="4"
              placeholder="Write your message"
              name="message"
              
            />
            <ReCAPTCHA sitekey="6Le7YwgoAAAAAP7end1gpO-H34KUw6rPW6G3iLvZ" onChange={onChange} style={{'border':'1px solid purple','width':'79.6%','height':'78px','borderRadius':'4px'}}/>
            <button type="submit" action="sendEmail"
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
                
            >             
              send
            </button>



          </form>
          
        </div>
      </div>

              
</div>  
  
);

};

export default Contact;