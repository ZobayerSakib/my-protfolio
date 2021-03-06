import React from 'react';
import './Footer.css'
const Footer = () => {
    const contactForm = e => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className='footer' >
            <div className='mt-5'>
                <h4>Contact With Me</h4>
                <p>You can anytime connect with me. I'm always waiting for your Message.</p>
                <form onSubmit={contactForm}>
                    <input type="text" placeholder='name' required />
                    <br /><br />
                    <input type="email" placeholder='email' required />
                    <br /><br />
                    <textarea name="" placeholder='Message' id="" cols="30" rows="5" required></textarea>
                    <br /><br />
                    <input type="submit" value="Send" />
                </form>
            </div>
            <hr />
            <div className='mt-3 text-center footerPara'>
                <p>&copy;All Rights Reserved by Zobayer Sakib</p>
            </div>

        </div>
    );
};

export default Footer;