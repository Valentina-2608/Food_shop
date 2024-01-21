/* Add orders to FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
  const db = getFirestore(app);

  

    
    
  
let card_buttons=document.querySelectorAll('.card_button')
for(let i=0; i<card_buttons.length; i++){
  card_buttons[i].addEventListener('click',addOrder);
}

/* Add orders */
function addOrder(event){
  let card_button=event.target;
  let card_button_parent = card_button.parentElement;
  let card_caption = card_button_parent.children[1].innerHTML;
  let card_price = card_button_parent.children[2].innerHTML;
  
  const dbRef = collection(db, 'Orders')
    const data = {
        caption: card_caption,
        price:card_price
      };
     addDoc(dbRef, data)
    .then(()=>{
      alert('Product was added successfully')
    })
    .catch((error)=>{
      alert('Error')
    });

}

