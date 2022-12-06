import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import moment from 'moment';
import "./MonthView.css"

const MonthView = ({currentDate, prevClick, nextClick}) => {

  const [monthDays, setMonthDays] = useState(null);
  const [previousMonth, setPreviousMonth] = useState(null);
  const [nextMonth, setNextMonth] = useState(null);
  let todayDate = new Date()

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
    setMonthDays(arrDays.reverse())
  }

  const handleLastMonthDays = (arr, weekNumber) => {
    return arr.slice(0,weekNumber).reverse();
  }

  const handleNextMonthDays = (arr, weekNumber) => {
    let remainingDays = 7 - weekNumber;
    return arr.reverse().slice(0,remainingDays-1)
  }

  const getDaysArrayOfPreviousMonth = (YearMonth) => {
    let previousYearMonth = moment(YearMonth).subtract(1,'months').format('YYYY-M');
    let daysInMonth = moment(previousYearMonth).daysInMonth();
    let previousArr = [];
    while(daysInMonth) {
      let current = moment(previousYearMonth).date(daysInMonth);
      previousArr.push({
        day: current.format("D"),
        week: current.format("ddd")
      });
      daysInMonth--;
    }
    setPreviousMonth(handleLastMonthDays(previousArr, moment().startOf('month').format('E')))
  }

  const getDaysArrayOfNextMonth = (YearMonth) => {
    let nextYearMonth = moment(YearMonth).add(1,'months').format('YYYY-M')
    let daysInMonth = moment(nextYearMonth).daysInMonth();
    let nextMonthArr = [];
    while(daysInMonth) {
      let current = moment(nextYearMonth).date(daysInMonth);
      nextMonthArr.push({
        day: current.format("D"),
        week: current.format("ddd")
      });
      daysInMonth--;
    }
    setNextMonth(handleNextMonthDays(nextMonthArr, moment().endOf('month').format('E')))
  }

  useEffect(() => {
    getDaysArrayByMonth(moment(currentDate).format('YYYY-M'))
  },[currentDate, nextClick, prevClick])

  useEffect(() => {
    getDaysArrayOfPreviousMonth(moment(currentDate).format('YYYY-M'))
  },[])

  useEffect(() => {
    getDaysArrayOfNextMonth(moment(currentDate).format('YYYY-M'))
  },[])

  return (
    <>
    <Container fluid className="d-flex p-2 flex-wrap">
      {((previousMonth && nextMonth) ? [...previousMonth, ...monthDays, ...nextMonth] : []).slice(0,7).map((month, index) => {
        if(moment(todayDate).format('ddd, D') === `${month.week}, ${month.day}`){
          return(
            <div key={index} className="first-row">{month.week.toUpperCase()}<br/> <span className="active-month-date">{month.day}</span></div>
          )
        } else {
          return(
            <div key={index} className="first-row">{month.week.toUpperCase()} <br/>{month.day}</div>
          )
        }
      })}
    </Container>
      <Container fluid className="d-flex p-2 flex-wrap">
        {((previousMonth && nextMonth) ? [...previousMonth, ...monthDays, ...nextMonth] : []).slice(7,(previousMonth ? [...previousMonth, ...monthDays, ...nextMonth].length : 0)).map((month, index) => {
          if(moment(todayDate).format('ddd, D') === `${month.week}, ${month.day}`){
            return(
              <div key={index} className="first-row"><span className="active-month-date">{month.day}</span></div>
            )
          } else {
            return(
              <div key={index} className="first-row">{month.day}</div>
            )
          }
        })}
      </Container>
    </>
  )
}

export default MonthView;
