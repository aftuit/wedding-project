import React, { useState } from 'react';
import './scss/AsalOyi.scss';
import { Col, Container, Row } from 'reactstrap';
import Imagination1 from './images/image1.png';
import Imagination2 from './images/image2.png';
import Imagination3 from './images/image3.png';
import Imagination4 from './images/image4.png';
import Imagination5 from './images/image5.png';
import Imagination6 from './images/image6.png';
import Imagination7 from './images/image7.png';
import Vector2 from './images/vector2.png';
import Star1 from './images/star1.png';
import Star2 from './images/star2.png';
import MenejerImg from './images/Ellipse 95.png';
import ModalAsalOyi from './ModalAsalOyi/ModalAsalOyi';
import PorfolioAsaloyi from './PortfolioAsaloyi/PorfolioAsaloyi';
import FooterAsaloyi from './Footer/FooterAsaloyi';
import HujjatlarAsaloyi from './HujjatlarAsaloyi/HujjatlarAsaloyi';
import VizaAsaloyi from './VizaAsaloyi/VizaAsaloyi';
import HeadAsaloyi from './HeadAsaloyi/HeadAsaloyi';
import CarouselAsaloyi from './CarouselAsaloyi/CarouselAsaloyi';

const AsalOyi = () => {

    const dataCountries = [
        {name: "BAA"},
        {name: "Turkiya"},
        {name: "Singapur"},
        {name: "Malayziya"},
        {name: "Braziliya"}
    ];

    const dataCarousel = [
        {id: 1, img: Imagination2, name: "Yegipt", data: "Yegipt o'zining Eski bandargohi bilan mashur kurort shahri bo'lib, u yerda yaxtalar to'xtaydi va katta mehmonxonalar bilan o'ralgan plyajalr. U Turkiyaning O'rta yer dengizi sohilidagi Turk Rivierasida joylashgan bo'lib, o'zining tiniq moviy suvlari bilan sayyohlarni o'ziga tortadi. 130-yilda Antaliyaga tashrif buyurgan Rim imperatori sharafiga qurilgan Hadrian darvozasi va 2-asrda qurilgan, portning ajoyib manzarasi bilan qurilgan Xidirlik minorasi, shahr Rim imperiyasining muhim porti bo'lgan davrni eslatadi."},
        {id: 2, img: Imagination3, name: "Dubay", data: "Dubay o'zining Eski bandargohi bilan mashur kurort shahri bo'lib, u yerda yaxtalar to'xtaydi va katta mehmonxonalar bilan o'ralgan plyajalr. U Turkiyaning O'rta yer dengizi sohilidagi Turk Rivierasida joylashgan bo'lib, o'zining tiniq moviy suvlari bilan sayyohlarni o'ziga tortadi. 130-yilda Antaliyaga tashrif buyurgan Rim imperatori sharafiga qurilgan Hadrian darvozasi va 2-asrda qurilgan, portning ajoyib manzarasi bilan qurilgan Xidirlik minorasi, shahr Rim imperiyasining muhim porti bo'lgan davrni eslatadi."},
        {id: 3, img: Imagination4, name: "Antalya", data: "Antalya o'zining Eski bandargohi bilan mashur kurort shahri bo'lib, u yerda yaxtalar to'xtaydi va katta mehmonxonalar bilan o'ralgan plyajalr. U Turkiyaning O'rta yer dengizi sohilidagi Turk Rivierasida joylashgan bo'lib, o'zining tiniq moviy suvlari bilan sayyohlarni o'ziga tortadi. 130-yilda Antaliyaga tashrif buyurgan Rim imperatori sharafiga qurilgan Hadrian darvozasi va 2-asrda qurilgan, portning ajoyib manzarasi bilan qurilgan Xidirlik minorasi, shahr Rim imperiyasining muhim porti bo'lgan davrni eslatadi."},
        {id: 4, img: Imagination5, name: "Istanbul", data: "Istanbul o'zining Eski bandargohi bilan mashur kurort shahri bo'lib, u yerda yaxtalar to'xtaydi va katta mehmonxonalar bilan o'ralgan plyajalr. U Turkiyaning O'rta yer dengizi sohilidagi Turk Rivierasida joylashgan bo'lib, o'zining tiniq moviy suvlari bilan sayyohlarni o'ziga tortadi. 130-yilda Antaliyaga tashrif buyurgan Rim imperatori sharafiga qurilgan Hadrian darvozasi va 2-asrda qurilgan, portning ajoyib manzarasi bilan qurilgan Xidirlik minorasi, shahr Rim imperiyasining muhim porti bo'lgan davrni eslatadi."},
        {id: 5, img: Imagination6, name: "Tailand", data: "Tailand o'zining Eski bandargohi bilan mashur kurort shahri bo'lib, u yerda yaxtalar to'xtaydi va katta mehmonxonalar bilan o'ralgan plyajalr. U Turkiyaning O'rta yer dengizi sohilidagi Turk Rivierasida joylashgan bo'lib, o'zining tiniq moviy suvlari bilan sayyohlarni o'ziga tortadi. 130-yilda Antaliyaga tashrif buyurgan Rim imperatori sharafiga qurilgan Hadrian darvozasi va 2-asrda qurilgan, portning ajoyib manzarasi bilan qurilgan Xidirlik minorasi, shahr Rim imperiyasining muhim porti bo'lgan davrni eslatadi."},
        {id: 6, img: Imagination7, name: "Maldivi", data: "Maldivi o'zining Eski bandargohi bilan mashur kurort shahri bo'lib, u yerda yaxtalar to'xtaydi va katta mehmonxonalar bilan o'ralgan plyajalr. U Turkiyaning O'rta yer dengizi sohilidagi Turk Rivierasida joylashgan bo'lib, o'zining tiniq moviy suvlari bilan sayyohlarni o'ziga tortadi. 130-yilda Antaliyaga tashrif buyurgan Rim imperatori sharafiga qurilgan Hadrian darvozasi va 2-asrda qurilgan, portning ajoyib manzarasi bilan qurilgan Xidirlik minorasi, shahr Rim imperiyasining muhim porti bo'lgan davrni eslatadi."}
    ];

    const [text, setText] = useState(dataCarousel);
    const [categories, setCategories] = useState(dataCarousel);

    const toggle = () => {
        let headApp = document.querySelector('.head-app');
        let vizaApp = document.querySelector('.viza-app');
        let portfolioApp = document.querySelector('.portfolio-app');
        let hujjatApp = document.querySelector('.hujjat-app');
        let modalApp = document.querySelector('.modal-app');
        let mehmonxonaApp = document.querySelector('.mehmonxona-app');
        let carouselApp = document.querySelector('.carousel-app');
        let dataApp = document.querySelector('.data-app');

        headApp.classList.add('d-none');
        vizaApp.classList.add('d-none');
        portfolioApp.classList.add('d-none');
        hujjatApp.classList.add('d-none');
        mehmonxonaApp.classList.add('d-none');
        modalApp.classList.remove('d-none');
        carouselApp.classList.remove('d-none');
        dataApp.classList.remove('d-none');
    };

    function toggleBtn(category) {
        const newText = dataCarousel.filter((item) => item.name === category);
        setText(newText);
        toggle()
    }

    return (
        <div className="asal-oyi">
            <div className="container-fluid">
                <Col md="12" className="main">
                    <img className="bg-png" src={Imagination1} />
                    <Col md="12" className="main-center">
                        <Col md="8" className="mb-4"><h1>Asal oyi uchun go'zal manzaralar</h1></Col>
                        <Col md="5"><p>Asal oyingizni o'zingiz yoqtirgan zavqli joylarda o'tkazing</p></Col>
                    </Col>
                </Col>
                <Container className="best-best">
                    <div className="head-app">
                        <HeadAsaloyi />
                    </div>

                    <Row className="mehmonxona">
                        <Col md="9">
                            <div className="carousel-app d-none">
                                <CarouselAsaloyi />
                            </div>
                            <div className="data-app d-none mt-4">
                                {text.map((tip, index) => {
                                    return(
                                        <div key={tip.id}>
                                            <h3>{tip.name}</h3>
                                            <p>{tip.data}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <Row className="mehmonxona-app">
                                {categories.map((category, index) => {
                                    return(
                                        <Col md="4" className="">
                                            <div className="mehmonxona-body mt-3">
                                                <img className="post-img" src={category.img} />
                                                <div className="col-md-12 d-flex align-items-center justify-content-between px-3">
                                                    <h4>{category.name}</h4>
                                                    <span>
                                                        <img src={Star1} /> <img src={Star1} /> <img src={Star1} /> <img src={Star1} /> <img src={Star2} />
                                                    </span>
                                                </div>
                                                <div className="col-md-12 px-3">
                                                    <p> <img src={Vector2} /> 2 kishi, 10 kun uchun chegirma</p>
                                                    <button key={index} id="btn" onClick={()=> toggleBtn(category.name)} className="btn btn-block">Batafsil</button>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}                                            
                            </Row>
                        </Col>

                        <Col md="3">
                           <div className="sayohat-menejer">
                                <h6>Sayohat menejeri</h6>
                                <img src={MenejerImg} className="mt-2 mb-2" />
                                <h6>Karimov Alimardon</h6>
                                <hr/>
                                <select className="form-select bg-light border-0 p-2 px-3 text-secondary">
                                    <option selected>Davlatni tanlang</option>
                                    {dataCountries.map((comment) => {
                                        return(
                                            <option value={comment.name}>{comment.name}</option>
                                        )
                                    })}
                                </select>
                                <input type="date" className="form-control border-0 bg-light mt-3 text-cecondary p-2 px-3" placeholder="sayohat sanasi" />
                                <textarea className="form-control mt-3 bg-light border-0 pb-5" placeholder="matn-chun" />
                                <button className="btn btn-block mt-3">Xabar jo'natish</button>
                                <hr/>
                                <p>Bizga a'loqaga chiqing</p>
                                <button className="btn btn-block bg-transparent border border-dark">Aloqa qilish</button>
                           </div>
                        </Col>
                    </Row>

                    <div className="viza-app">
                        <VizaAsaloyi />
                    </div>
                    <div className="hujjat-app">
                        <HujjatlarAsaloyi />
                    </div>
                    <Row className="portfolio-app">
                        <PorfolioAsaloyi />
                    </Row>
                    <Row className="modal-app d-none">
                        <ModalAsalOyi />
                    </Row>
                </Container>
                <div className="footer-app ">
                    <FooterAsaloyi />
                </div>
            </div>
        </div>
    );
};

export default AsalOyi;