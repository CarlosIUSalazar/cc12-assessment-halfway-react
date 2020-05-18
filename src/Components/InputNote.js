import React, { Fragment, useEffect, useState } from "react";
import EditNote from './EditNote'
import firebase from '../firebase'
import moment from 'moment'

const db = firebase.firestore()

const InputNote = () => {

    const [description, setDescription] = useState("")
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch   Speaks about CORS too
    //const onSubmitForm = async(e) => {  //e is for event
        //e.preventDefault(); //We dont want this to refresh (?)  46:38
    
    const onSubmitForm = (e) => {
        e.preventDefault();


        const body = description;   //ESTABA DESTRUCTURED PERO NO SE PORQUE?! 
        let theDate = moment().startOf('hour').fromNow(); 
        // let description = body;
        // let extractedTitle = description.substr(0, 29);
        // let titleAndDate = (extractedTitle + "...   " + theDate)
        //console.log("ExtractedTitle is", extractedTitle)
        //console.log("body is", body)
        //console.log("BODYYYYY", body)
        db.collection("MyNotes").add({
            MyTitle: (body.substr(0, 39)+ `........` + theDate),
            MyText: description,
            MyDate: theDate
        })
        .then(function() {
            console.log("Document successfully written!");
            window.location = "/";
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        

    }

    function deleteNotesOnTable(){
        db.collection("MyNotes")
        .get()
        .then(res => {
          res.forEach(element => {
            element.ref.delete();
          });
          setTimeout(function(){ window.location = "/" }, 1300);
          
        });
        //setTimeout(function(){ window.location.reload(true); }, 1);
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
            <>
            <button className="btn btn-danger" onClick={deleteNotesOnTable}>Delete All Notes From List</button>
        </>
        </Fragment>
    )
};

export default InputNote;

{/* pon este en linea 29!!  <form className="d-flex mt-5" onSubmit={onSubmitForm}></form> */}