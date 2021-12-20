import Paper from "@mui/material/Paper";
import React from "react";

function TweetList({ userName, content, date }) {
  return (
    <>
      <Paper
        style={{
          width: "35rem",
          height: "140px",
          padding: "10px",
          marginBottom: "2rem",
          backgroundColor: "#626870",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#e677c1",
          }}
        >
          <h2 style={{ margin: "1rem" }}>{userName}</h2>
          <p style={{ margin: "1rem" }}>{date}</p>
        </div>
        <p style={{ margin: "1rem", color: "white" }}>{content}</p>
      </Paper>
    </>
  );
}

export default TweetList;
