/* Log In Page */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

  import { getAuth,  signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
	
  import { getDatabase, ref, update} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDyWCtytr0sYfytogNd4Yr7E5hiadZKrhs",
    authDomain: "food-shop-db11a.firebaseapp.com",
    databaseURL: "https://food-shop-db11a-default-rtdb.firebaseio.com",
    projectId: "food-shop-db11a",
    storageBucket: "food-shop-db11a.appspot.com",
    messagingSenderId: "213264317852",
    appId: "1:213264317852:web:2001806a0e5af781139c59"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();

  let form_log_in = document.getElementById('form_login');
  form_log_in.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;	
    // ...

    var loginData = new Date()
       update(ref(db, 'users/' + user.uid), {
      lastLogin: loginData
       })
      .then(() => {
      // Data saved successfully!
    alert('User logged successfully')
    window.location.replace("food_shop.html");
     })
      .catch((error) => {
     // The write failed...
      alert('Error')
    });
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  alert(errorMessage);
});


});



let btn_clear = document.getElementById('btn_clear');
btn_clear.addEventListener('click', function(){
let email = document.getElementById('user_email');
var password =  document.getElementById('user_password');
email.value = '';
password.value = ''
});