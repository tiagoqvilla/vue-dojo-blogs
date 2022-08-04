import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAXn_ooTy-DuZnDzUgRKrqRPOc5J0c3RI',
  authDomain: 'vue-firebase-sites-dd387.firebaseapp.com',
  projectId: 'vue-firebase-sites-dd387',
  storageBucket: 'vue-firebase-sites-dd387.appspot.com',
  messagingSenderId: '986438429278',
  appId: '1:986438429278:web:6c26f9255f41dbc0bc62cf',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
