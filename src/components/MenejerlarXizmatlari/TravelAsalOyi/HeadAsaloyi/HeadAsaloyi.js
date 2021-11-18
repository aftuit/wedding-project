import React from 'react';
import { Col, Row } from 'reactstrap';
import './scss/Head.scss';
import Vector from './images/vector1.png';
import House from './images/house.png';

const HeadAsaloyi = () => {
    return (
        <Row className="main-best">
                        <Col md="4" className="best">
                            <Col md="9" className="best-title">
                                <img src={Vector} />
                                <h6 className="ml-2">Eng yaxshi sayohatlar - qulay narxlar</h6>
                            </Col>
                            <Col md="12">
                                <p className="text-secondary">Biz faqat eng qiziqarli va tasdiqlangan turlarni taklif qilamiz. 
                                Biz barcha yo'nalishlar va turlar uchun qulay narxlarni kafolatlaymiz. Bizda arzonroq.</p>
                            </Col>
                        </Col>
                        <Col md="4" className="best">
                            <Col md="9" className="best-title">
                                <img className="position-relative" src={Vector} />
                                <img className="position-absolute px-2 pb-3" src={House} />
                                <h6 className="ml-2">Eng yaxshi turar joy - Tez bron qilish</h6>
                            </Col>
                            <Col md="12">
                                <p className="text-secondary">Tasdiqlangan tajriba va ajoyib sharhlarga ega mehmonxonalarni tavsiya qilamiz. 
                                Erta bron qilish 30% gacha tejaydi.</p>
                            </Col>
                        </Col>
                        <Col md="4" className="best">
                            <Col md="9" className="best-title">
                                <img src={Vector} />
                                <h6 className="ml-2">Viza qo'llab-quvvatlash</h6>
                            </Col>
                            <Col md="12">
                                <p className="text-secondary">Biz sizga eng qiyin viza muammolarini hal qilishda yordam beramiz.
                                Biz sizning qiziqishlaringiz uchun har qanday turni tanlaymiz.</p>
                            </Col>
                        </Col>
                    </Row>
    );
};

export default HeadAsaloyi;