import React, { Fragment, useState } from 'react';
import firebase from '../firebase';
import moment from 'moment';

const db = firebase.firestore();

const EditNote = ({ note }) => {
	const [ description, setDescription ] = useState(note.description);
	//console.log(note)

	let theDate = moment().startOf('hour').fromNow();

	function updateDescription(description) {
		// db
		// 	.collection('MyNotes')
		// 	.doc(note.id)
		// 	.update({
		// 		// MyText: description,
		// 		// MyDate: theDate,
        //         // MyTitle: description.substr(0, 30) + `..............    Last Updated ` + theDate
        //         MyText: "New Text",
		// 		MyDate: "theDate",
        //         MyTitle: "description.substr(0, 30) + `..............    Last Updated ` + theDate"
		// 	})
		// 	.then(function() {
		// 		console.log('Note successfully updated!');
		// 	})
		// 	.catch(function(error) {
		// 		console.error('Error updating document: ', error);
		// 	});
	}

	return (
		<Fragment>
			<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${note.id}`}>
				Edit
			</button>

			{/*
        id = id10
      */}
			<div
				class="modal fade"
				id={`id${note.id}`}
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true"
				onClick={() => setDescription(note.MyText)}
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Edit Note</h4>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								onClick={() => setDescription(note.MyText)}
							>
								&times;
							</button>
						</div>

						<div class="modal-body">
							<input
								type="text"
								className="form-control"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-warning"
								data-dismiss="modal"
								onClick={(e) => updateDescription(e)}
							>
								Edit
							</button>

							<button
								type="button"
								class="btn btn-danger"
								data-dismiss="modal"
								onClick={() => setDescription(note.MyText)}
							>
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
