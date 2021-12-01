import React from 'react';
import tour1 from '../../Images/tour1.png'
import tour2 from '../../Images/tour2.png'
import tour3 from '../../Images/tour3.png'
import './Product5.css'
const Product5 = () => {
    return (
        <>
            <div className='product1'>
                <div>
                    <h6><b className='projectColorCode'>Project Name :</b> Tour Hut</h6>
                    <h6><b className='projectColorCode'>Project Type:</b> Full-Stack Web Application</h6>
                    <h6><b className='projectColorCode'>Category:</b> Tourism,travelling , Hotel Booking</h6>

                    <h6 className='mb-3'><b className='projectColorCode'><u>Uses Technologies:</u></b></h6> <div className='productSpan'>
                        <p>ReactJs</p><p>NodeJs</p><p>ExpressJs</p><p>Css</p><p>Bootstrap</p><p>MongoDB</p>
                        <p>Firebase </p><p>React Router</p><p>Heroku</p>
                    </div>

                    <div className='mt-3 projectButton'>
                        <a href='https://tour-hut.web.app/'><button> <i class="fab fa-chrome"></i> Review Website</button></a>
                        <a href='https://github.com/ZobayerSakib/tour-hut-client'><button><i class=" fab fa-github"></i> Code (Client) </button></a>
                        <a href='https://github.com/ZobayerSakib/tour-hut-server'><button> <i class="fab fa-github"></i> Code (Server) </button></a>
                    </div>
                    <br />
                    <h6><b className='projectColorCode'>Short Description:</b></h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium non explicabo architecto magni voluptatum unde, veniam est assumenda accusamus quaerat ad, rerum libero sequi, vero fuga odio ipsum molestiae quam ex culpa beatae. Delectus, neque quibusdam maxime cumque sequi in?</p>
                    <h6><b className='projectColorCode'>Short Overview:</b></h6>

                    <ul >
                        <li>As, It was a complex project so firstly I have devided the project work by single portion</li>
                        <li>The best parts of this project were using mongodb ,heroku and firebase hosting.</li>
                        <li>In this project. There had some critical pasts and these were to connect server site with client site,error moments,code optimize were tough to maintain.</li>
                        <li>In this project, a user when he will visit this site ,will say it is standard cause the purposes of the were totally for user better experience.</li>
                        <li>For better user experience, this project is fully responsive. Mobile and Desktop user will feel this test.</li>

                    </ul>
                </div>
                <div className='projectAside'>
                    <div>
                        <img width='100%' src={tour1} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={tour2} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={tour3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product5;