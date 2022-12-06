import React, { useState, useEffect } from "react";
import moment from "moment";
import { Weeks, Months } from './constants.js';
import { Container } from "react-bootstrap";
import './CalendarView.css'

const CalendarView = () => {
  const [ daysInYears, setDaysInYears ] = useState({
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  })

  const [ remainingWeekDays, setRemainingWeekDays ] = useState({
    January: []
  })

  const handleDayWeekMapping = (days, month) => {
    let emptyDays = []
    if([...days].reverse()[0].week === 'Sat'){
      for(let i = 0; i < 6; i ++){
        emptyDays.push({
          day: 0,
          week: 0,
        })
      }
    }

    setRemainingWeekDays(remainingWeekDays => ({
      ...remainingWeekDays,
      [month]: emptyDays
    }))
  }

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

    handleDayWeekMapping(arrDays, month)

    let mappedWeekDays = arrDays.reverse()
    let emptyDayWeeks = remainingWeekDays['January'] ? remainingWeekDays['January'] : []

    mappedWeekDays.unshift(...emptyDayWeeks)

    setDaysInYears(daysInYears => ({
      ...daysInYears,
      [month]: mappedWeekDays
    }))
  }

  useEffect(() => {
    getDaysArrayByMonth('2022-01')
    // getDaysArrayByMonth('2022-02')
    // getDaysArrayByMonth('2022-03')
    // getDaysArrayByMonth('2022-04')
    // getDaysArrayByMonth('2022-05')
    // getDaysArrayByMonth('2022-06')
    // getDaysArrayByMonth('2022-07')
    // getDaysArrayByMonth('2022-08')
    // getDaysArrayByMonth('2022-09')
    // getDaysArrayByMonth('2022-10')
    // getDaysArrayByMonth('2022-11')
    // getDaysArrayByMonth('2022-12')
  },[])

  let sampleArr = daysInYears ? daysInYears['January'] : []


  return (
    <>
      <Container className="yearcontainer">
        {Months.map((month) => {
          return (
              <div className="monthview">
                <div className="monthwrapper">{month}</div>
                {Weeks.map((week) => {
                  return (
                    <div className="weekday">{week}</div>
                  )
                })}
                {sampleArr.map((week) => {
                  return (
                    <div className={`${week.day ? 'weekday' : 'weeknone'}`}>{week.day}</div>
                  )
                })}
              </div>
          )
        })}
      </Container>
    </>
  )
}

export default CalendarView;
