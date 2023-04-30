import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cookies = () => {
  const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);
  useEffect(() => {
    const cookie = sessionStorage.getItem("mhCookies");
    if (cookie === "false") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [show]);

  const handleClose = () => {
    sessionStorage.setItem("mhCookies", "false");
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Cookies Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="mx-5">MH</h5>
          <h5 className="mx-5">MH PREMIER STAFFING SOLUTIONS</h5>
          <p className="mx-5">
            We use cookies on our website to give you the most relevant
            experience by remembering your preferences and repeat visits. By
            clicking “Accept All”, you consent to the use of ALL the cookies.
            However, you may visit "Cookie Settings" to provide a controlled
            consent.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Decline
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cookies;