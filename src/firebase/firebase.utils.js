import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAqFYs5SvI7BqkshQc1O5d_qbg4-6ocQww',
  authDomain: 'crwn-db-bb366.firebaseapp.com',
  projectId: 'crwn-db-bb366',
  storageBucket: 'crwn-db-bb366.appspot.com',
  messagingSenderId: '1017125948449',
  appId: '1:1017125948449:web:779a20f6c3fa19c5cae760',
  measurementId: 'G-112858DXVM',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
