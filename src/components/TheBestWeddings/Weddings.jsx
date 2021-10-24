import React from 'react';

const Weddings = (props) => {
 
    return (
        <div className="weddings-wrap">
            <img src={props.info.photo} alt="" />
        <div className="wedd-info">
            <h2 className="text-center">To'yxona nomi</h2>
            <p className="mt-2 mb-0">Manzil:</p>
            <div className="address">
                <img src="/images/location.svg" alt="" />
                <span className="ml-2">{props.info.address}</span>
            </div>

            <p className="mt-2 mb-0">Telefon:</p>
            <div className="address">
                <img src="/images/phone.svg" alt="" />
                <span className="ml-2">{props.info.tel}</span>
            </div>

            <p className="mt-2 mb-0">Narxi kishi boshiga:</p>
            <div>
                30 000 - 80 000 gacha
            </div>

            <button type="button" className="btn main-bg-color mt-2 d-block mx-auto text-white">Aloqaga chiqish</button>
            
        </div>

        </div>
    );
};

export default Weddings;