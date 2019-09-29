import React from "react";
import BookContainer from "./BookContainer";

export default function BooksContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "70%"
        // maxWidth: "70%"
        // background: "red"
      }}
    >
      <div
        className="column-div"
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "auto auto",
        //   marginTop: "12%"
        // maxWidth: "10%%"
        // width: "100%"
        //}}
      >
        {props.books.map((ele, ind) => {
          return (
            <div style={{}}>
              <BookContainer key={ind} bookInfo={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
