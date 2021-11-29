import React from 'react';
import download from '../../Images/downloadImg.png'
import './Resume.css'

const Resume = () => {
    return (
        <div className='resumeDiv'>
            <div>
                <img src={download} alt="" />
            </div>
            <div>
                <a href='https://drive.google.com/file/d/1ISLA6FCCAnyiLP14YB1rJNmdiLkwNkV6/view?usp=sharing'><button>Download Resume</button></a>
            </div>
        </div>
    );
};

export default Resume;