import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDrYX3UQFYQwcBAurkHjY2aLP01NTb-eHI",
    authDomain: "halfwayassessmentpart2react.firebaseapp.com",
    databaseURL: "https://halfwayassessmentpart2react.firebaseio.com",
    projectId: "halfwayassessmentpart2react",
    storageBucket: "halfwayassessmentpart2react.appspot.com",
    messagingSenderId: "44494397487",
    appId: "1:44494397487:web:026ae121e5b58690fce6da"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;