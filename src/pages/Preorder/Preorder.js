import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Lists } from '../../components/PreorderComponents/Data'
import { Header, Info, Inputs } from './../../components/PreorderComponents/Header'

const Bron = () => {
    const [name, setName] = useState("To'yxona")
    const [filterText, setFilterText] = useState('')
    const changeName = nom => {
        setName(nom)
        setFilterText('')
    }

    const info = Lists.find(e => e.name === name)
    const filter = info.data.filter(filt => {
        return filt.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    })

    return (
        <div>
            <Header info={info} />
            <Container fluid className='position-relative'>
                <Row>
                    {/* <SearchBar name={info.data} /> */}
                    <Col
                        md={{ size: 8, offset: 2 }}
                        className='position-absolute top-40'
                        id='searchbar'
                    >
                        <div>
                            <div className='d-flex bgc-white p-xl-3 px-lg-3 pt-lg-7 borr-20 border'>
                                <div className='pt-xl-2 pt-lg-1 pr-lg-3'>
                                    <span className='icon search bgc-black' />
                                </div>
                                <input
                                    className='border-0 w-100'
                                    placeholder="To'yxona nomi orqali qidiruv..."
                                    type='text'
                                    name='search'
                                    value={filterText}
                                    onChange={e => setFilterText(e.target.value)}
                                />
                                <Inputs />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl='2' lg='2' className='mt-5' id='list'>
                        <div className='borr-10 btn-num-shadow bgc-f8f8f8 py-xl-2 py-lg-2 pl-xl-4 pl-lg-3 top-xl-10 position-sticky'>
                            <ul className='fs-xl-16 fs-lg-16 montserrat'>
                                {Lists.map(list => (
                                    <li
                                        key={list.id}
                                        onClick={() => changeName(list.name)}
                                        className={`my-3 ${
                                            name === list.name
                                                ? 'c-ffc131 p-semi-bold'
                                                : 'c-black p-regular'
                                        }`}
                                    >
                                        {list.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    {filter.length === 0 ? (
                        <div className='mt-5 ml-3'>
                            <h1>Hech narsa topilmadi</h1>
                        </div>
                    ) : (
                        <Info name={filter} />
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Bron
