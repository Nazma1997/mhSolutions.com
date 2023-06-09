import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { DateRange } from 'react-date-range';
import starIcon from '../../../layouts/frontend/image/icons/Star 1.png';
import chefIcon from '../../../layouts/frontend/image/icons/chef.png';
import dateIcon from '../../../layouts/frontend/image/icons/date.png';
import fvtIcon from '../../../layouts/frontend/image/icons/fvt.png';
import ltIcon from '../../../layouts/frontend/image/icons/lt.png';
import runnerIcon from '../../../layouts/frontend/image/icons/runner.png';
import securityIcon from '../../../layouts/frontend/image/icons/security.png';
import img1 from '../../../layouts/frontend/image/shortList/1.jpg';
import img2 from '../../../layouts/frontend/image/shortList/2.jpg';
import img3 from '../../../layouts/frontend/image/shortList/3.jpg';
import img4 from '../../../layouts/frontend/image/shortList/4.jpg';
import img5 from '../../../layouts/frontend/image/shortList/5.jpg';
import img6 from '../../../layouts/frontend/image/shortList/6.jpg';
import './ShortList.css';

const styles = {
    selectionRange: {
        background: '#c6a34f',
        opacity: 0.5
    }
};

const ShortList = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const chef = [
        {
            id: 1,
            img: img1,
            name: 'Mr Alquraish Sharkar',
            rating: '4.5 (125)',
            day: '2 Jan - 10 Jan (9 days)',
        },
        {
            id: 1,
            img: img2,
            name: 'Mr Alquraish Sharkar',
            rating: '4.5 (125)',
            day: '2 Jan - 10 Jan (9 days)',
        }
    ];
    const runner = [
        {
            id: 1,
            img: img3,
            name: 'Jonathon Alex Bend',
            rating: '4.5 (125)',
            day: '2 Jan - 10 Jan (9 days)',
        },
        {
            id: 1,
            img: img4,
            name: 'Christopher Nolan',
            rating: '4.5 (125)',
            day: '2 Jan - 10 Jan (9 days)',
        },
        {
            id: 1,
            img: img5,
            name: 'Anada Aniana',
            rating: '4.5 (125)',
            day: '2 Jan - 10 Jan (9 days)',
        }
    ]

    const security = [
        {
            id: 1,
            img: img6,
            name: 'Mr Alquraish Sharkar',
            rating: '4.5 (125)',
            day: '2 Jan - 10 Jan (9 days)',
        }
    ];

    return (
        <div className="my-5">
            <div className="container px-0">
                <div className="mt-2 container-style mb-4">
                    <div className='mb-3 d-flex align-items-center'>
                        <img src={chefIcon} width={26} height={26} alt="" />
                        <span className='ms-2 fw-500' style={{ fontSize: '17px' }}>Chef (2)</span>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2  g-4">
                        {
                            chef?.map(item => (
                                <div className="col">
                                    <div
                                        className="card h-100 short-list-card"
                                    //   onClick={() => handleDetailsShow("id")}
                                    >
                                        <img src={item.img} className="card-img-top" alt="profile" />
                                        <div className="card-body">
                                            <span className="card-title card-title-style fw-500">{item.name}</span>
                                            <div className="card-text mb-2 d-flex justify-content-start align-items-center">
                                                <img src={starIcon} width={15} height={15} alt="star icon" />
                                                <span className='ms-2 start-text fw-500'>{item.rating}</span>
                                            </div>
                                            <div className='mb-2'>
                                                <img src={dateIcon} width={15} height={15} alt="" />
                                                <span onClick={handleShow} className='ms-2 pointer' style={{ fontSize: '14px' }}>2 Jan - 10 Jan (9 days)</span>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <button className='fvt-btn'>
                                                    <img src={fvtIcon} className='w-100' alt="" />
                                                </button>
                                                <button className='book-btn ms-2 fw-500'>Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            
            {/* Runner section  */}
            <div className="container px-0">
                <div className="mt-2 container-style mb-4">
                    <div className='mb-3 d-flex align-items-center'>
                        <img src={runnerIcon} width={26} height={26} alt="" />
                        <span className='ms-2 fw-500' style={{ fontSize: '17px' }}>Runner (3)</span>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2  g-4">
                        {
                            runner?.map(item => (
                                <div className="col">
                                    <div
                                        className="card h-100 short-list-card"
                                    >
                                        <img src={item.img} className="card-img-top" alt="profile" />
                                        <div className="card-body">
                                            <span className="card-title card-title-style fw-500">{item.name}</span>
                                            <div className="card-text mb-2 d-flex justify-content-start align-items-center">
                                                <img src={starIcon} width={15} height={15} alt="star icon" />
                                                <span className='ms-2 start-text fw-500'>{item.rating}</span>
                                            </div>
                                            <div className='mb-2'>
                                                <img src={dateIcon} width={15} height={15} alt="" />
                                                <span onClick={handleShow} className='ms-2 pointer' style={{ fontSize: '14px' }}>2 Jan - 10 Jan (9 days)</span>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <button className='fvt-btn'>
                                                    <img src={fvtIcon} className='w-100' alt="" />
                                                </button>
                                                <button className='book-btn ms-2 fw-500'>Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* security section  */}
            <div className="container px-0">
                <div className="mt-2 container-style mb-4">
                    <div className='mb-3 d-flex align-items-center'>
                        <img src={securityIcon} width={26} height={26} alt="" />
                        <span className='ms-2 fw-500' style={{ fontSize: '17px' }}>Security (1)</span>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2  g-4">
                        {
                            security?.map(item => (
                                <div className="col">
                                    <div
                                        className="card h-100 short-list-card"
                                    >
                                        <img src={item.img} className="card-img-top" alt="profile" />
                                        <div className="card-body">
                                            <span className="card-title card-title-style fw-500">{item.name}</span>
                                            <div className="card-text mb-2 d-flex justify-content-start align-items-center">
                                                <img src={starIcon} width={15} height={15} alt="star icon" />
                                                <span className='ms-2 start-text fw-500'>{item.rating}</span>
                                            </div>
                                            <div className='mb-2'>
                                                <img src={dateIcon} width={15} height={15} alt="" />
                                                <span onClick={handleShow} className='ms-2 pointer' style={{ fontSize: '14px' }}>2 Jan - 10 Jan (9 days)</span>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <button className='fvt-btn'>
                                                    <img src={fvtIcon} className='w-100' alt="" />
                                                </button>
                                                <button className='book-btn ms-2 fw-500'>Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <Modal className="modal-md" show={show} onHide={handleClose} animation={true}>
                <div className='mt-2'>
                    <div className="d-flex justify-content-between align-items-center px-4">
                        <div className='pointer bg-color px-2 rounded' onClick={handleClose}>
                            <img src={ltIcon} height={15} width={10} alt="icon" /></div>
                        <div><span className='fw-500'>Select Date Range</span></div>
                        <div><button className="apply-range-btn" onClick={handleClose}>Apply Range</button></div>
                    </div>
                </div>
                <Modal.Body className="text-center">
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        rangeColors={['#c6a34f']}
                        className={'date-range-wrapper date-picker-custom'}
                        styles={styles}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ShortList;