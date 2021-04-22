import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
export const auth = firebase.auth();
