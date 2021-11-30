import React from 'react';
import bannerImg from '../../Images/xossBanner.png';
import Typical from 'react-typical'
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='bannerDesign'>
            <div className='imgDesign'>
                <img src={bannerImg} alt="" />
            </div>
            <div className='bannerInfo'>
                <h1>MD.ZOBAYER HOSSAIN SAKIB</h1>
                <h3> &nbsp;
                    <span className='colorText'>
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={
                                [
                                    'Full-Stack Junior Web Developer !',
                                    1000,
                                    'Creative Content Writer !',
                                    1000,
                                    'YouTuber - Video Creator !',
                                    1000,
                                    'Designer !',
                                    1000

                                ]
                            }
                        />
                    </span>
                </h3>

                <div>
                    <Link to="files/ZobayerResume.pdf" target="_blank" download><button> <i class="fas fa-download"></i> Download Resume</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;