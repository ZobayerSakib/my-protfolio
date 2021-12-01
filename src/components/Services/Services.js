import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <div className='servicesSection'
            data-aos="zoom-in-left "
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"

        >
            <div className='servicesTitle'>
                <h2>I Provide some Services</h2>
                <p>I'm sharing my skills with you for better output.</p>

            </div>
            <div className='services container'>
                <div>
                    <div className='differentService'>
                        <p><i class="fa-2x fas fa-layer-group"></i></p>
                        <h3>Web Design</h3>
                        <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='differentService'>
                        <p><i class="fa-2x fas fa-video"></i></p>
                        <h3>Video Editing</h3>
                        <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='differentService'>
                        <p><i class="fa-2x fas fa-palette"></i></p>
                        <h3>Web Development</h3>
                        <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='differentService'>
                        <p><i class="fa-2x fas fa-file-alt"></i></p>
                        <h3>Content Writing</h3>
                        <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='differentService'>
                        <p><i class="fa-2x fas fa-people-arrows"></i></p>
                        <h3>Consulting</h3>
                        <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='differentService'>
                        <p><i class="fa-2x fas fa-head-side-virus"></i></p>
                        <h3>Idea Generation</h3>
                        <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;