import { Card, Col, Row } from 'react-bootstrap';
import './Projects.css'
import img1 from '../../Images/mini-bicycle.png'
const Projects = () => {


    return (

        <div >
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                {/* <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    );
};

export default Projects;