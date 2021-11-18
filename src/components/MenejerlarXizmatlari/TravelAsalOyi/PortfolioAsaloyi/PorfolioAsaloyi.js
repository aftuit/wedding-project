import React from 'react';
import { Row, Col } from 'reactstrap';
import './scss/Portfolio.scss';
import Imagination10 from './images/image10.png';
import Imagination11 from './images/image11.png';
import Imagination12 from './images/image12.png';
import Imagination13 from './images/image13.png';
import Imagination14 from './images/image14.png';
import Imagination15 from './images/image15.png';
import Imagination16 from './images/image16.png';


const PorfolioAsaloyi = () => {

    const dataPortfolio = [
        {img: Imagination10},
        {img: Imagination13},
        {img: Imagination11},
        {img: Imagination14},
        {img: Imagination12},
        {img: Imagination15}
    ];
    
    return (
        <Row className="portfolio">
            <Col md="12" className="mb-5"><h3>PORTFOLIO</h3></Col>
                {dataPortfolio.map((port) => {
                    return(
                        <Col md="5" className="">
                            <img src={port.img} />
                        </Col>
                    )
                })}

            <Col md="4" className="text-center offset-md-3 mt-5">
                <button className="btn btn-block">Batafsil</button>
            </Col>
            
            <div className="xarita">
                <Col md="12">
                    <h3>Xaritada joylashuvi</h3>
                    <p className="text-secondary">Toshkent sh. Shayxontohur tumani, 23-uy</p>
                </Col>
                <Col md="12" className="text-center"><img src={Imagination16} /></Col>
            </div>
        </Row>
    );
};

export default PorfolioAsaloyi;