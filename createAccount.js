   // Import the functions you need from the SDKs you need

   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
   import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
//    import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

   const firebaseConfig = {
       apiKey: "AIzaSyAO9GmtY5gBB7tbER2fHaB7LunQ80eQ6Dg",
       authDomain: "escher-gang.firebaseapp.com",
       projectId: "escher-gang",
       storageBucket: "escher-gang.firebasestorage.app",
       messagingSenderId: "849333959217",
       appId: "1:849333959217:web:c291c9792196f6616df310"
   };


   // Initialize Firebase

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   // input fields


   const submit = document.getElementById('submit');

   submit.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.submitError').style.display = 'none';
        document.querySelector('.loginError').style.display = 'none';
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            localStorage.setItem("user", user.uid);
            window.location.href = "munda.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            document.querySelector('.submitError').style.display = 'block';
        });
   });

   login.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.submitError').style.display = 'none';
    document.querySelector('.loginError').style.display = 'none';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        localStorage.setItem("user", user.uid);
        window.location.href = "staging.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        document.querySelector('.loginError').style.display = 'block';
    });
});

const loginButton = document.querySelector('.login');
const createGangButton = document.querySelector('.createGang');

loginButton.addEventListener('click', () => {
    loginButton.style.display = 'none';
    createGangButton.style.display = 'none';
    document.getElementById('emailPassView').style.display = 'flex';
    document.getElementById('login').style.display = 'flex';
})
createGangButton.addEventListener('click', () => {
    loginButton.style.display = 'none';
    createGangButton.style.display = 'none';
    document.getElementById('emailPassView').style.display = 'flex';
    document.getElementById('submit').style.display = 'flex';
})