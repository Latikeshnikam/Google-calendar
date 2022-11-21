import React from "react";
import { Form, Modal, Button, Container, InputGroup } from "react-bootstrap";
import "./OutOfOfficeModal.css";
import { Stopwatch, Lock, QuestionCircle } from "react-bootstrap-icons";

const OutOfOfficeModal = ({
  show,
  handleClose
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container className="d-flex">
            <div className="m-3"></div>
            <InputGroup className="title-input">
              <Form.Control
                placeholder="Out Of Office"
                aria-label="OutOfOffice"
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
            <div>
              <Form.Check
                type={"checkbox"}
                id={'meetings-checkbox'}
                defaultChecked={true}
              />
            </div>
            <div className="timer-content">
              <span>Automaticaly declined meetings</span><br/>
              <div className="d-flex">
                <Form.Check
                  type={"radio"}
                  id={'new-meeting-radio'}
                />
                <span className="mx-2">Only new meeting invitations</span>
              </div>
              <div className="d-flex">
                <Form.Check
                  type={"radio"}
                  id={'existing-meeting-radio'}
                  defaultChecked={true}
                />
                <span className="mx-2">New and existing meetings</span>
              </div>
              <hr style={{width: "500px"}}/>
              <div>
                <span className="message-title">Message</span><br/>
                <span>Declined because I am out of office</span>
              </div>
            </div>
          </Container>
          <Container className="d-flex mt-1">
            <div style={{ marginTop: "10px"}}>
              <Lock size={20} />
            </div>
            <div className="d-flex">
              <div className="status-title">Public</div>
              <QuestionCircle size={20} style={{marginTop: "15px", marginLeft: "10px"}}/>
            </div>
          </Container>
          <Container className="d-flex mt-1">
            <div className="m-3"></div>
            <span className="message-title">Availability might be shown in other Google apps</span>
            <QuestionCircle size={15} className="question-icon"/>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OutOfOfficeModal;
