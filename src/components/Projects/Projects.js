import './Projects.css'
import img1 from '../../Images/mini-bicycle.png'
import img2 from '../../Images/motorBike.png'
import img3 from '../../Images/english-care.png'
import img4 from '../../Images/health1.png'
import img5 from '../../Images/tour1.png'
import img6 from '../../Images/mini1.png'
import { Link } from 'react-router-dom';
const Projects = () => {


    return (

        <div className='projectsDiv'>
            <div className='projectTitle'>
                <h2>My Some Projects</h2>
                <p>Recently I have Created Some Projects. You can explore it.</p>
            </div>
            <div className='projects'>
                <div>
                    <img src={img1} alt="" /><br /><br />
                    <Link to='/product1'><button>Details</button></Link>
                </div>
                <div>
                    <img src={img2} alt="" /><br /><br />
                    <Link to='/product2'><button>Details</button></Link>
                </div>
                <div>
                    <img src={img3} alt="" /><br /><br />
                    <Link to='/product3'><button>Details</button></Link>
                </div>
                <div>
                    <img src={img4} alt="" /><br /><br />
                    <Link to='/product4'><button>Details</button></Link>
                </div>
                <div>
                    <img src={img5} alt="" /><br /><br />
                    <Link to='/product5'><button>Details</button></Link>
                </div>
                <div>
                    <img src={img6} alt="" /><br /><br />
                    <Link to='/product6'><button>Details</button></Link>
                </div>

            </div>
        </div>

    );
};

export default Projects;