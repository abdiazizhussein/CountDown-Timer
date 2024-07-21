import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLjTLyBowsIuIEoHKV1Eg9sfOq6QlSDOk",
    authDomain: "countdown-timer-62062.firebaseapp.com",
    projectId: "countdown-timer-62062",
    storageBucket: "countdown-timer-62062.appspot.com",
    messagingSenderId: "960668160311",
    appId: "1:960668160311:web:454cd155540e4a5d904ab2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
