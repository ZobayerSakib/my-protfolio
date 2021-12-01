import React from 'react';
import english1 from '../../Images/english1.png'
import english2 from '../../Images/english2.png'
import english3 from '../../Images/english3.png'
const Product3 = () => {
    return (
        <>
            <div className='product1'>
                <div>
                    <h6><b className='projectColorCode'>Project Name :</b> Online English Course</h6>
                    <h6><b className='projectColorCode'>Project Type:</b> Static Web Application</h6>
                    <h6><b className='projectColorCode'>Category:</b>Education Center</h6>

                    <h6 className='mb-3'><b className='projectColorCode'><u>Uses Technologies:</u></b></h6> <div className='productSpan'>
                        <p>Javascript</p><p>HTML</p><p>CSS</p><p>Netlify</p>
                    </div>

                    <div className='mt-3 projectButton'>
                        <a href='https://sad-almeida-5bc27e.netlify.app/'><button> <i class="fab fa-chrome"></i> Review Website</button></a>
                        <a href='https://github.com/ZobayerSakib/online-education-course'><button><i class=" fab fa-github"></i> Code (Client) </button></a>

                    </div>
                    <br />
                    <h6><b className='projectColorCode'>Short Description:</b></h6>
                    <p>Day by day , The world is developing and internet has become the most important part of our daily life. Market,Education,Medicine ect everything we collect from net By using websites. This website made for online education corses. It is a basically English learning website.</p>
                    <h6><b className='projectColorCode'>Short Overview:</b></h6>

                    <ul >
                        <li>This is an educational website.</li>
                        <li>In this website, I have used React Js, React Router, React Bootstrap, plain CSS, and so on. The routing part is naturally beautiful.</li>
                        <li>The main objective of this assignment is that show an educational online platform and how much impact can play on a website.</li>
                        <li>To easy the daily life education</li>
                        <li>Click and find the best educational platform like a child behavior.</li>

                    </ul>
                </div>
                <div className='projectAside'>
                    <div>
                        <img width='100%' src={english1} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={english2} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={english3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product3;