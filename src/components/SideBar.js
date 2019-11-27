import React from "react";
import Radium from "radium";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";
import {
  closeBar,
  updateModal,
  showDescription
} from "../store/actions/Action";
import { Button } from "semantic-ui-react";

const useStyles = makeStyles({
  list: {
    width: 350
  },
  fullList: {
    width: "auto"
  }
});

function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.closeBar(open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <h3
        style={{
          margin: "0",
          height: "80px",
          background: "teal",
          color: "white",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          flex: 1,
          alignSelf: "flex-start"
        }}
      >
        Your List of Books
      </h3>
      {props.list.map((book, ind) => (
        <div key={ind} style={styles.bookContainerInList}>
          <div style={{ width: "100%" }}>
            <h3 style>{book.title}</h3>
            {book.subtitle ? (
              <p style={{ fontStyle: "italic" }}>{book.subtitle}</p>
            ) : null}

            <img
              style={{ margin: "0 auto", display: "block" }}
              src={book.imageLinks.smallThumbnail}
              alt=""
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                marginTop: "5%"
              }}
            >
              <Button
                onClick={() => {
                  let description = book.description;
                  let title = book.title;
                  let bookInfo = { description: description, title: title };
                  props.showDescription(bookInfo);
                }}
                size="mini"
                color="blue"
              >
                Description
              </Button>
            </div>

            <div style={{ marginTop: "5%", marginBottom: "3%" }}>
              <span style={{ fontWeight: "bold" }}>Author(s): </span>
              {book.authors
                ? book.authors.map((author, ind) => {
                    return (
                      <p style={{ margin: "0" }} key={ind}>
                        {author}
                      </p>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}

const styles = {
  bookContainerInList: {
    borderBottom: "1px solid rgba(0,128,128, .2)",
    cursor: "pointer",
    padding: "7%",
    ":hover": {
      background: "rgb(219, 219, 219, 0.3)"
    }
  }
};

const MapStateToProps = state => {
  return {
    list: state.list,
    left: state.left
  };
};

const MapDispatchToProps = dispatch => {
  return {
    closeBar: side => {
      dispatch(closeBar(side));
    },
    updateModal: () => {
      dispatch(updateModal());
    },

    showDescription: bookInfo => {
      dispatch(showDescription(bookInfo));
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Radium(SwipeableTemporaryDrawer));
