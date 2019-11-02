import React, { useState } from "react";
import "./App.css";
import InputBar from "./InputBar";
import BooksContainer from "./BooksContainer";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Header, Icon } from "semantic-ui-react";
import SaveButton from "./components/SaveButton";
import { connect } from "react-redux";
import { SaveBooks } from "./store/actions/Action";
// import Sidebar from "react-sidebar";

const notFoundSegment = () => (
  <Header icon>
    <Icon name="search" />
    We don't have any books matching your search.
  </Header>
);

function Content(props) {
  //   const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);
  console.log("this is props", props);

  const getBooks = inputBook => {
    setLoading(true);
    if (!found) setFound(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + inputBook)
      .then(res => {
        if (res.data.totalItems === 0) {
          setLoading(false);
          props.saveBooks([]);
          setFound(false);
        } else {
          setLoading(false);
          props.saveBooks([res.data.items]);

          if (!found) {
            setFound(true);
          }
        }
      })
      .catch(err => {
        console.log(
          "Axios request not completed. The following error occurred",
          err
        );
      });
  };

  const startSpinner = () => {
    return (
      <div style={{ paddingTop: "5%" }}>
        <Loader
          type="Oval"
          color="#009C95"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <InputBar getBooks={getBooks} />
      <div style={styles.buttonContaier}>
        <SaveButton text={"Show my list"} />
      </div>
      <div className="App">
        {loading ? startSpinner() : null}
        {!found ? notFoundSegment() : null}
        {!loading && props.books.length ? (
          <BooksContainer books={props.books} />
        ) : null}
      </div>
    </div>
  );
}

const styles = {
  buttonContaier: {
    display: "flex",
    justifyContent: "center"
  }
};

const MapStateToProps = state => {
  return {
    books: state.books
  };
};

const MapDispatchToProps = dispatch => {
  return {
    saveBooks: books => {
      dispatch(SaveBooks(books));
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Content);
