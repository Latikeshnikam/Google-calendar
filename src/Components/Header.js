import React, { useState, useEffect } from "react";
import { Container, Navbar, Button, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Search, QuestionCircle, Gear, Grid3x3GapFill } from "react-bootstrap-icons";
import MainMenu from "./MainMenu";
import DatePicker from "react-datepicker";
import './Header.css';

const todayBtnStyle = {
  border: '2px solid #F1F1F1',
  marginRight: "20px",
  marginLeft: "20px"
}

const arrowBtnStyle = {
  borderRadius: "60%",
  marginRight: '5px',
}

const iconsStyle = {
  marginTop: '20px',
  marginRight: '20px',
  marginLeft: '20px'
}

const filterButton = {
  marginTop: '10px',
}

const userIconStyle = {
  marginTop: '13px'
}

const infoIcons = () => {
  return(
    <>
      <Search size={20} style={iconsStyle}/>
      <QuestionCircle size={20} style={iconsStyle} />
      <Gear size={20} style={iconsStyle}/>
    </>
  )
}



const filters = (handleRecord, calendarView) => {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title={calendarView} style={filterButton} variant="light">
        <Dropdown.Item as="button" onClick={() => handleRecord('Day')}>Day</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleRecord('Week')}>Week</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleRecord('Month')}>Month</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleRecord('Year')}>Year</Dropdown.Item>
        <Dropdown.Item as="button">Schedule</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleRecord('4 days')}>4 days</Dropdown.Item>
    </DropdownButton>
    </>
  )
}

const Header = () => {

  const [calendarView, setCalendarView] = useState('Week');
  const [startDate, setStartDate] = useState(new Date());
  const [prevClick, setPrevClick] = useState(false)
  const [nextClick, setNextClick] = useState(false)

  const handleRecord = (dayView) => {
    setCalendarView(dayView)
  }

  const getPreviousDate = () => {
    const previous = startDate;
    previous.setDate(startDate.getDate() - 1);
    return previous
  }

  const getNextDate = () => {
    const next = startDate;
    next.setDate(next.getDate() + 1);
    return next
  }

  const handleTodayDate = () => {
    return new Date()
  }

  useEffect(() => {
    getPreviousDate()
  },[prevClick])

  useEffect(() => {
    getNextDate()
  },[nextClick])

  return (
    <>
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="light">
          <img src={require('./calendar.png')} alt="calendar-icon" width="100px"/>
          <Navbar.Brand href="#">Calendar</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="light" style={todayBtnStyle} onClick={() => setStartDate(handleTodayDate)} >Today</Button>
            <Button variant="light" style={arrowBtnStyle} onClick={() => setPrevClick(!prevClick)}>
              <ChevronLeft size={15} />
            </Button>
            <Button variant="light" style={arrowBtnStyle} onClick={() => setNextClick(!nextClick)}>
              <ChevronRight size={15} />
            </Button>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
              }}
              placeholderText={startDate}
              dateFormat="MMMM d, yyyy"
            />
          </Nav>
          <Nav className="justify-content-end">
            {infoIcons()}
            {filters(handleRecord, calendarView)}
            <Grid3x3GapFill size={20} style={iconsStyle} />
            <img src={require('./user.png')} alt="calendar-icon" width="30px" height="30px" style={userIconStyle}/>
          </Nav>
      </Navbar>
    </Container>
    <Container fluid>
      <MainMenu
        calendarView={calendarView}
        currentDate={startDate}
        prevClick={prevClick}
        nextClick={nextClick}
      />
    </Container>
    </>
  )
}

export default Header
