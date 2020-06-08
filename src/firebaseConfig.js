import firebase from 'firebase'
import 'firebase/firestore'

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
// firebase.analytics()

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const settings = {}
db.settings(settings)

// firebase colections
const productsCollection = db.collection('products')
const brandsCollection = db.collection('brands')
const usersCollection = db.collection('users')

export {
  db,
  productsCollection,
  brandsCollection,
  usersCollection,
  auth,
  currentUser
}
