import React, { Fragment, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'
import ListNotes from './Components/ListNotes'
import InputNote from './Components/InputNote'

function App() {

  const [notes, setNotes] = React.useState([])

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore()
  //     const data = await db.collection("MyNotes").get()
  //     setNotes(data.docs.map(doc => doc.data()))
  //   }
  //   fetchData()
  // }, [])

  return (
    <Fragment>
    <div className="container">
      {/* <h1>Code Chrysalis Notes</h1> */}
      <InputNote />
      <ListNotes />
      </div>
    </Fragment>
  );
}

export default App;

  // <ul>
  //   {notes.map(note => (
  //     <li key={note.MyText}> {note.MyTitle} {note.MyText} {note.MyDate} </li>
  //   ))}
  // </ul> 