import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { updateState } from '../../redux/actions/loginAction'
import './Footer.scss'

const Footer = (props) => {
    return (
        <div id='footer' className='bgc-e8f6fd py-xl-5 py-lg-5 py-md-3 py-sm-3 py-3'>
            <Container>                   
                <Row>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div className='h-100'>
                            <div className='h-xl-100 h-lg-75 h-md-75 h-sm-75'>
                                <img src="/images/logo.png" alt="" className='m-auto w-75'Logo />
                            </div>
                            <div>
                                <Link
                                    to='/'
                                    className='btn borr-10 border-color btn-num-shadow c-282323 p-semi-bold fs-xl-16 mt-2'
                                >
                                    Registratsiyadan o'tish
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div>
                            <h4 className='roboto p-medium fs-xl-24'>Aloqa</h4>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon phone main-bg-color' />
                            </div>
                            <Link to='/' className='ml-2 main-color fs-xl-20 montaga p-regular'>
                                +99 999 99 99
                            </Link>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon phone bgc-4c4c4c' />
                            </div>
                            <Link to='/' className='ml-2 c-4c4c4c fs-xl-20 montaga p-regular'>
                                +99 999 99 99
                            </Link>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon email main-bg-color' />
                            </div>
                            <Link to='/' className='ml-2 c-4d4d4d fs-xl-20 montaga p-regular'>
                                info@tantana.uz
                            </Link>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon email bgc-4c4c4c' />
                            </div>
                            <Link to='/' className='ml-2 c-4d4d4d fs-xl-20 montaga p-regular'>
                                info@tantana.uz
                            </Link>
                        </div>
                        <div className='d-flex pt-xl-1'>
                            <div className='ml-1 mr-2'>
                                <Link to='/'>
                                    <span className='icon facebook main-bg-color' />
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link to='/'>
                                    <span className='icon insta main-bg-color' />
                                </Link>
                            </div>
                            <div className='ptxl3 mx-3'>
                                <Link to='/'>
                                    <span className='icon youtube main-bg-color' />
                                </Link>
                            </div>
                            <div className='ptxl3 mx-1 ml-2'>
                                <Link to='/'>
                                    <span className='icon telegram main-bg-color' />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div>
                            <h4 className='roboto p-medium fs-xl-24'>Xizmatlar</h4>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                To'y liboslari
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Taklifnomalar
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Foto va video
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                San'atkorlar
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Love Story
                            </Link>
                        </div>
                    </Col>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div>
                            <h4 className='roboto p-medium fs-xl-24'>Bo'limlar</h4>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Asal oyi
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Fotolar
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Takliflar
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Biz haqimizda
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Kredit turlari
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        appear: state.login.appear
    }
}
export default connect(mapStateToProps, {updateState})(Footer)
