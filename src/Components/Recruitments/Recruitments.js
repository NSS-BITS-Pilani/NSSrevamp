import React from 'react';
import './Recruitments.scss';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Recruitments = () => {
    return (
        <Fade>
            <div className="recruitments">
            <img style={{ position: "absolute", right: "-13%", top: "15rem", }} className="webImage" src="/assets/ellipse_yellow.svg"></img>
            <img style={{ position: "absolute", left: "0%", top: "10rem",}} className="webImage" src="/assets/magenta_blob.svg"></img>
                <Container>
                    <Row className="recruitmentsBody">
                        <Col xs={{offset: 1, span: 10}} md={{offset: 2, span: 8}}  lg={{offset: 0, span: 5, order: 2}}>
                            <img src="/assets/vecteezy_employee-recruitment-concept_.jpg" alt="Recruitment Image" style={{zIndex:"-5"}} />
                        </Col>
                        <Col sm={{offset: 1, span: 10}} md={{offset: 2, span: 8}} lg={{offset: 1, order: 1, span: 6}} xl={{span: 5}}>
                            <h1 className="title">NSS is Recruiting!</h1>
                            <div className="mx-3 mx-sm-0">
                                <p>
                                    NSS recruitments are ON! All interested candidates are requested to fill the NSS recuitments form mentioned below before 19th November, 2021. Those interested in NSS D3 department can also fill the 2nd form before 19th November, 2021. 
                                </p>
                                <div className="buttonsR">
                                <div className="button_div m-2 m-sm-3">
                                    <a href="http://tiny.cc/NSS_Form_21-22" target="_blank">
                                        <span className="button">
                                            NSS recruitments
                                        </span>
                                    </a>
                                </div>
                                <div className="button_div m-2 m-sm-3">
                                    <a href="https://forms.gle/h6KwCZHDbgy3PNAK7" target="_blank">
                                        <span className="button">
                                            NSS D3 recruitments
                                        </span>
                                    </a>
                                </div>
                                </div>
                                <p>
                                    For more info on the {}
                                    <NavLink to={"/departments"} className="link">NSS Departments</NavLink>
                                    {} and the {}
                                    <NavLink to={"/events"} className="link">NSS Events</NavLink> conducted annually, click the respective links.
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
