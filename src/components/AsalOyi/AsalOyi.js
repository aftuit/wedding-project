import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'reactstrap'
import './AsalOyi.scss'

const AsalOyi = () => {
    const infos = [
        {
            id: 1,
            img_url: '/images/image24.png',
            name: 'Maldiv orollari',
            ticket_num: 2,
            col: 4,
        },
        {
            id: 2,
            img_url: '/images/image25.png',
            name: 'Name',
            ticket_num: 2,
            col: 4,
        },
        {
            id: 3,
            img_url: '/images/image27.png',
            name: 'Name',
            ticket_num: 2,
            col: 4,
        },
        {
            id: 4,
            img_url: '/images/image28.png',
            name: 'Name',
            ticket_num: 2,
            col: 6,
        },
        {
            id: 5,
            img_url: '/images/image30.png',
            name: 'Name',
            ticket_num: 2,
            col: 6,
        },
    ]
    return (
        <div id='asaloyi ' className='mt-5 bgc-f5f9ff py-2'>
            <Container>
                <h2>Asal Oyi</h2>
                <Row>
                    {infos.map(info => (
                        <Col
                            xl={info.col}
                            lg={info.col}
                            md={info.col}
                            sm='6'
                            className='my-xl-3 my-lg-3 my-md-2 my-sm-2 my-2 px-md-2 px-sm-2'
                            key={info.id}
                        >
                            <Card className='position-relative overflow-hidden borr-20 border-0 h-100 text-center'>
                                <CardImg
                                    src={info.img_url}
                                    alt='image24'
                                    top
                                    width='100%'
                                    height='100%'
                                />
                                <div className='position-absolute hover-text w-100'>
                                    <div className='w-100 my-xl-2 my-lg-2 my-md-1 text h-100 ml-3'>
                                        <h5 className='fs-xl-18 fs-18 p-medium'>{info.name}</h5>
                                        <p className='fs-xl-15 p-regular'>
                                            {info.ticket_num} kishilik bilet
                                        </p>
                                        <div>
                                            <Button className='fs-xl-18 fs-18 borr-12 bg-white border-0 c-black hover-btn-shadow hover-btn-shadow-hover'>
                                                Ko'rish
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col md='12' className='text-center py-3'>
                        <Button className='border-0 borr-12 bg-white c-black p-medium hover-btn-shadow'>
                            Ko'rib chiqish
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AsalOyi