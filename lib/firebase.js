import firebase from 'firebase/app';
import 'firebase/database';

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    });
  }
};

const apiFunctions = {
  getPosts: async () =>
    firebase
      .database()
      .ref('/posts')
      .once('value')
      .then((snapshot) =>
        Object.entries(snapshot.val())
          .map(([, post]) => post)
          .sort((a, b) => (a.created_at < b.created_at ? 1 : -1)),
      ),
  getPostBySlug: async (slug) =>
    firebase
      .database()
      .ref(`/posts/${slug}`)
      .once('value')
      .then((snapshot) => snapshot.val()),
};

export const firebaseAPI = (functionName, ...functionArgs) => {
  initFirebase();

  return apiFunctions[functionName](...functionArgs);
};
