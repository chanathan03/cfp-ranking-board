// Firebase web app config (safe to publish; access is controlled by firestore.rules).
export const firebaseConfig = {
  apiKey: "AIzaSyBiOtYECGHL1b0RGYHsZ14tjpK2kmUdC-0",
  authDomain: "cluck-cfp-rankings.firebaseapp.com",
  projectId: "cluck-cfp-rankings",
  storageBucket: "cluck-cfp-rankings.firebasestorage.app",
  messagingSenderId: "125373323063",
  appId: "1:125373323063:web:29867f20907ca2fc85acb2",
  measurementId: "G-9ZTJ7H8XS6"
};

// Google accounts allowed to delete submissions (must also be listed in firestore.rules).
export const adminEmails = ["jkchan3@gmail.com"];
