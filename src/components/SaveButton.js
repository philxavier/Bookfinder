import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { showList } from "../store/actions/Action";

function SaveButton(props) {
  return (
    <Fragment>
      <Button
        onClick={() => {
          props.showList();
        }}
        color="blue"
        style={styles.buttonStyle}
      >
        {props.text}
      </Button>
    </Fragment>
  );
}

const styles = {
  buttonStyle: {
    margin: "15px",
    marginTop: "2%"
  }
};

const MapDispatchtoProps = dispatch => {
  return {
    showList: () => {
      dispatch(showList());
    }
  };
};

export default connect(
  null,
  MapDispatchtoProps
)(SaveButton);
