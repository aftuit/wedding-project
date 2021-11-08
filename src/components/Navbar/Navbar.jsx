import React from 'react'
import './styleNavbar.scss'
import world from '../../Assets/icons/world.svg'
import arrow from '../../Assets/icons/arrow.svg'
import user from '../../Assets/icons/user.svg'
import img from '../../Assets/images/image.png'
import logo from '../../Assets/images/logo.png'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                 <img src={logo} alt="" style={{width: `150px`}}/>
            </div>
            <div className="links">
                  <a href="#" className="nav-link">KATALOG</a>
                  <a href="" className="nav-link">MENEJER</a>
                  <a href="" className="nav-link">KREDIT</a>
                  <a href="" className="nav-link">ASAL</a>
                  <a href="" className="nav-link">PORTFOLIO</a>
                  <a href="" className="nav-link">ALOQA</a>
                  <div className="xizmatlar">
                     <div className="d-flex">
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
            <div className="language">
                       <img src={world} alt="" />
                       <p>uz </p>
                       <img src={arrow} alt="" />
                </div>
            <div className="buttons">
                <button type="button" className="button1"><span><img src={user} alt="" style={{marginRight: `20px`}}/></span> Name</button>
                <button className="button2">Chiqish</button>
            </div>
        </div>
    )
}
export default Navbar
