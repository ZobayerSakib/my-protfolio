import React from 'react';
import './Contact.css'
const Contact = () => {
    const contactForm = e => {
        e.preventDefault()
    }
    return (
        <div className='contact'>
            <div className='mt-5'>
                <h4>Contact With Me</h4>
                <p>You can anytime connect with me. I am always waiting for your Message.</p>
                <form onSubmit={contactForm}>
                    <input type="text" placeholder='name' required />
                    <br /><br />
                    <input type="email" placeholder='email' required />
                    <br /><br />
                    <textarea name="" placeholder='Message' id="" cols="30" rows="5" required></textarea>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;