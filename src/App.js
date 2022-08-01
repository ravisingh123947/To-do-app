import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { db } from "./firebase";

import firebase from "firebase/compat/app";

function App() {
  const [todo, settodo] = React.useState([]);
  const [input, setinput] = React.useState("");

  //when the app load we want that all data came and display on screen

  //  useEffect(()=>{
  //   db.collection('todos').onSnapshot(snapshot=>{
  //     settodo(snapshot.docs.map(doc=>doc._delegate._document.data.value.mapValue.fields.todo.stringValue));
  //    console.log(settodo)
  //   })

  //  },[]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        settodo(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addit = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="App">
      <h1>To-Do-App</h1>
      <div className="container">
        <div className="main-container">
          <form>
            <FormControl>
              <InputLabel>👉Write a todo</InputLabel>
              <Input
                value={input}
                onChange={(event) => setinput(event.target.value)}
              />
            </FormControl>
            <Button
              disabled={!input}
              type="submit"
              onClick={addit}
              variant="contained"
              color="primary"
            >
              Add todo
            </Button>
          </form>
          <ul>
            {todo.map((todo) => (
              <Todo todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
