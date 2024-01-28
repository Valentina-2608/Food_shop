/* Delete orders from FireStore*/

// Import the functions you need from the SDKs you need

import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getFirestore, collection, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


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
  const db = getFirestore();
  const dbRef = collection(db, 'Orders');

  let delete_orders=document.getElementById('delete_orders');
  delete_orders.addEventListener('click', function(){
    onSnapshot(dbRef, docsSnap => {
      docsSnap.forEach(doc => {
        deleteDoc(doc.ref)
      })
      
    })
    setTimeout(()=>{
      location.reload()
    },1000)
  })
