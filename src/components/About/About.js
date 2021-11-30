import React from 'react';
import aboutImg from '../../Images/aboutSection.jpg'
import './About.css'
const About = () => {
    return (
        <div id='about' data-aos="zoom-in-down" data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" className='aboutDiv container'>

            <div >
                <h3>About Zobayer Sakib</h3>
                <h5>@A Junior Full-stack Web Developer | Content Writer</h5>
                <p>I'm a Junior Full-stack Web developer who loves to develop eye-catching projects and try to do the best portion of them.

                    Coding is my passion. I'm exploring new things of Web development every day with research and curiosity. The whole day, I try to find out different web technology tools & Learn from them! I’m a highly curious and dedicated person, and I like the work that is challenging to me and gives me a different taste and direction.</p>
            </div>
            <div >
                <img src={aboutImg} alt="" />
            </div>
        </div>
    );
};

export default About;