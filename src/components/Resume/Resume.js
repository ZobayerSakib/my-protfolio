import React from 'react';
import { Link } from 'react-router-dom';
import download from '../../Images/downloadImg.png'
import Footer from '../Footer/Footer';
import './Resume.css'

const Resume = () => {
    return (
        <div>
            <div className='resumeDiv'>
                <div>
                    <img src={download} alt="" />
                </div>
                <div>
                    <Link to="files/ZobayerResume.pdf" target="_blank" download><button> <i class="fas fa-download"></i> Download Resume</button></Link>

                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Resume;