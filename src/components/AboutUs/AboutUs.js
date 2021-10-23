import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AboutAccordion } from './AboutAccordion'
import './AboutUs.scss'

const AboutUs = () => {
    const answers = [
        {
            id: 1,
            question: "Men qanday qilib menejer bilan bog'lanishim mumkin?",
            answer: "Saytimizning asosiy sahifasida menenjer bo'limiga o'tishingiz so'raladi.",
        },
        {
            id: 2,
            question: 'Xizmatlardan qanday foydalanaman?',
            answer: 'Bilmadim.',
        },
        {
            id: 3,
            question: "Men registratsiyadan o'ta olmadim",
            answer: 'Boshqatdan harakat qiling.',
        },
        {
            id: 9,
            question: "Men registratsiyadan o'ta olmadim",
            answer: 'Boshqatdan harakat qiling.',
        },
    ]

    return (
        <div id='aboutus' className='py-xl-5 py-lg-5 py-md-4 py-sm-4 py-4'>
            <Container>
                <Row>
                    <Col md='12'>
                        <div className='text-center'>
                            <h3>Biz haqimizda</h3>
                            <p className='my-3'>
                                Находите идеи и получайте вдохновение с реальных свадеб, выбрав
                                интересующую
                                <br className='d-md-none d-sm-none' /> вас категорию
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl='6' lg='6' className='mb-md-3'>
                        <div className='mb-xl-4 mb-lg-4'>
                            <h3 className='fs-xl-32 c-000001'>Bizning maqsad</h3>
                            <p className='open-sans p-regular fs-xl-21 c-8c8e90'>
                                Maqsadimiz xalqimizga arzon va sifatli xizmat
                                <br className='d-none d-sm-block' /> ko'rsatish. Kelajak sari rivojlanib borish.
                            </p>
                        </div>
                        <div>
                            <img
                                src='/images/image1.png'
                                className='border-0 borr-38 w-100'
                                alt='image1'
                            />
                        </div>
                    </Col>
                    <Col xl='6' lg='6'>
                        {answers.map(answer => (
                            <AboutAccordion answers={answer} key={answer.id} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs
