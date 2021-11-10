import {Carousel} from 'react-responsive-carousel';
import CarouselContent from '../CarouselContent/CarouselContent.js';

import React from 'react';
const CarouselWrap = () => {
    const carouselData = [
        {
            id: 1,
            img: '/images/image11.png',
            text: "To'y uchun kredit kerakmi?"
        },
        {
            id: 2,
            img: '/images/image11.png',
            text: "To'y uchun kredit kerakmi?"
        },
        {
            id: 3,
            img: '/images/image11.png',
            text: "To'y uchun kredit kerakmi?"
        },
        {
            id: 4,
            img: '/images/image11.png',
            text: "To'y uchun kredit kerakmi?"
        }
    ]
    return (
        <div>
            <Carousel showArrows={true} showThumbs={false}>
                {
                    carouselData.map(data => {
                        return (
                            <CarouselContent data={data} />
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default CarouselWrap;