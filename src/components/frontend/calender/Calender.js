import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { eventslist } from './EventList';
import './calender.css';

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventslist,
      lang: 'en',
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null,
    };
  }

  handleSelect = () => {
    let value = document.querySelector('#slct').value;
    this.setState({
      lang: value
    });
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentMonth: prevState.currentMonth === 0 ? 11 : prevState.currentMonth - 1,
      currentYear: prevState.currentMonth === 0 ? prevState.currentYear - 1 : prevState.currentYear,
    }));
  }

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentMonth: prevState.currentMonth === 11 ? 0 : prevState.currentMonth + 1,
      currentYear: prevState.currentMonth === 11 ? prevState.currentYear + 1 : prevState.currentYear,
    }));
  }

  render() {
    return (
      <div className="container calendar">
       
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={this.state.events}
          dateClick={this.handleDateClick}
          eventContent={renderEventContent}
          height={500}
          // navLinks={true}
          // selectable={true}
          selectMirror={true}
          eventBackgroundColor={'#F8485E'}
          eventColor={'#495464'}
          eventTextColor={'white'}
          displayEventTime={true}
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }}
          eventClick={(info) => alert(info.event.title)}
          // Draggable={true}
          editable={true}
          // eventResizableFromStart={true}
          droppable={true}
          dayMaxEventRows={true}
          locale={this.state.lang}
          // themeSystem={'Solar'}
          timeZone={'UTC'}
          eventRender={(info) => {
            const day = new Date(info.event.start);
            if (this.state.selectedDate && day.toDateString() === this.state.selectedDate.toDateString()) {
              info.el.style.backgroundColor = 'red';
            }
          }}
        />
      </div>
    )
  }

  handleDateClick = (arg) => {
    let eventFromPrompt = prompt(`Enter an event for date: ${arg.dateStr}`)
    if ((eventFromPrompt != '') && (eventFromPrompt != null)) {
      this.setState({
        events: [...this.state.events, { title: eventFromPrompt, date: arg.dateStr }]
      });
    }
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
    </>
  )
}
