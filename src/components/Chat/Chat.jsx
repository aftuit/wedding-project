import React, { useState } from 'react';
import "./chat.scss"
const Chat = () => {
    const [isChat, setIsChat] = useState(false);
    return (
        <div className="chat-content">
            <button type="button" className="chat-button" onClick={() => setIsChat(!isChat)}>
                <img src="/images/chat-svg.svg" alt="" />
            </button>
            <div className={`card main  ${isChat && 'show-chat'}`}>
                <div className="card-body">
                    <div className="close-chat bgc-83eabc" onClick={() => setIsChat(!isChat)}>&times;</div>
                    Дарья
                    <div className="d-flex align-items-center">
                        <div className="green-circle"></div>
                        <p>Мы тут и готовы помочь 🙂</p>
                    </div>

                    <div className="d-flex my-5">
                        <img src="/images/user.png" alt="" />
                        <div className="card ml-1 w-75 bgc-f8f8f8">
                            <div className="card-body">
                                <p>
                                    Salom 😊 <br />
                                    Keling, tadbiringiz uchun sayt topishga
                                    yordam beraylik.
                                    Sana haqida qaror qabul qildingizmi?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="d-flex">
                            <div className="card   mr-1">
                                <div className="card-body bgc-83eabc">
                                    <p className="m-0">
                                        Assalomu alaykum
                                    </p>
                                </div>

                                <span className="fs-xl-12">14:00</span>
                            </div>
                            <img src="/images/user.png" alt="" />
                        </div>                        
                        
                    </div>
                </div>

                <div className="card-type d-flex" >
                    <input type="text" className="mx-1" placeholder="type here ... " />
                    <button className="mx-1">
                        <span className='icon telegram bgc-4fba6f m-0' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;