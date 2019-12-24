import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore=firebase.firestore();
const collection=firestore.collection('users');
console.log(collection);
