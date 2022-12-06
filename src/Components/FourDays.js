import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./WeekView.css";
import moment from "moment"

const FourDayView  = ({
  currentDate,
  prevClick,
  nextClick
}) => {
  const [fourDays, setFourDays] = useState([])
  let todayDate = new Date()

  useEffect(() => {
    let current = moment(currentDate)
    let fourDaysArr = [];
    for(let i=0; i<4; i++){
      fourDaysArr.push({
        weekday: moment(current).add(i, 'days').format("ddd"),
        date: moment(current).add(i, 'days').format("D")
      })
    }
    setFourDays(fourDaysArr)
  },[currentDate, prevClick, nextClick])

  return (
    <>
    <Container fluid className="d-flex">
      <div className="flexrow p-2">
        <label className="rowone">GMT+05:30</label>
      </div>
      {fourDays?.map((week, index) => {
        if(moment(todayDate).format('ddd, D') === `${week.weekday}, ${week.date}`){
          return(
            <div key={index} className="row-one-info p-2 flex-grow-1"><span className="active-weekday">{week.weekday.toUpperCase()}</span> <br/> <span className="active-week-date">{week.date}</span></div>
          )
        } else {
          return(
            <div key={index} className="row-one-info p-2 flex-grow-1"><span className="weekday">{week.weekday.toUpperCase()}</span> <br/> <span className="week-date">{week.date}</span></div>
          )
        }
      }
      )}
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">1 AM</label>
      </div>
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
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">3 AM</label>
      </div>
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
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">5 AM</label>
      </div>
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
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">7 AM</label>
      </div>
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
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">9 AM</label>
      </div>
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
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">11 AM</label>
      </div>
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
    </Container>
    <Container className="d-flex" fluid >
      <div className="flexrow p-2">
        <label className="dayrow">2 PM</label>
      </div>
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

export default FourDayView;
