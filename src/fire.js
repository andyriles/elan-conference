import firebase from 'firebase';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "login-66171.firebaseapp.com",
    databaseURL: "https://login-66171.firebaseio.com",
    projectId: "login-66171",
    storageBucket: "login-66171.appspot.com",
    messagingSenderId: "1084368324579",
    appId: "1:1084368324579:web:4185a6a96044ed775bc2d6"
  };

 const fire= firebase.initializeApp(firebaseConfig);

 export default fire;