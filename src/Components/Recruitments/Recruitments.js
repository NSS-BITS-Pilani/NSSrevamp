import React from 'react';
import './Recruitments.scss';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Recruitments = () => {
    return (
        <Fade>
            <div className="recruitments">
                <Container fluid>
                    <Row className="recruitmentsBody">
                        <Col xs={{offset: 1, span: 10}} md={{offset: 2, span: 8}}  lg={{offset: 0, span: 5, order: 2}}>
                            <img src="/assets/vecteezy_employee-recruitment-concept_.jpg" alt="Recruitment Image" />
                        </Col>
                        <Col sm={{offset: 1, span: 10}} md={{offset: 2, span: 8}} lg={{offset: 1, order: 1, span: 6}} xl={{span: 5}}>
                            <h1 className="title">NSS is Recruiting!</h1>
                            <div className="mx-3 mx-sm-0">
                                <p>
                                    NSS recruitments are ON! All interested candidates are required to fill the NSS recuitments form mentioned below before 19th November, 2021. Those interested in NSS D3 department are also required to fill the 2nd form of NSS D3 recruitments besides the main NSS recruitments form by clicking on the button mentioned below before 19th November, 2021. 
                                </p>
                                <div className="button_div m-2 m-sm-3">
                                    <a href="https://forms.gle/GAKi8464ENXse6ex5" target="_blank">
                                        <span className="button">
                                            NSS recruitments
                                        </span>
                                    </a>
                                </div>
                                <div className="button_div m-2 m-sm-3">
                                    <a href="https://forms.gle/CHcsRtcR8knYRxk89" target="_blank">
                                        <span className="button">
                                            NSS D3 recruitments
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    For more info on the NSS Departments, visit {}
                                    <NavLink to={"/departments"} className="link">NSS Departments</NavLink>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    );
};

export default Recruitments;
