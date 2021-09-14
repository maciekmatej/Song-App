import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, setDoc, doc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBVI_TLocU4YKkvhEgXtG0mD77_mFs5Z1M',
  authDomain: 'music-c7eb1.firebaseapp.com',
  projectId: 'music-c7eb1',
  storageBucket: 'music-c7eb1.appspot.com',
  messagingSenderId: '497800940575',
  appId: '1:497800940575:web:1586aeb2a0e8223ae3592a',
};

const firebaseApp = initializeApp(firebaseConfig);
// export default firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp); // music-c7eb1.appspot.com

const usersCollection = collection(db, 'users');
const songsCollection = collection(db, 'songs');
const commentsCollection = collection(db, 'comments');
export {
  db,
  auth,
  usersCollection,
  setDoc,
  doc,
  storage,
  songsCollection,
  commentsCollection,
};
