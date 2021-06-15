import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcnRvqtK_Iww_R1euddbnIgtB3ZhbzKVE",
  authDomain: "invoice-gen-a6708.firebaseapp.com",
  projectId: "invoice-gen-a6708",
  storageBucket: "invoice-gen-a6708.appspot.com",
  messagingSenderId: "184929963480",
  appId: "1:184929963480:web:ceb61b5c096c81580876ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
