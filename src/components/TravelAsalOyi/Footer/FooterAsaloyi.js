import React from 'react';
import { Col, Row } from 'reactstrap';
import './scss/FooterAsaloyi.scss';
import Phone1 from './images/phone1.png';
import Phone2 from './images/phone2.png';
import Email from './images/email.png';
import Facebook from './images/facebook.png';
import Instagram from './images/instagram.png';
import Youtube from './images/youtube.png';
import Telegram from './images/telegram.png';

const FooterAsaloyi = () => {
    return (
            <div className="footer">
                <Row className="footer-body">
                    <Col md="3" className="first text-center pt-5">
                        <h6>LOGO</h6>
                        <button className="btn btn-block mt-3">Registratsiyadan o'tish</button>
                    </Col>
                    <Col md="3">
                        <h5>Aloqa</h5>
                        <ul className="second navbar-nav">
                            <li className="mt-2"><a href="#" className="text-decoration-none color"><img src={Phone1} /> +99 999 99 99</a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><img src={Phone2} /> +99 999 77 70</a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><img src={Email} /> info@tantana.uz</a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><img src={Email} /> info@tantana.uz</a></li>
                            <li className="mt-2 "><a href="#"><img src={Facebook} /></a> <a href="#"><img className="mx-3" src={Instagram} /></a> 
                                <a href="#"><img src={Youtube} /></a> <a href="#"><img className="mx-3" src={Telegram} /></a></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5>Xizmatlar</h5>
                        <ul className="three navbar-nav">
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>To'y liboslari</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Taklifnomalar</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Foto va video</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>San'atkorlar</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Love Story</b></a></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5>Bo'limlar</h5>
                        <ul className="three navbar-nav">
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Asal oyi</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Fotolar</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Takliflar</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Biz haqimizda</b></a></li>
                            <li className="mt-2"><a href="#" className="text-decoration-none text-secondary"><b>Kredit turlari</b></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="auto">
                    <Col md="6" className="text-secondary">2021-yil</Col>
                    <Col md="6" className="text-secondary">TEAM GROUP tomonidan Ishlab chiqilgan</Col>
                </Row>  
            </div>
    );
};

export default FooterAsaloyi;