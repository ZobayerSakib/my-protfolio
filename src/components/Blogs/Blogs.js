import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blogs.css'

import blog1 from '../../Images/blog1.jpg'
import blog2 from '../../Images/blog2-sagek.jpg'
import blog3 from '../../Images/blog3-bandarban.jpg'
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <div className='blogsDiv' data-aos="fade-up "
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <div className='blogTitle'>
                    <h2>My Blogs <span><h4>Coming Soon</h4></span></h2>

                    <h6>Every Time I love to travel. Travelling is is my passion and love.</h6>
                </div>
                <CardGroup>
                    <Card


                    >
                        <Card.Img variant="top" src={blog1} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Cox's Bazar Awesome Moments</Card.Title>
                            <Card.Text className='context'>
                                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town,
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={blog2} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Sajek Valley Tour Heaven</Card.Title>
                            <Card.Text className='context'>
                                Sajek Valley is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.

                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card >
                        <Card.Img variant="top" src={blog3} />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Bandarban City Travel</Card.Title>
                            <Card.Text className='context'>
                                Bandarban, is a district in South-Eastern Bangladesh, and a part of the Chittagong Division. It is one of the three hill districts of Bangladesh and a part of the Chittagong Hill Tracts, the others being Rangamati District and Khagrachhari District.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;