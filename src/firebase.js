// Initialize Firebase
import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCbPbNUddviHyaEp0qPCBHowbvf8kXdWKM',
  authDomain: 'need-for-click.firebaseapp.com',
  databaseURL: 'https://need-for-click.firebaseio.com',
  projectId: 'need-for-click',
  storageBucket: 'need-for-click.appspot.com',
  messagingSenderId: '890208361077'
}

firebase.initializeApp(config)

const db = firebase.database()
// const regUser = db.ref('Users')
// const roomPlay = db.ref('Rooms')

export { db }
