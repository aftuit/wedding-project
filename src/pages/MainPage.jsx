import React from 'react'
import { connect } from 'react-redux';
import AsalOyi from '../components/AsalOyi/AsalOyi'
import Chat from "../components/Chat/Chat"

const MainPage = (props) => {

    return (
        <div className='montserrat main-page-wrap'>
            <AsalOyi />
            <Chat/>
        </div>
    );
};

export default MainPage;