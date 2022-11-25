import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import moment from 'moment';
import "./MonthView.css"

const MonthView = ({currentDate}) => {

  const [monthDays, setMonthDays] = useState(null);

  const getDaysArrayByMonth = (YearMonth) => {
    let daysInMonth = moment(YearMonth).daysInMonth();
    let month = moment(YearMonth).format('MMMM')
    let arrDays = []

    while(daysInMonth) {
      let current = moment(YearMonth).date(daysInMonth);
      arrDays.push({
        day: current.format("D"),
        week: current.format("ddd")
      });
      daysInMonth--;
    }
    setMonthDays(arrDays)
  }

  useEffect(() => {
    getDaysArrayByMonth(moment(currentDate).format('YYYY-M'))
  },[])

  return (
    <>
      <Container fluid className="d-flex p-2">
        <div className="first-row">SUN <br/> 31</div>
        <div className="first-row">MON <br/> Nov 1</div>
        <div className="first-row">TUE <br/> 2</div>
        <div className="first-row">WED <br/> 3</div>
        <div className="first-row">THU <br/> 4</div>
        <div className="first-row">FRI <br/> 5</div>
        <div className="first-row">SAT <br/> 6</div>
      </Container>
      <Container fluid className="d-flex p-2">
        <div className="other-row">7</div>
        <div className="other-row">8</div>
        <div className="other-row">9</div>
        <div className="other-row">10</div>
        <div className="other-row">11</div>
        <div className="other-row">12</div>
        <div className="other-row"> 13</div>
      </Container>
      <Container fluid className="d-flex p-2">
        <div className="other-row">14</div>
        <div className="other-row">15</div>
        <div className="other-row">16</div>
        <div className="other-row">17</div>
        <div className="other-row">18</div>
        <div className="other-row">19</div>
        <div className="other-row">20</div>
      </Container>
      <Container fluid className="d-flex p-2">
        <div className="other-row">21</div>
        <div className="other-row">21</div>
        <div className="other-row">23</div>
        <div className="other-row">24</div>
        <div className="other-row">25</div>
        <div className="other-row">26</div>
        <div className="other-row">27</div>
      </Container>
      <Container fluid className="d-flex p-2">
        <div className="other-row">28</div>
        <div className="other-row">29</div>
        <div className="other-row">30</div>
        <div className="other-row">Dec 1</div>
        <div className="other-row">2</div>
        <div className="other-row">3</div>
        <div className="other-row">4</div>
      </Container>

    </>
  )
}

export default MonthView;
