import Paper from "@mui/material/Paper";
import { TextField, Alert } from "@mui/material";
import React from "react";
import { useState } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, doc, addDoc, getDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

function CreateTweet() {
  const [content, setContent] = useState("");
  const { user } = useAuthContext();

  async function clickHandler(event) {
    event.preventDefault();

    const ref = collection(db, "tweets");
    const docRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(docRef);
    await addDoc(ref, {
      content: content,
      userName: userDoc.data().displayName,
      date: new Date().toISOString(),
      uid: user.uid,
    });

    setContent("");
  }

  function changeHandler(event) {
    const { value } = event.target;
    setContent(value);
  }
  return (
    <Paper
      style={{
        height: "13rem",
        width: "35rem",
        margin: "3rem 5rem 3rem 20rem",
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignSelf: "center",
      }}
    >
      <form>
        <TextField
          style={{
            height: "8rem",
            width: "35rem",
          }}
          onChange={changeHandler}
          placeholder="What you have in mind..."
          name="content"
          autoComplete="off"
          multiline
          value={content}
        />
        {content.length > 140 && (
          <Alert severity="error">
            The tweet can't contain more then 140 chars.
          </Alert>
        )}
        <div>
          <button onClick={clickHandler} style={{ width: "5rem" }}>
            Tweet
          </button>
        </div>
      </form>
    </Paper>
  );
}

export default CreateTweet;
