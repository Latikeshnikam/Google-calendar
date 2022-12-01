import React, { useState } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import FourDayView from "./FourDays";
import EventModal from "./EventModal";
import OutOfOfficeModal from './OutOfOfficeModal';
import TaskModal from './TaskModal';
import AppointmentSlots from './AppointmentSlotsModal';
import CalendarView from "./CalendarView";

const MainMenu = ({ calendarView, currentDate, prevClick, nextClick }) => {

  const [showEventModal, setEventModal ] = useState(false)
  const [showOutOffcModal, setOutOffcModal ] = useState(false)
  const [showTaskModal, setTaskModal ] = useState(false)
  const [showAppointmentModal, setAppointmentModal ] = useState(false)

  const handleCloseEventModal = () => setEventModal(false)
  const handleShowEventModal = () => setEventModal(true)
  const handleCloseOutOffcModal = () => setOutOffcModal(false)
  const handleShowOutOffcModal = () => setOutOffcModal(true)
  const handleCloseTaskModal = () => setTaskModal(false)
  const handleShowTaskModal = () => setTaskModal(true)
  const handleCloseAppointmentModal = () => setAppointmentModal(false)
  const handleShowAppointmentModal = () => setAppointmentModal(true)

  const filterButton = {
    marginTop: '10px',
  }

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Create" style={filterButton} variant="light" style={{marginTop: '-20px', marginBottom: '-40px'}}>
        <Dropdown.Item as="button" onClick={() => handleShowEventModal()}>Event</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleShowOutOffcModal()}>Out Of Office</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleShowTaskModal()}>Task</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleShowAppointmentModal()}>Appointment Slots</Dropdown.Item>
      </DropdownButton>
      {showEventModal && (
        <EventModal handleClose={handleCloseEventModal} show={showEventModal} />
      )}
      {showOutOffcModal && (
        <OutOfOfficeModal handleClose={handleCloseOutOffcModal} show={showOutOffcModal} />
      )}
      {showTaskModal && (
        <TaskModal handleClose={handleCloseTaskModal} show={showTaskModal} />
      )}
      {showAppointmentModal && (
        <AppointmentSlots handleClose={handleCloseAppointmentModal} show={showAppointmentModal} />
      )}
      {calendarView === 'Week' && (
        <WeekView
          currentDate={currentDate}
          prevClick={prevClick}
          nextClick={nextClick}
        />
      )}
      {calendarView === 'Day' && (
        <DayView
          currentDate={currentDate}
          prevClick={prevClick}
          nextClick={nextClick}
        />
      )}
      {calendarView === 'Month' && (
        <MonthView
          currentDate={currentDate}
          prevClick={prevClick}
          nextClick={nextClick}
        />
      )}
      {calendarView === '4 days' && (
        <FourDayView
          currentDate={currentDate}
          prevClick={prevClick}
          nextClick={nextClick}
        />
      )}
      {calendarView === 'Year' && (
        <CalendarView />
      )}
    </>
  )
}

export default MainMenu;
