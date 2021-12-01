import React from 'react';
import mini1 from '../../Images/mini-bicycle.png'
import mini2 from '../../Images/mini1.png'
import mini3 from '../../Images/mini2.png'
import './Product6.css'
const Product6 = () => {
    return (
        <>
            <div className='product1'>
                <div>
                    <h6><b className='projectColorCode'>Project Name :</b> Mini Bicycle Park</h6>
                    <h6><b className='projectColorCode'>Project Type:</b> Full-Stack Web Application</h6>
                    <h6><b className='projectColorCode'>Category:</b> Online Buying Store</h6>

                    <h6 className='mb-3'><b className='projectColorCode'><u>Uses Technologies:</u></b></h6> <div className='productSpan'>
                        <p>ReactJs</p><p>NodeJs</p><p>ExpressJs</p><p>Css</p><p>Bootstrap</p><p>MongoDB</p>
                        <p>Firebase </p><p>React Router</p><p>Heroku</p>
                    </div>

                    <div className='mt-3 projectButton'>
                        <a href='https://bicycle-park-9ddd5.web.app/'><button> <i class="fab fa-chrome"></i> Review Website</button></a>
                        <a href='https://github.com/ZobayerSakib/mini-bicycle-park'><button><i class=" fab fa-github"></i> Code (Client) </button></a>
                        <a href='https://github.com/ZobayerSakib/mini-bicycle-park-server'><button> <i class="fab fa-github"></i> Code (Server) </button></a>
                    </div>
                    <br />
                    <h6><b className='projectColorCode'>Short Description:</b></h6>
                    <p>This was an awesome journey when I started to build this site. Starting period I thought about its hidden functionality and I thought Which way I will follow to finish this website and divide those functionality part by part. If a user visits this site he/she can be happy to visit cause it is totally responsive for mobile and desktop mode.</p>
                    <h6><b className='projectColorCode'>Short Overview:</b></h6>

                    <ul >
                        <li>It is a responsive Website for a better user experience</li>
                        <li>The main objective of this site is that a user can buy Bicycle online easily</li>
                        <li>I have implemented here a review system so that a user can post his/her comment</li>
                        <li>A general user only see a specific function that is needed for his/her work on the site</li>
                        <li>By this site, we have used MongoDB for server site connection and a user can explore another time for when he wants without again registration</li>

                    </ul>
                </div>
                <div className='projectAside'>
                    <div>
                        <img width='100%' src={mini1} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={mini2} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={mini3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product6;