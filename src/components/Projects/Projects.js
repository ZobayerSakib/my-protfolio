import React, { useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import './Projects.css'
import img1 from '../../Images/mini-bicycle.png';
import img2 from '../../Images/motorBike.png';
import img3 from '../../Images/health-care.png';
import img4 from '../../Images/english-care.png';
import img5 from '../../Images/social-worker.png';

const Projects = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='projectDiv'>
            <div className='projectDivTitle'>
                <h1>My All Projects</h1>
                <h4>Working quality is best performer and why we won't choice the quality. Quality is brand and Brand is quality.</h4>
            </div>

            <Carousel className='caroDesign'>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First Project"
                    />
                    <Carousel.Caption>
                        <h3>Mini Bicycle Park</h3>
                        <span><a href="https://bicycle-park-9ddd5.web.app/"><button>Visit the Site</button></a></span>
                        <span><a href="https://github.com/ZobayerSakib/mini-bicycle-park-server"><button>Code Link (Server) </button></a> </span> <span><a href="https://github.com/ZobayerSakib/mini-bicycle-park"><button>Code Link (Client) </button></a></span>
                        <br />

                        <Button variant="primary" onClick={handleShow}>
                            Details
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Information of the Website</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>This was an awesome journey when I started to build this site. Starting period I thought about its hidden functionality and I thought Which way I will follow to finish this website and divide those functionality part by part. If a user visits this site he/she can be happy to visit cause it is totally responsive for mobile and desktop mode.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>

                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second Project"
                    />
                    <Carousel.Caption>
                        <h3>Honda Searcher</h3>
                        <span><a href="https://eager-brahmagupta-6d0530.netlify.app/"><button>Visit the Site</button></a></span>
                        <span><a href="https://github.com/ZobayerSakib/honda-searcher"><button>Code Link (Client) </button></a></span>
                        <br />

                        <Button variant="primary" onClick={handleShow}>
                            Details
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Information of the Website</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>This is an educational website.
                                In this website, I have used React Js, React Router, React Bootstrap, plain CSS, and so on. The routing part is naturally beautiful.
                                The main objective of this assignment is that show an educational online platform and how much impact can play on a website.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third Project"
                    />
                    <Carousel.Caption>
                        <h3>Health Care</h3>
                        <span><a href="https://health-care24-aaad1.web.app/"><button>Visit the Site</button></a></span>
                        <span><a href="https://github.com/ZobayerSakib/health-care"><button>Code Link (Client) </button></a></span>
                        <br />
                        {/* 
                        <Button variant="primary" onClick={handleShow}>
                            Details
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Information of the Website</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> React is really a powerful library.
                                By using Javascript library, this project become easily interactive.
                                3.As,this is a health related website so when people come to visit this site they will enjoy to stay.

                                4.In this project, I have tried to stay focus for best output.5.React router has changed this project perform, it is outstanding.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth Project"
                    />
                    <Carousel.Caption>
                        <h3>Online Education Course</h3>
                        <span><a href="https://sad-almeida-5bc27e.netlify.app/"><button>Visit the Site</button></a></span>
                        <span><a href="https://github.com/ZobayerSakib/online-education-course"><button>Code Link (Client) </button></a></span>
                        <br />
                        {/* <Button variant="primary" onClick={handleShow}>
                            Details
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Information of the Website</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> This is an educational website.
                                In this website, I have used React Js, React Router, React Bootstrap, plain CSS, and so on. The routing part is naturally beautiful.
                                The main objective of this assignment is that show an educational online platform and how much impact can play on a website.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal> */}

                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Fifth Project"
                    />

                    <Carousel.Caption>
                        <h3>A Dedicated Team</h3>
                        <span><a href="https://social-worker-team.netlify.app/"><button>Visit the Site</button></a></span>
                        <span><a href="https://github.com/ZobayerSakib/social-worker"><button>Code Link (Client) </button></a></span>
                        <br />
                        {/* <Button variant="primary" onClick={handleShow}>
                            Details
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Information of the Website</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Here, I had explained the power of React.
                                We know that React is JS library. In this project I have used it to design easily my project code.In this project, I have tried to describe the beautiful function of react and how we can make an interactive website by using it.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Projects;