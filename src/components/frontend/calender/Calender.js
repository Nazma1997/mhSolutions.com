import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Button, Modal } from 'react-bootstrap';
import './calender.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import List from './List';
import { eventslist } from './EventList'



const WeekDay = styled.div`
  width: 14.2%;
  color:white;
  height: 50px;
  display: flex;
  // border-radius: 5px ;
  
  align-items: center;
  justify-content: center;
  cursor: pointer;
   background-color:#C6A34F ;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;
const Day = styled.div`
  width: 14.2%;

  font-size: 25px;
  font-weight: 500;
  height: 150px;
  border-radius: 15px;
  // margin:1px;
  display: flex;
  align-items: top;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(128, 128, 128, 0.178);
   

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;



function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const [tab, setTab] = useState('calendar');



  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  function getEventsByDate(date) {
    return eventslist?.filter((event) => event.date === date);
  }



  const [showModal, setShowModal] = useState(false);
  const [eventsForDateToShow, setEventsForDateToShow] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const itemsToShowInitially = 1;

  const handleShowMoreClick = (date) => {
    const eventsForDate = getEventsByDate(
      date.toISOString().split('T')[0]
    );
    setEventsForDateToShow(eventsForDate);
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className=' bg-white calender-main-div'>
      <div className='d-lg-flex d-md-flex justify-content-lg-between justify-content-md-between py-3 mx-lg-5  mx-md-1 mx-sm-5'>
        <h5 className='mt-4 py-2 px-2 common-border'><SlCalender className='me-2 -mt-2 ' />Today,{formatDate(today)}</h5>

        <div className='d-flex my-2'>
          <MdKeyboardArrowLeft className='arrow-button' onClick={() => setDate(new Date(year, month - 1, day))} />
          <div className='mx-2 mt-lg-3 mt-md-4 custom-margin'>
            <h4 className='font-weight-bold date-width ms-2'>{MONTHS[month]} {year}</h4>
          </div>
          <MdKeyboardArrowRight className='arrow-button' onClick={() => setDate(new Date(year, month + 1, day))} />
        </div>
        <div className='tab-item d-flex  mt-4 py-1 px-2'>
          <p className='me-2   month'> Months <SlCalender onClick={() => setTab('calendar')} /></p>
          <p className='me-2 common-border2 '><AiOutlineUnorderedList onClick={() => setTab('list')} /> List </p>
        </div>
      </div>
      {tab === 'calendar' && (
        <div className='calender-main'>
          <div className='calender' >
            {DAYS_OF_THE_WEEK.map((d) => (
              <WeekDay key={d}>
                <strong >{d}</strong>
              </WeekDay>
            ))}

            {Array(days[month] + (startDay - 1))
              .fill(null)
              .map((_, index) => {
                const d = index - (startDay - 2);
                const currentDate = new Date(year, month, d);
                const eventsForDate = getEventsByDate(
                  currentDate.toISOString().split('T')[0]
                );
                return (
                  <Day
                    key={index}
                    isToday={d === today.getDate()}
                    isSelected={d === day}
                    onClick={() => handleShowMoreClick(currentDate)}
                  >
                    {d > 0 ? (
                      <div>
                        {d} <br />
                        {eventsForDate.length > itemsToShowInitially ? (
                          <div>
                            {eventsForDate.slice(0, itemsToShowInitially).map((event, idx) => (
                              <div key={idx}>
                                <p className='event-title my-1'>{event.title}</p>
                              </div>
                            ))}
                            <button
                              onClick={() => handleShowMoreClick(currentDate)}
                              className=' btn-show-more' // Add a CSS class here (e.g., 'btn-show-more')
                            >
                              Show More
                            </button>
                          </div>
                        ) : (
                          eventsForDate.map((event, idx) => (
                            <div key={idx}>
                              <p className='event-title my-1'>{event.title}</p>
                            </div>
                          ))
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                  </Day>
                );
              })}
          </div>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedDate && formatDate(selectedDate)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {eventsForDateToShow.map((event, idx) => (
                  <li key={idx}>{event.title}</li>
                ))}
              </ul>
            </Modal.Body>
          </Modal>
        </div>
      )}
      {tab === 'list' && <List />}
    </div>
  );
}
export default Calendar;
