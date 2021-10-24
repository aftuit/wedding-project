import React from 'react'
import Chat from "../components/Chat/Chat"
import Weddings from '../components/TheBestWeddings/Weddings';
import {Carousel} from '3d-react-carousal';
import "../components/TheBestWeddings/weddings.scss"

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
        <div className='montserrat main-page-wrap'>

            <Chat/>

        <Carousel slides={infos.map(info => <Weddings info={info}/>)}  interval={1000}/>
        </div>
    );
};

export default MainPage;