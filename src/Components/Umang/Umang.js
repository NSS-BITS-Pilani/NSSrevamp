import React from 'react';
import './Umang.scss';
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
                            <img src="/assets/Back_to_school.png" alt="Recruitment Image" style={{ margin:"0 auto"}} />
                        </Col>
                        <Col sm={{offset: 1, span: 10}} md={{offset: 2, span: 8}} lg={{offset: 1, order: 1, span: 6}} xl={{span: 5}}>
                            <h1 className="title">Umang Collection 2022</h1>
                            <div className="mx-3 mx-sm-0">
                                <p>
                                    Umang Collection is a college wide fundraiser that aims to provide quality education to the poverty-stricken students of Pilani. It is a pillar of hope and strength for more than a 100 students who've been drastically affected by the on going pandemic more than ever. As we unite to celebrate founder's day and take part in the merriment of different cultures, let us take a minute to remember the little ones with head full of dreams, the ones who wish for a different reality, the ones who rely on us to continue their education. This Umang Collection gift someone the ability to make their dreams come true. After all, it starts with you.
                                </p>
                                <div className="buttonsR">
                                <div className="button_div m-2 m-sm-3">
                                    <a href="https://nssbitspilani.wixsite.com/umangcollection" target="_blank">
                                        <span className="button">
                                            Read more
                                        </span>
                                    </a>
                                </div>
                                <div className="button_div m-2 m-sm-3">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScmU0QOMdi3_TT5ETIAwaxe153J_Vq49c94tI-NJQZmBy5ZPg/viewform" target="_blank">
                                        <span className="button">
                                            Donate Now
                                        </span>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    );
};

export default Recruitments;
