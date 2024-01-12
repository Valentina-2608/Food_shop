/* Sign Out for Page Food */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"


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
  
let btn_sign_out =  document.getElementById('btn_sign_out');
btn_sign_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Sign out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})




