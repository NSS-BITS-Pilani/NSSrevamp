import React from 'react';
import './Recruitments.scss';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Recruitments = () => {
    return (
        <Fade>
            <div className="recruitments">
                <Container fluid>
                    <Row className="recruitmentsBody">
                        <Col lg={{order: 2, span: 5}}>
                            <img src="/assets/vecteezy_employee-recruitment-concept_.jpg" alt="Recruitment Image" />
                        </Col>
                        <Col lg={{order: 1, span: 5, offset: 1}}>
                            <h1>NSS is Recruiting!</h1>
                            <p className="mt-3">
                                NSS recruitments are ON. Interested candidates are required to fill the form mentioned below before 19th November, 2021. Those interested in NSS D3 can also fill the second form. 
                            </p>
                            <div className="button_div">
                                <a href="https://forms.gle/GAKi8464ENXse6ex5" target="_blank">
                                    <span className="button">
                                        Click here to apply
                                    </span>
                                </a>
                            </div>
                        {/* <Col md={{offset: 2, span: 8}}> */}
                        {/* </Col> */}
                        {/* <Col md={{offset: 2, span: 8}}>
                            <Alert variant="danger">
                                NSS recruitments are ON!! Interested candidates are required to fill the form mentioned below between 11th Nov, 2021 and 19th Nov, 2021.
                                <br />
                                NSS D3 recruitments form link is only meant for candidates who have filled NSS D3 as their preferrence for the NSS departments.
                            </Alert>
                        </Col> */}
                        {/* <Col md={{offset: 2, span: 8}}> */}
                            {/* <h2>NSS recruitment forms</h2>
                            <h3 className="mt-2">Preference filling form for NSS Departments</h3>
                            <p className="mt-1">
                                Anyone seeking to be a part of NSS BITS Pilani is mandatorily required to fill this form within the above mentioned deadline:- {}
                                
                            </p>
                            <h3 className="mt-3">NSS D3 recruitment form</h3>
                            <p className="mt-1">
                                This form is meant for only those who chose NSS D3 in their preference for departments:- {}
                                <a href="https://forms.gle/CHcsRtcR8knYRxk89" target="_blank">NSS D3 Recruitments Form</a>
                            </p> */} 
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    );
};

export default Recruitments;
