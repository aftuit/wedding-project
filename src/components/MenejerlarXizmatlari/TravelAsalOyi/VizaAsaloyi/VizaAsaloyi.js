import React from 'react';
import { Col, Row } from 'reactstrap';
import Border from './images/border.png';
import Imagination8 from './images/image8.png';
import './scss/Viza.scss';

const VizaAsaloyi = () => {
    return (
        <Row className="viza">
                        <Col md="4">
                            <Col md="10" className="viza-img">
                                <img src={Imagination8} />
                            </Col>
                            <Col md="10" className="viza-border">
                                <img src={Border} />
                            </Col>
                        </Col>
                        <Col md="6" className="viza-text">
                            <h3>VIZA OLISH HAQIDA</h3>
                            <h5>SAYYORANING HAR BIR BURCHAGI ENDI JUDA YAQIN</h5>
                            <p>Shengen vizasi vakolatli organlar tomonidan beriladigan hujjatdir 
                                Shengen mamlakatlariga tashrif buyurishga qiziqqan shaxs. 
                                Shengen hududi quyidagilardan iborat ushbu zonada o'z fuqarolarining 
                                erkin harakatlanishiga ruxsat bergan 26 mamlakatdan bir mamlakatda 
                                bo'lgani kabi. Shengen shartnomasini imzolagan 26 ta davlatdan 
                                22 tasi Yevropa Ittifoqida, qolgan 4 tasi EFTAda.</p>
                        </Col>
                    </Row>
    );
};

export default VizaAsaloyi;