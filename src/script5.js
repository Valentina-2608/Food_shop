/* Show orders from FireStore*/

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


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
  let list_orders = document.querySelector('.list_orders');
  let show_orders = document.getElementById('show_orders');
  show_orders.addEventListener('click', showAllOrders);
  
  function showAllOrders(){
  onSnapshot(dbRef, docsSnap => {
    docsSnap.forEach(doc => {
      let new_order = document.createElement('div');
      new_order.classList.add('new_order')

      let new_order_caption = document.createElement('div');
      new_order_caption.classList.add('new_order_caption')
      new_order_caption.innerHTML = doc.data().caption;


      let new_order_price = document.createElement('div');
      new_order_price.classList.add('new_order_price')
      new_order_price.innerHTML = doc.data().price
      
      new_order.appendChild(new_order_caption);
      new_order.appendChild(new_order_price);


      list_orders.appendChild(new_order);

      
    })

  })
 
  }

