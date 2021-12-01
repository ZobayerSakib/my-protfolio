import React from 'react';
import health1 from '../../Images/health1.png'
import health2 from '../../Images/health2.png'
import health3 from '../../Images/health3.png'
import './Product4.css'
const Product4 = () => {
    return (
        <>
            <div className='product1'>
                <div>
                    <h6><b className='projectColorCode'>Project Name :</b> Health Care24</h6>
                    <h6><b className='projectColorCode'>Project Type:</b> Static Web Application</h6>
                    <h6><b className='projectColorCode'>Category:</b>Online Clinic service</h6>

                    <h6 className='mb-3'><b className='projectColorCode'><u>Uses Technologies:</u></b></h6> <div className='productSpan'>
                        <p>ReactJs</p><p>CSS</p><p>Bootstrap</p><p>Netlify</p>
                        <p>Firebase</p>
                    </div>

                    <div className='mt-3 projectButton'>
                        <a href='https://health-care24-aaad1.web.app/'><button> <i class="fab fa-chrome"></i> Review Website</button></a>
                        <a href='https://github.com/ZobayerSakib/health-care'><button><i class=" fab fa-github"></i> Code (Client) </button></a>

                    </div>
                    <br />
                    <h6><b className='projectColorCode'>Short Description:</b></h6>
                    <p>Behind the objectives of this project are very enjoyable. In this projects, I seemed it is very easy to do but when I went to do then I feel its real test..</p>
                    <h6><b className='projectColorCode'>Short Overview:</b></h6>

                    <ul >
                        <li>React is really a powerful library</li>
                        <li>By using Javascript library, this project become easily interactive</li>
                        <li>As,this is a health related website so when people come to visit this site they will enjoy to stay</li>
                        <li>In this project, I have tried to stay focus for best output.</li>
                        <li>React router has changed this project perform, it is outstanding.</li>

                    </ul>
                </div>
                <div className='projectAside'>
                    <div>
                        <img width='100%' src={health1} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={health2} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={health3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product4;