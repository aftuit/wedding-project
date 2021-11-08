import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';
import AsalOyi from '../components/AsalOyi/AsalOyi'
import Chat from "../components/Chat/Chat";
import Weddings from '../components/BestWeddings/BestWeddings.js';
import {Carousel} from '3d-react-carousal';
import "../components/BestWeddings/BestWeddings.scss";

const MainPage = (props) => {

    const infos = [
        {
            id: 1,
            weddingName: "To'yxona nomi",
            photo: "/images/wedd1.png",
            address: "Shayxontohur tumani, Gulshan ko’chasi, 4-uy",
            tel: '+99 999 99 99 Sunnat +99 999 99 90   Abror',
            price: "30 000 - 80 000"
        },
        {
            id: 2,
            weddingName: "To'yxona nomi",
            photo: "/images/wedd2.png",
            address: "Shayxontohur tumani, Gulshan ko’chasi, 4-uy",
            tel: '+99 999 99 99 Sunnat +99 999 99 90   Abror',
            price: "30 000 - 80 000"
        },
        {
            id: 3,
            weddingName: "To'yxona nomi",
            photo: "/images/wedd3.png",
            address: "Shayxontohur tumani, Gulshan ko’chasi, 4-uy",
            tel: '+99 999 99 99 Sunnat +99 999 99 90   Abror',
            price: "30 000 - 80 000"
        },
        {
            id: 4,
            weddingName: "To'yxona nomi",
            photo: "/images/wedd4.png",
            address: "Shayxontohur tumani, Gulshan ko’chasi, 4-uy",
            tel: '+99 999 99 99 Sunnat +99 999 99 90   Abror',
            price: "30 000 - 80 000"
        },
        {
            id: 4,
            weddingName: "To'yxona nomi",
            photo: "/images/wedd5.png",
            address: "Shayxontohur tumani, Gulshan ko’chasi, 4-uy",
            tel: '+99 999 99 99 Sunnat +99 999 99 90   Abror',
            price: "30 000 - 80 000"
        }
    ]

    return (
        <div className='montserrat'>
            <Carousel slides={infos.map(info => <Weddings info={info}/>)}  interval={1000}/>
            <AsalOyi />
            <Chat/>
            <AboutUs />
        </div>
    );
};

export default MainPage;