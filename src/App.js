import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./App.css";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState("");
  const Performtask = (e) => {
    setValue(value + e.target.value);
  };
  const Deletevalue = () => {
    setValue(value.slice(0, -1));
  };

  const RemoveValue = () => {
    setValue("");
  };

  const result = () => {
    const inputValue = value.toString().trim();

    if (inputValue === "" || /^[0-9.]+$/.test(inputValue)) {
      handleShow();
      return;
    }

    setValue(eval(inputValue));
  };
  return (
    <>
      <div className="form-container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" value={value} placeholder="0" />
            </div>
            <div>
              <input type="button" value="AC" onClick={RemoveValue} />
              <input type="button" value="DE" onClick={Deletevalue} />
              <input type="button" value="." onClick={Performtask} />
              <input type="button" value="/" onClick={Performtask} />
            </div>
            <div>
              <input type="button" value="7" onClick={Performtask} />
              <input type="button" value="8" onClick={Performtask} />
              <input type="button" value="9" onClick={Performtask} />
              <input type="button" value="*" onClick={Performtask} />
            </div>
            <div>
              <input type="button" value="4" onClick={Performtask} />
              <input type="button" value="5" onClick={Performtask} />
              <input type="button" value="6" onClick={Performtask} />
              <input type="button" value="+" onClick={Performtask} />
            </div>
            <div>
              <input type="button" value="1" onClick={Performtask} />
              <input type="button" value="2" onClick={Performtask} />
              <input type="button" value="3" onClick={Performtask} />
              <input type="button" value="-" onClick={Performtask} />
            </div>
            <div>
              <input type="button" value="00" onClick={Performtask} />
              <input type="button" value="0" onClick={Performtask} />
              <input
                type="button"
                value="="
                className="equal"
                onClick={result}
              />
            </div>
          </form>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {value === "" && "Please give input"}
          {/^[0-9.]+$/.test(value) && "Please use an arithmetic operation"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
