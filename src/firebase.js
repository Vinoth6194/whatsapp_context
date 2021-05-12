import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDU25QlV7welgB7q54IhUqrrHFPzh3OC_4',
  authDomain: 'react-whatsapp-741fb.firebaseapp.com',
  projectId: 'react-whatsapp-741fb',
  storageBucket: 'react-whatsapp-741fb.appspot.com',
  messagingSenderId: '751632578765',
  appId: '1:751632578765:web:182615380fd3d40e855184',
  measurementId: 'G-WLYW4MY423',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
