// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAuDGw8zZiv6RprsFHrVuvqk_KeLkjhUPg",
  authDomain: "parkinglot-46ae7.firebaseapp.com",
  projectId: "parkinglot-46ae7",
  databaseURL: "https://parkinglot-46ae7-default-rtdb.firebaseio.com",
  storageBucket: "parkinglot-46ae7.appspot.com",
  messagingSenderId: "98195487465",
  appId: "1:98195487465:web:fa16a099833b6d9ecb8e78",
  measurementId: "G-KBL5RLREYJ",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function addPersonalData(apellido, dni, nombre) {
  try {
   
    const docRef = doc(db, "Personal", dni); 
    await setDoc(docRef, {
      Apellido_Personal: apellido,
      Dni_Personal: dni,
      Nombre_Personal: nombre,
    });

    console.log("Personal data successfully uploaded!");
  } catch (error) {
    console.error("Error uploading data: ", error);
  }
}


document
  .getElementById("submitPersonal")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get values from input fields
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;

    
    addPersonalData(apellido, dni, nombre);
  });
