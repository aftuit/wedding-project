import React from 'react';
const CarouselContent = (props) => {
    return (
        <div className="content-wrap">
            <img src={props.data.img} alt=""/>
            <p>{props.data.text}</p>
        </div>
    );
};

export default CarouselContent;