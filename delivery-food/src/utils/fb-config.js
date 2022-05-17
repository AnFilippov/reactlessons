import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBqfv5cENvQJxkLTPtQVIw9ajcW8ZwLGPA",
  authDomain: "delivery-food-22513.firebaseapp.com",
  databaseURL: "https://delivery-food-22513-default-rtdb.firebaseio.com",
  projectId: "delivery-food-22513",
  storageBucket: "delivery-food-22513.appspot.com",
  messagingSenderId: "823063778057",
  appId: "1:823063778057:web:16f50fce8141f4e03db9d8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;