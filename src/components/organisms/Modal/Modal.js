import React from "react";
import PropTypes from "prop-types";
import { ModalWrapper } from "components/organisms/Modal/Modal.styles";
import { Button } from "components/atoms/Button/Button";

const redesigned = {
  width: "100%",
  "max-width": "120px",
  color: "#ffffff",
  "background-color": "#000",
  background: "linear-gradient(#f06 40%, #d91918)",
  "border-radius": "32px",
  margin: "0 0 40px 0",
  padding: "16px 40px",
  border: "2px solid #fff",
};

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <Button style={redesigned} onClick={handleClose}>
        Close
      </Button>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
