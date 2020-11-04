import firebase from 'firebase';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "login-66171.firebaseapp.com",
    databaseURL: "https://login-66171.firebaseio.com",
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: "login-66171.appspot.com",
    messagingSenderId: `${process.env.REACT_APP_MESSANGER_ID}`,
    appId: `${process.env.REACT_APP_ID}`
  };

 const fire= firebase.initializeApp(firebaseConfig);

 export default fire;