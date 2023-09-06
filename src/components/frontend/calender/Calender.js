import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import './calender.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineUnorderedList } from 'react-icons/ai';


export const eventslist = [
  { title: 'some events', date: '2021-08-16', start: '2021-08-16', end: '2021-08-19', },
  { title: 'some event', date: '2021-08-20' },
  { title: 'some event', date: '2021-08-28' },
  { title: 'random event', date: '2021-09-06' },
  { title: 'meeting with family', date: '2021-09-11' },
  { title: 'Shopping', date: '2021-09-15' },
  { title: 'visit city', date: '2021-09-22' },
  { title: 'some event goes here', date: '2021-09-02' },
  { title: 'Shopping', date: '2021-10-15' },
]

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: White;
  border-radius: 15px;
`;

const WeekDay = styled.div`
  width: 14.2%;
  color:white;
  height: 50px;
  display: flex;
  border-radius: 5px ;
  
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
  const [tab, setTab] = useState('calendar'); // Set the default tab to 'calendar'

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

  return (
    <div className=' bg-white calender-main-div'>
      <div className='d-lg-flex d-md-flex justify-content-lg-between justify-content-md-between py-3 mx-lg-5  mx-md-1 mx-sm-5'>
        <h5 className='mt-4 '><SlCalender className='me-2 -mt-2 ' />Today,{formatDate(today)}</h5>
        
          <div className='d-flex my-2'> 
            <MdKeyboardArrowLeft className='arrow-button' onClick={() => setDate(new Date(year, month - 1, day))} /> 
            <div className='mx-2 mt-lg-3 mt-md-4 custom-margin'>
            <h4 className='font-weight-bold'>{MONTHS[month]} {year}</h4>
            </div>
            <MdKeyboardArrowRight className='arrow-button' onClick={() => setDate(new Date(year, month + 1, day))} />
          </div>
          <div className='tab-item'>
          <p className='me-2 mt-4 '> Months <SlCalender onClick={() => setTab('calendar')}  /></p>
          <p className='me-2 mt-4 '><AiOutlineUnorderedList onClick={() => setTab('list')} /> List </p>
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
                  return (
                    <Day
                      key={index}
                      isToday={d === today.getDate()}
                      isSelected={d === day}
                      onClick={() => setDate(new Date(year, month, d))}
                    >
                      {d > 0 ? d : ''}
                    </Day>
                  );
                })}
        
          </div>
      </div>
      )}
      {tab === 'list' && (
        <Body>
          {/* Render your list items here */}
          {/* Example: */}
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Body>
      )}

    </div>
  );
}

export default Calendar;
