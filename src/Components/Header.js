import React, { useState } from "react";
import { Container, Navbar, Button, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Search, QuestionCircle, Gear, Grid3x3GapFill } from "react-bootstrap-icons";
import MainMenu from "./MainMenu";

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

  const [calendarView, setCalendarView] = useState('Week')

  const handleRecord = (dayView) => {
    setCalendarView(dayView)
  }

  return (
    <>
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="light">
          <img src={require('./calendar.png')} alt="calendar-icon" width="100px"/>
          <Navbar.Brand href="#">Calendar</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="light" style={todayBtnStyle} >Today</Button>
            <Button variant="light" style={arrowBtnStyle}>
              <ChevronLeft size={15} />
            </Button>
            <Button variant="light" style={arrowBtnStyle}>
              <ChevronRight size={15} />
            </Button>
            <Button variant="light">
              <p>
              </p>
            </Button>
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
      />
    </Container>
    </>
  )
}

export default Header
