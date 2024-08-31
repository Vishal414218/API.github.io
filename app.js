// Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyBLbl99rIGvogEwDT3zArABx4rwti-JGnk",
//     authDomain: "intagram-1f021.firebaseapp.com",
//     projectId: "intagram-1f021",
//     storageBucket: "intagram-1f021.appspot.com",
//     messagingSenderId: "109216769675",
//     appId: "1:109216769675:web:045640196499e5e20e968e",
//     measurementId: "G-Y2DQY2K8EJ"
// };


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLbl99rIGvogEwDT3zArABx4rwti-JGnk",
  authDomain: "intagram-1f021.firebaseapp.com",
  projectId: "intagram-1f021",
  storageBucket: "intagram-1f021.appspot.com",
  messagingSenderId: "109216769675",
  appId: "1:109216769675:web:045640196499e5e20e968e",
  measurementId: "G-Y2DQY2K8EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Authentication
const auth = firebase.auth();

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Login successful!');
            // Redirect to another page or perform other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
