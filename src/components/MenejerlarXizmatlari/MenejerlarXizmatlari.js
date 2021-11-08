import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import './scss/Menejer.scss';

const MenejerlarXizmatlari = () => {
    return (
        <>
          <div className="container-fluid menejer-xizmatlar">
              <Col md="12">
                  <h2>Menejerlar xizmatlari</h2>
              </Col>
              <Row className="mt-4">
                  <Col md="6">
                    <img className="img1" src={Img1} />
                    <h4 className="mt-4">O'zbekona to'ylar</h4>
                    <Col md="3" className="offset-md-4">
                        <a href="#" className="batafsil">Batafsil  <span className="arrow">&#8250;</span></a>
                    </Col>
                  </Col>
                  <Col md="6" className="page">
                      <Row className="">
                        <Col md="8">
                            <h4 className="mb-4">Yubiley to'ylar / Sunnat to'ylari</h4>
                            <span className="taklifnomalar">Taklifnomalar</span> <br/>
                            <Col md="3">
                                <a href="#" className="batafsil1">Batafsil  <span className="arrow">&#8250;</span></a>
                            </Col>
                        </Col>
                        <Col md="4">
                            <img src={Img2} />
                        </Col>
                      </Row>
                      <hr />
                      <Row className="mt-2">
                        <Col md="8">
                            <h4 className="mb-4">Tug'ilgan kun / banketlar</h4>
                            <span className="taklifnomalar">Taklifnomalar</span> <br/>
                            <Col md="3">
                                <a href="#" className="batafsil1">Batafsil  <span className="arrow">&#8250;</span></a>
                            </Col>
                        </Col>
                        <Col md="4">
                            <img src={Img3} />
                        </Col>
                      </Row>
                      <hr />
                      <Row className="mt-2">
                        <Col md="8">
                            <h4 className="mb-4">Bayram / Tadbirlar</h4>
                            <span className="taklifnomalar">Taklifnomalar</span> <br/>
                            <Col md="3">
                                <a href="#" className="batafsil1">Batafsil  <span className="arrow">&#8250;</span></a>
                            </Col>
                        </Col>
                        <Col md="4">
                            <img src={Img4} />
                        </Col>
                      </Row>
                  </Col>
              </Row>
              <Col md="12" className="text-center mt-5">
                <button className="button">Barchasini ko'rish</button>
              </Col>
          </div>  
        </>
    );
};

export default MenejerlarXizmatlari;