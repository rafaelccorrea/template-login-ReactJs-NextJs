import firebase from "firebase/app"
import 'firebase/auth'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase;