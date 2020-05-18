import React, { Fragment, useEffect, useState } from 'react';
import EditNote from './EditNote';
import firebase from '../firebase';

const db = firebase.firestore();

const ListNotes = () => {
	const [ notes, setNotes ] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection('MyNotes').get();
			setNotes(data.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

	console.log('NOTES ', notes);

	//Delete note function
	// let testArray = []

	// db.collection("MyNotes").onSnapshot((querySnapshot)=> {
	//     querySnapshot.forEach((doc) => {
	//         testArray.push(doc.id)
	//         console.log(doc.id)
	//     })
	// })
	// console.log(testArray)

	const deleteNote = (id) => {
		db
			.collection('MyNotes')
			.doc(`${id}`)
			.delete()
			.then(function() {
				console.log('Note successfully deleted');
			})
			.catch(function(error) {
				console.error('Error removing Note: ', error);
			});
	};

	return (
		<Fragment>
			{' '}
			<table className="table mt-5 text-center">
				<thead>
					<tr>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{notes.map((note) => (
						<tr key={note.myTitle}>
							<td>{note.MyTitle}</td>
							<td>
								<EditNote note={note} />
							</td>
							<td>
								<button className="btn btn-danger" onClick={() => deleteNote(note.myDate)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Fragment>
	);
};

export default ListNotes;
