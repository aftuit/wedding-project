import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle, Col, Input } from 'reactstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Header.scss'
import { nimadir } from './Data'

export const Header = ({ info }) => {
    return (
        <div id='header'>
            <div className='position-relative'>
                <LazyLoadImage effect='blur' src={info.image} alt='weddingroom' className='w-100' />
                <div className='position-absolute text-0 bgc-42424261'>
                    <div className='c-white text p-medium'>
                        <h3 className='montserrat fs-xl-46 fs-lg-46'>{info.title}</h3>
                        <p className='fs-xl-18 fs-lg-18 montserrat'>{info.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export const SearchBar = ({ name }) => {
//     const [region, setRegion] = useState('')
//     const [city, setCity] = useState('')
//     // let [products, setProducts] = useState(name)
//     const [filterText, setFilterText] = useState('')

//     let filter = name.filter(product => {
//         return product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
//     })

//     return (
//         <Col md={{ size: 8, offset: 2 }} className='position-absolute top-30' id='searchbar'>
//             <div>
//                 <div className='d-flex bgc-white p-xl-3 px-lg-3 pt-lg-7 borr-20 border'>
//                     <div className='pt-lg-1 pr-lg-3'>
//                         <span className='icon search bgc-black' />
//                     </div>
//                     <input
//                         className='border-0 w-100'
//                         placeholder="To'yxona nomi orqali qidiruv..."
//                         type='text'
//                         name='search'
//                         value={filterText}
//                         onChange={e => setFilterText(e.target.value)}
//                     />
//                     <select
//                         className={`border-0 borr-5 mr-3 bgc-white ${
//                             region === '' ? 'opacity-0 time-5' : 'opacity-1 time-5'
//                         } ${city === '' ? 'c-c7c6c6 select-pink' : 'select-gray'}`}
//                     >
//                         <option onClick={() => setCity('')}>Shaharni tanlang..</option>
//                         <option onClick={() => setCity('Toshkent')} className='c-979696'>
//                             Toshkent
//                         </option>
//                         <option onClick={() => setCity('Toshkent')} className='c-979696'>
//                             Toshkent
//                         </option>
//                         <option onClick={() => setCity('Toshkent')} className='c-979696'>
//                             Toshkent
//                         </option>
//                         <option onClick={() => setCity('Toshkent')} className='c-979696'>
//                             Toshkent
//                         </option>
//                         <option onClick={() => setCity('Toshkent')} className='c-979696'>
//                             Toshkent
//                         </option>
//                     </select>
//                     <select
//                         className={`border-0 borr-5 bgc-white ${
//                             region === '' ? 'c-c7c6c6 select-pink' : 'select-gray'
//                         }`}
//                     >
//                         <option onClick={() => setRegion('')} className='c-c7c6c6'>
//                             Viloyatni tanlang..
//                         </option>
//                         <option onClick={() => setRegion('Samarqand')} className='c-979696'>
//                             Samarqand
//                         </option>
//                         <option onClick={() => setRegion('Sirdaryo')} className='c-979696'>
//                             Sirdaryo
//                         </option>
//                         <option onClick={() => setRegion('Andijon')} className='c-979696'>
//                             Andijon
//                         </option>
//                         <option onClick={() => setRegion("Farg'ona")} className='c-979696'>
//                             Farg'ona
//                         </option>
//                         <option onClick={() => setRegion('Namangan')} className='c-979696'>
//                             Namangan
//                         </option>
//                     </select>
//                 </div>
//             </div>
//         </Col>
//     )
// }

export const Info = ({ name }) => {
    return (
        <Col lg='10' className='mt-lg-5' id='info'>
            <div>
                {name.map(info => (
                    <div
                        key={info.id}
                        className='borr-20 border section-shadow bgc-white mb-lg-4 p-lg-3 section montserrat'
                    >
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <div className='circle-72'>
                                    {/*<LazyLoadImage src='' alt='rasm' className='w-100' /> */}
                                </div>
                                <div className='ml-lg-3 pt-lg-1'>
                                    <div>
                                        <h4 className='d-inline'>
                                            <Link to='/preorder' className='c-3f3f3f'>
                                                {info.name}
                                            </Link>
                                        </h4>
                                        <span className='ml-lg-3 p-medium fs-xl-15 fs-lg-15'>
                                            {info.subtitle}
                                        </span>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='pt-xl-2px'>
                                            <span className='icon location bgc-black  ' />
                                        </div>
                                        <p className='ml-1 fs-xl-16 fs-lg-16'>{info.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-lg-3'>
                                <Link
                                    to='/'
                                    className='p-medium montserrat fs-xl-16 fs-lg-16 c-3f3f3f '
                                >
                                    Kartada
                                </Link>
                            </div>
                        </div>
                        <div className='d-flex overflow-auto scroll'>
                            {info.imgs_url.map(img =>
                                img.name ? (
                                    <div className='w-xl-304 mr-lg-4 my-lg-3' key={img.id}>
                                        <Card className='borr-8 w-100 boxshadow'>
                                            <LazyLoadImage
                                                alt='Card image cap'
                                                src={img.img}
                                                effect='blur'
                                                width='100%'
                                            />
                                            <CardBody className='p-medium c-black'>
                                                <CardTitle tag='h5' className='fs-xl-16'>
                                                    {img.name}
                                                </CardTitle>
                                                <CardText className='fs-xl-12'>
                                                    <span className='c-797575 p-regular'>
                                                        Narxi:{' '}
                                                    </span>
                                                    {img.price}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ) : (
                                    <div className='borr-8 w-xl-304 mr-lg-4 my-lg-3' key={img.id}>
                                        <LazyLoadImage
                                            effect='blur'
                                            src={img.img}
                                            className=''
                                            alt='rasm'
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        {info.services ? (
                            <div className='d-flex p-lg-3 borr-7 bgc-f3f1f1 mt-lg-3'>
                                {info.services.map((service, index) => (
                                    <div className='d-flex h-42' key={service.id}>
                                        <div className='pt-lg-1'>
                                            <span
                                                className={`icon ${service.icon} bgc-black w-12`}
                                            />
                                        </div>
                                        <div className='mx-lg-2'>
                                            <div className='c-797575 p-regular fs-xl-12 w-100'>
                                                {service.name}
                                                {service.subtitle ? (
                                                    <span className='subtitle p-regular pt-lg-1 pl-lg-1'>
                                                        ({service.subtitle})
                                                    </span>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                            <div className='line my-lg-1' />
                                            <p className='c-black fs-xl-10 p-medium'>
                                                {service.something}
                                            </p>
                                        </div>
                                        <div
                                            className={`line-2 mx-xl-5 mx-lg-4 ${
                                                info.services.length === index + 1 ? 'd-none' : ''
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ))}
            </div>
            <div className='text-center my-lg-4'>
                <Button className='bgc-white montserrat fs-xl-16 fs-lg-16 c-282323 btn-num-shadow p-semi-bold borr-10 px-xl-4 py-xl-2 button'>
                    Yana ko'rsatish
                </Button>
            </div>
        </Col>
    )
}

export const Inputs = () => {
    const [city, setCity] = useState('')
    const [region, setRegion] = useState('')

    const regionName = nimadir.find(e => e.region === region)

    return (
        <div className='d-flex'>
            <Input
                type='select'
                onChange={e => setCity(e.target.value)}
                className={`border-0 borr-5 mr-3 bgc-white time-5 text-truncate ${
                    region === '' ? 'opacity-0' : 'opacity-1'
                } ${city === '' ? 'c-c7c6c6 select-pink' : 'select-gray'}`}
            >
                <option value=''>Shaharni tanlang..</option>
                {region === ''
                    ? ''
                    : regionName.data.map(cityName => (
                          <option key={cityName.id}>{cityName.city}</option>
                      ))}
            </Input>
            <Input
                type='select'
                className={`border-0 borr-5 bgc-white text-truncate ${
                    region === '' ? 'c-c7c6c6 select-pink' : 'select-gray'
                }`}
                onChange={e => setRegion(e.target.value)}
            >
                <option value='' className='c-c7c6c6'>
                    Viloyatni tanlang..
                </option>
                {nimadir.map(nima => (
                    <option key={nima.id} value={nima.region}>
                        {nima.region}
                    </option>
                ))}
            </Input>
        </div>
    )
}
