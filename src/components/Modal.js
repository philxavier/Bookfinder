import React, { useState } from "react";
import { Button, Header, Icon, Modal, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateModal } from "../store/actions/Action";
import BooksContainer from "../BooksContainer";

function ModalComponent(props) {
  console.log("this is props in moda", props);
  return (
    <Modal open={props.open} onClose={props.updateModal} basic size="small">
      <Header icon="book" content={props.currentBookTitle} />
      <Modal.Content>
        <p style={{ textAlign: "justify" }}>{props.description}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={props.updateModal} inverted>
          <Icon name="checkmark" /> Done!
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

const MapStateToProps = state => {
  return {
    open: state.open,
    description: state.description,
    currentBookTitle: state.currentBookTitle
  };
};

const MapDispatchToProps = dispatch => {
  return {
    updateModal: () => {
      dispatch(updateModal());
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(ModalComponent);
