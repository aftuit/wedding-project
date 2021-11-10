import React from 'react';
import "./scss/Xizmatlar.scss";
import Picture1 from './images/picture1.png';
import Picture2 from './images/picture2.png';
import Picture3 from './images/picture3.png';
import Picture4 from './images/picture4.png';
import Picture5 from './images/picture5.png';
import Picture6 from './images/picture6.png';
import Picture7 from './images/picture7.png';
import { Col, Container, Row } from 'reactstrap';

const Xizmatlar = () => {
    return (
        <>
            <div className="container-fluid p-5 bg-light mt-5">
                <Container>
                    <Col md="12" className="text-center">
                        <h2>Portfolio</h2>
                        <p className="col-md-6 offset-md-3 text-center">Sizga qulay bo'lgan xizmatlardan foydalinib vaqtingizni va pulingizni tejash imkoni</p>
                    </Col>
                    
                    <Row className="mt-5">
                        <Col md="6">
                            <Row>
                                <Col md="6">
                                    <div className="page">
                                        <img src={Picture1} alt=""/>
                                        <h3 className="card-img-overlay">To'yxona</h3>
                                        <h6 className="card-img-overlay">500 kishilik</h6>
                                        <Col md="4" className="card-img-overlay offset-md-3">
                                            <a className="text-decoration-none" href="#">
                                                <span className="badges">Ko'rish</span>
                                            </a>
                                        </Col>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <Col md="12">
                                        <div className="page0">
                                            <img src={Picture2} alt=""/>
                                            <div className="card-img-overlay">
                                                <h5>Boshlovchilar</h5>
                                                <p>500 kishilik</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="12">
                                        <div className="page1">
                                            <img className="mt-3" src={Picture3} alt=""/>
                                            <div className="card-img-overlay">
                                                <h5>Stilist</h5>
                                                <p>Soch turmagi va liboslar</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                            </Row>
                            <Col md="12">
                                <div className="page2">
                                    <img className="mt-3" src={Picture4} alt=""/>
                                    <div className="card-img-overlay">
                                        <h5>Fotostudio</h5>
                                        <p>Sifatli foto va video mahsulotlar</p>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                        <Col md="6">
                            <Col md="12">
                                <div className="page3">
                                    <img className="" src={Picture5} alt=""/>
                                    <div className="card-img-overlay">
                                        <h5>Fotostudio</h5>
                                        <p>Sifatli foto va video mahsulotlar</p>
                                    </div>
                                </div>
                            </Col>
                            <Row>
                                <Col md="6" className="mt-3">
                                    <div className="page4">
                                        <img src={Picture6} alt=""/>
                                        <div className="card-img-overlay">
                                            <h5>Uzuklar</h5>
                                            <p>To'yxona va banketlarni bezash</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6" className="mt-3">
                                    <div className="page4">
                                        <img src={Picture7} alt=""/>
                                        <div className="card-img-overlay">
                                            <h5>Sahna bezagi</h5>
                                            <p>To'yxona va banketlarni bezash</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Col md="12" className="text-center mt-5">
                        <button className="button1">Barchasini ko'rish</button>
                    </Col>
                </Container>
            </div>
        </>
    );
};

export default Xizmatlar;