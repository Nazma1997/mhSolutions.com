import React from 'react';
import { Container,Col, Card } from 'react-bootstrap';
import { eventslist } from './EventList'
import { SlCalender } from 'react-icons/sl';
import { BsFillCalendarEventFill } from 'react-icons/bs';

const List = () => {
  return (
    <Container 
      style={{
        height: '500px',
        overflowY: 'scroll',
      }}
    className='list-main-div my-5'>
      {
        eventslist?.map(item => (
          <Col className="mb-3">
            <Card.Body>
              <Card.Title> <SlCalender className='common-color mx-3' /> {item?.date}</Card.Title>
              <Card.Text>
                <BsFillCalendarEventFill className='common-color mx-3' /> {item?.title}
              </Card.Text>
            </Card.Body>
            <hr />
          </Col>
        ))
      }
    </Container>
  );
};

export default List;
