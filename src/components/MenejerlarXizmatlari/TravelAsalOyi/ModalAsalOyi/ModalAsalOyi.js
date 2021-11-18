import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Hotel from './images/hotel.png';
import './scss/Modal.scss';

const ModalAsalOyi = () => {

    const dataHotels = [
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
        {img: Hotel, name: "Shaming Inn Hotel", price: "500$"},
    ];

    return (
        <div>
            <Container className="modal-asaloyi">
                <Row>
                    <Col md="10">
                        <Col md="12" className="mb-5"><h3>MehmonXonalar</h3></Col>
                        <Row>
                            {dataHotels.map((api) => {
                                return(
                                    <Col md="6" className="mt-2">
                                        <div className="main">
                                            <img src={api.img} />
                                            <Row className="text">
                                                <h5>{api.name} &nbsp; &nbsp; {api.price} / <span className="text-secondary">2 kishi</span></h5>
                                            </Row>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ModalAsalOyi;