import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseui = require('firebaseui')

const config = {
  apiKey: `${process.env.VUE_APP_MONIZE_API_KEY}`,
  authDomain: `${process.env.VUE_APP_MONIZE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.VUE_APP_MONIZE_DATABASE_URL}`,
  projectId: `${process.env.VUE_APP_MONIZE_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_MONIZE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.VUE_APP_MONIZE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.VUE_APP_MONIZE_APP_ID}`,
  measurementId: `${process.env.VUE_APP_MONIZE_MEASUREMENT_ID}`
}

firebase.initializeApp(config)
firebase.analytics()

// firebase utils
const db = firebase.firestore()
const settings = {}
db.settings(settings)

// firebase colections
const productsCollection = db.collection('products')
const brandsCollection = db.collection('brands')

// firebase auth
const ui = new firebaseui.auth.AuthUI(firebase.auth())
const uiConfig = {
  signInSuccessUrl: '/admin',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export {
  db,
  productsCollection,
  brandsCollection,
  ui,
  uiConfig,
  getCurrentUser
}
