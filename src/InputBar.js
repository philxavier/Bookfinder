import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function InputBar(props) {
  const [searchTerm, updateSearchTerm] = useState("");

  const updateState = e => {
    let term = e.target.value;
    updateSearchTerm(term);
  };

  return (
    <div style={{ marginTop: "5%", width: "100%" }}>
      <h1 style={{ color: "#a1a1a1", fontSize: "48px" }}> Book Finder </h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.getBooks(searchTerm);
        }}
      >
        <input
          onChange={e => {
            updateState(e);
          }}
          type="text"
          style={{ width: "300px", height: "35px" }}
        ></input>
        <Button color="teal">Search</Button>
      </form>
    </div>
  );
}
