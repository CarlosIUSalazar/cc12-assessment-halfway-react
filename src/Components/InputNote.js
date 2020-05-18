import React, { Fragment, useEffect, useState } from "react";
import EditNote from './EditNote'
import firebase from '../firebase'

const db = firebase.firestore()

const InputNote = () => {

    const [description, setDescription] = useState("")
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch   Speaks about CORS too
    //const onSubmitForm = async(e) => {  //e is for event
        //e.preventDefault(); //We dont want this to refresh (?)  46:38
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        db.collection("MyNotes").add({
            MyTitle: "Los Angeles",
            MyText: "CA",
            MyDate: "Today"
        })
        .then(function() {
            console.log("Document successfully written!");
            window.location = "/";
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        

    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Code Chrysalis Notes</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />  
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default InputNote;

{/* pon este en linea 29!!  <form className="d-flex mt-5" onSubmit={onSubmitForm}></form> */}