let firebaseConfig = {
  
  apiKey: "AIzaSyADcn724qOO6WkSTCgeRFzlikqZFjcbvnM",
  authDomain: "blogging-website-6db63.firebaseapp.com",
  projectId: "blogging-website-6db63",
  storageBucket: "blogging-website-6db63.appspot.com",
  messagingSenderId: "93825344983",
  appId: "1:93825344983:web:2c54806208ba3f07199792"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();