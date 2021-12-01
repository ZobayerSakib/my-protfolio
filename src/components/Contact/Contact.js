import './Contact.css'
const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className='contact'>
            <div className='mt-5'>
                <h4>Contact With Me</h4>
                <p>You can anytime connect with me. I am always waiting for your Message.</p>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder='name' name='name' required />
                    <br /><br />
                    <input type="email" placeholder='email' name='email' required />
                    <br /><br />
                    <textarea name="message" placeholder='Message' id="" cols="30" rows="5" required></textarea>
                    <br /><br />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;