import './index.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const emailForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_679jm4e', 'template_kq3me78', emailForm.current, 'odKZw4yYlFpCBOuFy')
            .then((result) => {
                alert('Message sent!')
                emailForm.reset()
            }, (error) => {
                alert('Failed to send message, please try again.');
            });
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <p> Contact information...</p>

                    <div className='contact-form'>
                        <form ref={emailForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='name' required />
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='email' required />
                                </li>

                                <li>
                                    <input type='text' name='subject' placeholder='subject' required />
                                </li>

                                <li>
                                    <textarea name='message' placeholder='message' required />
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value='SEND' required />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact