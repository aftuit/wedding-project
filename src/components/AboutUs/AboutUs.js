import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './AboutUs.scss'

const AboutUs = () => {
    const [open, setOpen] = useState(1)

    const button = id => {
        if (id === open) setOpen(0)
        else setOpen(id)
    }

    const class1 = 'borr-8 pt-1 p-medium fs-xl-16 ts-5'
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
            id: 4,
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
                                <br className='d-none d-sm-block' /> ko'rsatish. Kelajak sari
                                rivojlanib borish.
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
                            // <AboutAccordion answers={answer} key={answer.id} />
                            <div
                                className={`ts-5 borr-10 pt-2 mb-3 ${
                                    open === answer.id ? 'btn-num-shadow' : ''
                                }`}
                                key={answer.id}
                            >
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='mr-xl-3 mr-2'>
                                        <div
                                            className={`${class1} px-2 ${
                                                open === answer.id ? '' : 'btn-num-shadow'
                                            }`}
                                        >
                                            {answer.id < 10 ? '0' + answer.id : answer.id}
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <p className='fs-xl-18 c-4a4a4a p-medium'>
                                            {answer.question}
                                        </p>
                                    </div>
                                    <div className='ml-xl-3 ml-2'>
                                        <div
                                            className={`${class1} px-1 pb-0 ${
                                                open === answer.id ? '' : 'btn-num-shadow'
                                            }`}
                                            onClick={() => button(answer.id)}
                                        >
                                            <span
                                                className={`icon right bgc-black ts-5 ${
                                                    open === answer.id ? 'rotate-90' : 'rotate-0'
                                                }`}
                                                style={{ height: '16px' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden ts-5 ${
                                        open === answer.id ? 'h-200' : 'h-0'
                                    }`}
                                >
                                    <div className='d-flex justify-content-between'>
                                        <div className='mx-xl-3 mx-3 mt-2 pixel bgc-black' />
                                        <p className='w-100 mr-xl-5 mr-4 fs-xl-14 c-878787 p-medium'>
                                            {answer.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs
