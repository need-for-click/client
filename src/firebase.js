// Initialize Firebase
import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCbPbNUddviHyaEp0qPCBHowbvf8kXdWKM',
  authDomain: 'need-for-click.firebaseapp.com',
  databaseURL: 'https://need-for-click.firebaseio.com',
  projectId: 'need-for-click',
  storageBucket: 'need-for-click.appspot.com',
  messagingSenderId: '890208361077'
})

export const db = firebaseApp.database()
// const regUser = db.ref('Users')
// const roomPlay = db.ref('Rooms')
