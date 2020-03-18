import React from "react";
import styled from "styled-components";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";

const { buttonLabel, className } = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
  <CardContainer>
    <button></button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>
        <h1></h1>
      </ModalHeader>
      <ModalBody>
        <p></p>
        <p></p>
        <div>
          <div className="text-center">H2o Level: 7.2%</div>
          <Progress color="success" value="7.2" />
          <div className="text-center">Vegitation Spread: 19.8%</div>
          <Progress color="warning" value="19.8" />
          <div className="text-center">Water Spread: 70.2%</div>
          <Progress color="success" value={70.2} />
          <div className="text-center">Gas Toxicity Levels: 44.7%</div>
          <Progress color="warning" value={44.7} />
          <div className="text-center">Ability to grow Vegetables: 100%</div>
          <Progress color="success" value="100" />
          <div className="text-center">Ability for mammal life: 3.1%</div>
          <Progress color="warning" value="3.1" />
        </div>
      </ModalBody>
    </Modal>
  </CardContainer>
);
