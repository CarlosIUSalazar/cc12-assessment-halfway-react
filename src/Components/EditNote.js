import React, { Fragment, useState } from "react";

const EditNote = ({note}) => {
    const [description, setDescription] = useState(note.description);
    //console.log(note)

    // edit desctuption function
    // const updateDescription = async (e) => {
    //     e.preventDefault();  //i dont want it to refresh it i want to run my code
    //     try {
    //         const body = {description};
    //         const response = await fetch(`http://localhost:5000/todos/${todo.todo_id2}`, {
    //             method: "PUT",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         })
    //         window.location = "/";
    //         //console.log(response)
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${note.id}`}
      >
        Edit
      </button>

      {/*
        id = id10
      */}
    <div 
        class="modal" 
        id={`id${note.id}`} 
        onClick={() => setDescription(note.MyText)}
    >
      
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Note</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(note.MyText)}> 
                &times;
              </button>
            </div>

            <div class="modal-body">
                <input 
                    type="text" 
                    className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div class="modal-footer">
              <button 
                type="button" 
                class="btn btn-warning" 
                data-dismiss="modal"
                // onClick = {e => updateDescription(e)}
            >
                Edit
              </button>

              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(note.MyText)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default EditNote;
