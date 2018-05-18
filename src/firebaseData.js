import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBdHiqSE_RjhyfCHSq9k1A8ZCxI_3oEW-8",
    authDomain: "user-data-react.firebaseapp.com",
    databaseURL: "https://user-data-react.firebaseio.com",
    projectId: "user-data-react",
    storageBucket: "user-data-react.appspot.com",
    messagingSenderId: "509104017215"
}
firebase.initializeApp(config)

export const database = firebase.database()