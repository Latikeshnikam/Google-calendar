import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { WeeksAbbr } from './constants';
import "./WeekView.css";
import moment from "moment";

const WeekView  = ({currentDate, prevClick, nextClick}) => {
  const [weekDays, setWeekDays] = useState(null)

  useEffect(() => {
    let current = moment(currentDate);
    var weekStart = current.clone().startOf('week');
    var weekEnd = current.clone().endOf('week');

    var days = [];
    for (let i = 0; i <= 6; i++) {
      days.push({
        weekday: moment(weekStart).add(i, 'days').format("ddd"),
        date: moment(weekStart).add(i, 'days').format("D")
      })
    };
    setWeekDays(days)
  },[currentDate, prevClick, nextClick])

  return (
    <>
    <Container fluid className="d-flex">
      <div className="flexrow p-2">
        <label className="rowone">GMT+05:30</label>
      </div>
      {weekDays?.map((week, index) => (
        <div key={index} className="row-one-info p-2 flex-grow-1">{week.weekday.toUpperCase()} <br/> {week.date}</div>
      ))}
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">1 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">2 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">3 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">4 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">5 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">6 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">7 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">8 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">9 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">10 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">11 AM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">12 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">1 PM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">2 PM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">3 PM</label>
      </div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
      <div className="column-two p-2 flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">4 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">5 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">6 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">7 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">8 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">9 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">10 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">11 PM</label>
      </div>
      <div className="p-2 column-two flex-grow-1"></div>
    </Container>
  </>
  )
}

export default WeekView;
