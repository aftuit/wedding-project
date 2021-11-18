import React from 'react';
import Border from './images/border.png';
import Imagination9 from './images/image9.png';
import './scss/Hujjatlar.scss';
import { Col, Row } from 'reactstrap';

const HujjatlarAsaloyi = () => {
    return (
        <Row className="hujjatlar">
                        <Col md="5" className="hujjat-text">
                            <h3>Kerakli hujjatalar</h3>
                            <ol>
                                <li>Italiya tilida to'ldiilgan va arizachi tomonidan shaxsan imzolangan ariza shakli;</li>
                                <li>Yengil fonda surat 3X4 (1 dona);</li>
                                <li>Pasport (asl nusxasi);</li>
                                <li>Ketayotgan shaxsning tug'ilganlik haqidagi guvohnomasi (asli va nusxasi, notarial tasdiqlangan)</li>
                                <li>Tibbiy sug'urta polisi (asl nusxasi va nusxasi);</li>
                                <li>Nikoh to'g'risidagi guvohnoma;</li>
                                <li>Ish joyidan ma'lumotnoma. Yordam matni quyidagi ma'lumotlarni o'z ichiga olishi kerak:</li>
                                <li>Mehnat ta'tili va xizmat safari to'g'risidagi guvohnoma;</li>
                                <li>Mehnat daftarchasi (birinchi varaqning asli va nusxasi);</li>
                                <li>Mablag'lar borligini tasdiqlovchi hujjatlar;</li>
                                <li>safar maqsadini tasdiqlovchi hujjatlar</li>
                            </ol>
                        </Col>
                        <Col md="4" className="mt-md-4 mx-md-4">
                            <Col md="10" className="hujjat-img">
                                <img src={Imagination9} />
                            </Col>
                            <Col md="10" className="hujjat-border">
                                <img src={Border} />
                            </Col>
                        </Col>
                    </Row>
    );
};

export default HujjatlarAsaloyi;