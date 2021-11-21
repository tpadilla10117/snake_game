import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import paperPlane from '../../../assets/icons/paperPlane.svg';
import './EmailForm.scss';

const EmailForm = () => {

/* Logic for Handling Form state & values: */
    const formRef = useRef();
    const [ emailSent, setEmailSent ] = useState(false);
    const [ buttonText, setButtonText ] = useState("Submit")

    const handleSubmit = (event) => {
        event.preventDefault();

    /* emailjs logic: */
        emailjs.sendForm('service_2r2pxvp', 'template_1u4c6dc', formRef.current, 'user_ssQeZXemBZwlrNSJZ8wgx')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });

      setButtonText("Thank you for sending a message!  I'll get back to you ASAP!");

    }

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder="Message" name="message" /* style={ {backgroundColor: darkMode && "#333"}} *//>
            {!emailSent ? 
                <button className="contact-button">
                    <img className="formBtn-img" src={paperPlane} alt=""/>{/* {!emailSent ? "Submit" : emailSent && buttonText} */}{buttonText}
                </button> 
                
                : 
                
                <p>{emailSent && buttonText}</p>
        
            }
                
                
            </form>
        
        </div>
    );
};

export default EmailForm;