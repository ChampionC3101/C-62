 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApIZldwg_t3WFTp7mIxt6asQmgMmyfxj8",
  authDomain: "school-attendance-app-8065d.firebaseapp.com",
  databaseURL: "https://school-attendance-app-8065d-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-8065d",
  storageBucket: "school-attendance-app-8065d.appspot.com",
  messagingSenderId: "548693560228",
  appId: "1:548693560228:web:bc57f31d1837b3c1e84f31"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database();
 

  