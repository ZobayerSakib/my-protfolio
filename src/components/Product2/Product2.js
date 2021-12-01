import React from 'react';
import honda1 from '../../Images/honda1.png'
import honda2 from '../../Images/honda2.png'
import honda3 from '../../Images/honda3.png'
import './Product.css'
const Product2 = () => {
    return (
        <>
            <div className='product1'>
                <div>
                    <h6><b className='projectColorCode'>Project Name :</b> Honda House</h6>
                    <h6><b className='projectColorCode'>Project Type:</b> Static Web Application</h6>
                    <h6><b className='projectColorCode'>Category:</b> Online Buying Store</h6>

                    <h6 className='mb-3'><b className='projectColorCode'><u>Uses Technologies:</u></b></h6> <div className='productSpan'>
                        <p>HTML</p><p>CSS</p><p>Bootstrap</p><p>Netlify</p>

                    </div>

                    <div className='mt-3 projectButton'>
                        <a href='https://eager-brahmagupta-6d0530.netlify.app/'><button> <i class="fab fa-chrome"></i> Review Website</button></a>
                        <a href='https://github.com/ZobayerSakib/honda-searcher'><button><i class=" fab fa-github"></i> Code (Client) </button></a>

                    </div>
                    <br />
                    <h6><b className='projectColorCode'>Short Description:</b></h6>
                    <p>This is a Honda House, a Honda factory based website. Every part of the website is very simple and also using common and easy codes.</p>
                    <h6><b className='projectColorCode'>Short Overview:</b></h6>

                    <ul >
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab?</li>


                    </ul>
                </div>
                <div className='projectAside'>
                    <div>
                        <img width='100%' src={honda1} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={honda2} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={honda3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product2;