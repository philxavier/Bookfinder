import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateList } from "./store/actions/Action";

function BookContainer(props) {
  const handleClick = link => {
    window.open(link, "_blank");
  };

  let {
    title,
    subtitle,
    authors,
    imageLinks,
    description
  } = props.bookInfo.volumeInfo;

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "20%"
      }}
    >
      <div
        style={{
          fontFamily: "Roboto",
          background: "white",
          width: "400px",
          height: "300px",
          boxShadow: "10px 10px 5px grey"
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "-40px"
          }}
        >
          <div style={{}}>
            <img
              src={
                props.bookInfo.volumeInfo.imageLinks
                  ? props.bookInfo.volumeInfo.imageLinks.smallThumbnail
                  : "https://other-projects-fsxl.s3.us-east-2.amazonaws.com/book-cover-placeholder.png"
              }
              alt=""
            ></img>
          </div>
          <div
            style={{
              paddingTop: "80px",
              textAlign: "initial",
              paddingLeft: "5%",
              color: "#a1a1a1",
              paddingRight: "5px",
              textOverflow: "ellipsis",
              width: "100%"
            }}
          >
            <h3 style={{ color: "#979797", textOverflow: "ellipsis" }}>
              {props.bookInfo.volumeInfo.title}
              {props.bookInfo.volumeInfo.subtitle
                ? ": " + props.bookInfo.volumeInfo.subtitle
                : null}
            </h3>
            {props.bookInfo.volumeInfo.authors
              ? `By ${props.bookInfo.volumeInfo.authors[0]} `
              : null}
            <br />
            {props.bookInfo.volumeInfo.publisher
              ? `Published By: ${props.bookInfo.volumeInfo.publisher}`
              : null}
            <div style={{ marginTop: "3%", width: "90%" }}>
              <div style={{ width: "100%" }}>
                <Button
                  onClick={() => {
                    handleClick(props.bookInfo.volumeInfo.canonicalVolumeLink);
                  }}
                  color="teal"
                >
                  See this book
                </Button>
              </div>
              <div style={{ width: "100%", marginTop: "5px" }}>
                <Button
                  onClick={() => {
                    let bookForSearchbar = {
                      title,
                      subtitle,
                      authors,
                      imageLinks,
                      description
                    };
                    props.updateList(bookForSearchbar);
                  }}
                  color="blue"
                >
                  Add to List{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateList: book => {
      dispatch(updateList(book));
    }
  };
};

export default connect(null, mapDispatchToProps)(BookContainer);
