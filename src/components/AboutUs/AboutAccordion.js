import React, { useState } from 'react'

export const AboutAccordion = ({ answers }) => {
    const [open, setOpen] = useState(false)
    const button = () => setOpen(!open)

    const class1 = 'borr-8 pt-1 p-medium fs-xl-16 ts-5'

    return (
        <div className={`ts-5 borr-10 pt-2 mb-3 ${open ? 'btn-num-shadow' : ''}`}>
            <div className='d-flex w-100 justify-content-between'>
                <div className='mr-xl-3 mr-2'>
                    <div className={`${class1} px-2 ${open ? '' : 'btn-num-shadow'}`}>
                        {answers.id < 10 ? '0' + answers.id : answers.id}
                    </div>
                </div>
                <div className='w-100'>
                    <p className='fs-xl-18 c-4a4a4a p-medium'>{answers.question}</p>
                </div>
                <div className='ml-xl-3 ml-2'>
                    <div
                        className={`${class1} px-1 pb-0 ${open ? '' : 'btn-num-shadow'}`}
                        onClick={button}
                    >
                        <span
                            className={`icon right bgc-black ts-5 ${
                                open ? 'rotate-90' : 'rotate-0'
                            }`}
                            style={{ height: '16px' }}
                        />
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden ts-5 ${open ? 'h-200' : 'h-0'}`}>
                <div className='d-flex justify-content-between'>
                    <div className='mx-xl-3 mx-3 mt-2 pixel bgc-black' />
                    <p className='w-100 mr-xl-5 mr-4 fs-xl-14 c-878787 p-medium'>{answers.answer}</p>
                </div>
            </div>
        </div>
    )
}
