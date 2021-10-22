import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Footer.scss'

const Footer = () => {
    return (
        <div id='footer' className='bgc-e8f6fd py-xl-5 py-lg-5 py-md-3 py-sm-3 py-3'>
            <Container>
                <Row>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div className='h-100'>
                            <div className='h-xl-100 h-lg-75 h-md-75 h-sm-75'>
                                <p className='m-auto'>Logo</p>
                            </div>
                            <div>
                                <a
                                    href='/'
                                    className='btn borr-10 border-color btn-num-shadow c-282323 p-semi-bold fs-xl-16'
                                >
                                    Registratsiyadan o'tish
                                </a>
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
                            <a href='/' className='ml-2 main-color fs-xl-20 montaga p-regular'>
                                +99 999 99 99
                            </a>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon phone bgc-4c4c4c' />
                            </div>
                            <a href='/' className='ml-2 c-4c4c4c fs-xl-20 montaga p-regular'>
                                +99 999 99 99
                            </a>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon email main-bg-color' />
                            </div>
                            <a href='/' className='ml-2 c-4d4d4d fs-xl-20 montaga p-regular'>
                                info@tantana.uz
                            </a>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-1'>
                                <span className='icon email bgc-4c4c4c' />
                            </div>
                            <a href='/' className='ml-2 c-4d4d4d fs-xl-20 montaga p-regular'>
                                info@tantana.uz
                            </a>
                        </div>
                        <div className='d-flex pt-xl-1'>
                            <div className='ml-1'>
                                <a href='/'>
                                    <span className='icon facebook main-bg-color' />
                                </a>
                            </div>
                            <div className='mx-1'>
                                <a href='/'>
                                    <span className='icon insta main-bg-color' />
                                </a>
                            </div>
                            <div className='ptxl3 mx-1'>
                                <a href='/'>
                                    <span className='icon youtube main-bg-color' />
                                </a>
                            </div>
                            <div className='ptxl3 mx-1'>
                                <a href='/'>
                                    <span className='icon telegram main-bg-color' />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div>
                            <h4 className='roboto p-medium fs-xl-24'>Xizmatlar</h4>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                To'y liboslari
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Taklifnomalar
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Foto va video
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                San'atkorlar
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Love Story
                            </a>
                        </div>
                    </Col>
                    <Col xl='3' lg='3' md='6' sm='6' className='py-md-3 py-sm-3 py-3'>
                        <div>
                            <h4 className='roboto p-medium fs-xl-24'>Bo'limlar</h4>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Asal oyi
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Fotolar
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Takliflar
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Biz haqimizda
                            </a>
                        </div>
                        <div>
                            <a href='/' className='c-4d4d4d fs-xl-20 roboto p-medium'>
                                Kredit turlari
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
