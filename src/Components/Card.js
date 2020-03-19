import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";

const ModalExample = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const NewButton = styled.button`
    margin: auto;
    width: 50%;
  `;

  return (
    <CardContainer>
      <NewButton color="danger" onClick={toggle}>
        CLICK HERE AND FIND OUT MORE ABOUT THIS PHOTO!
      </NewButton>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h1>{props.data.title}</h1>
        </ModalHeader>
        <ModalBody>
          <p>{props.data.explanation}</p>
          <p>Livability Statistics:</p>
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
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            BUY THIS PHOTO
          </Button>{" "}
          <Button color="warning" onClick={toggle}>
            RENT THIS ITEM
          </Button>
          <Button color="info" onClick={toggle}>
            ADD TO WISH LIST
          </Button>
        </ModalFooter>
      </Modal>
      <img src={props.data.url} />
    </CardContainer>
  );
};
export default ModalExample;
