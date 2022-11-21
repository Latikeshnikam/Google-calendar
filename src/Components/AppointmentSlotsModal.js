import React from "react";
import { Button, Modal, Container, Form, InputGroup } from "react-bootstrap";
import { Stopwatch } from "react-bootstrap-icons";

const AppointmentSlots = ({ show, handleClose }) => {
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container className="d-flex">
        <div className="m-3"></div>
        <InputGroup className="title-input">
          <Form.Control
            placeholder="Add title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            autoFocus
          />
        </InputGroup>
        </Container>
        <Container className="d-flex action-btns">
          <div className="m-3"></div>
          <Button variant="light" className="action-btn">Event</Button>
          <Button variant="light" className="action-btn">Out of office</Button>
          <Button variant="light" className="action-btn">Task</Button>
          <Button variant="light" className="action-btn">Reminder</Button>
          <Button variant="light" className="action-btn">Appointment slots</Button>
        </Container>
        <Container className="d-flex mt-1">
          <div style={{ marginTop: "10px"}}>
            <Stopwatch size={20} />
          </div>
          <div className="timer-content">
            <span>Tuesday, November 1 &nbsp; &nbsp;4:30pm - 5:30pm</span><br/>
            <span className="timer-subcontent">Time zone - Does not repeat</span>
          </div>
        </Container>
        <Container className="d-flex mt-1">
          <div className="m-3"></div>
          <div>Slots with duration - 30 - minutes</div>
          <div>

          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light">More Options</Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AppointmentSlots;
