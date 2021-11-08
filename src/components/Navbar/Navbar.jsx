import React, {useState} from 'react'
import './Navbar.scss'
import world from '../../assets/icon/world.svg'
import arrow from '../../assets/icon/arrow.svg'
import user from '../../assets/icon/user.svg'
import img from '../../assets/img/image.png'
import logo from '../../assets/img/logo.png'
import {Link} from "react-router-dom"


const Navbar = () => {
    const [service, setService] = useState(false)

    return (
        <div className="navbar d-flex">
            <div className="logo">
                 <img src={logo} alt="" style={{width: `150px`}}/>
            </div>
            <div className="links">
                <ul className="nav">
                    <li className="nav-item" onMouseOver={() => setService(true)} onMouseOut={() => setService(false)}><Link to='/' className="nav-link text-dark">KATALOG</Link></li>
                    <li className="nav-item"><Link to='/' className="nav-link text-dark ">MENEJER</Link></li>
                    <li className="nav-item"><Link to='/' className="nav-link text-dark ">KREDIT</Link></li>
                    <li className="nav-item"><Link to='/' className="nav-link text-dark ">ASAL</Link></li>
                    <li className="nav-item"><Link to='/' className="nav-link text-dark ">PORTFOLIO</Link></li>
                    <li className="nav-item"><Link to='/' className="nav-link text-dark ">ALOQA</Link></li>
                </ul>
                  <div className={`xizmatlar`} onMouseOver={() => setService(true)} onMouseOut={() => setService(false)}>
                     <div className={`d-flex ${service && " show"}`}>
                     <div className="qism1">
                          <h6>Barcha turdagi xizmatlar siz uchun</h6>
                         <div className="div">
                         <div>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                          </div>
                          <div>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                          </div>
                          <div>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                          </div>
                          <div>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                              <p>servis</p>
                          </div>
                         </div>
                      </div>
                      <div className="line">

                      </div>
                      <div className="qism2" style={{backgroundImage: `url(${img})`, backgroundRepeat:`no-repeat`}}>
                              <button>Xizmatlarga o'tish</button>
                      </div>
                     </div>
                  </div>
            </div>
            {/* <div className="language">
                       <img src={world} alt="" />
                       <p>uz </p>
                       <img src={arrow} alt="" />
                </div> */}
            <div className="buttons">
                <button type="button" className="button1"><span><img src={user} alt="" style={{marginRight: `20px`}}/></span> Name</button>
                <button type="button" className="button2">Chiqish</button>
            </div>
        </div>
    )
}
export default Navbar