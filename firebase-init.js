// ========================
// firebase-init.js
// ========================

// --- Firebase Configuration ---
// IMPORTANT: Replace with your actual Firebase project configuration!
// You can find this in your Firebase project settings > General tab > Your apps > SDK setup and configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU_Q2F0zIMTrIyh5nXERtU3fEtlSX4SH0",
    authDomain: "mystical-slate-448113-c6.firebaseapp.com",
    projectId: "mystical-slate-448113-c6",
    storageBucket: "mystical-slate-448113-c6.firebasestorage.app",
    messagingSenderId: "681914071632",
    appId: "1:681914071632:web:35d31b8d1dafb51d51ef55",
    measurementId: "G-HQSH8R6RF9"
};

// --- Global Firebase Variables ---
// These will be populated by the initialization logic below
// and accessed by the main script in code.html
let app;
let auth;
let db;

// --- Initialize Firebase ---
try {
    // Check if Firebase is already initialized (useful for hot reloading, though less critical here)
    if (!firebase.apps.length) {
        app = firebase.initializeApp(firebaseConfig);
    } else {
        app = firebase.app(); // Get the default app if already initialized
    }

    auth = firebase.auth();       // Get Auth instance
    db = firebase.firestore(); // Get Firestore instance

    console.log("Firebase initialized successfully in firebase-init.js.");

} catch (error) {
    console.error("Firebase initialization failed in firebase-init.js:", error);
    // You could display a persistent error message on the page here if needed
    // For example: document.body.innerHTML = '<div style="color: red; padding: 20px;">Critical Error: Firebase could not initialize. Check configuration and console.</div>';
} 
