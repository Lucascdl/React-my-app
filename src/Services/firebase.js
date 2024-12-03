// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, query, where, limit, writeBatch } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcB1dGMc-mXmwzTe1g9sUZucoYjKIAQgA",
  authDomain: "magtilstore.firebaseapp.com",
  projectId: "magtilstore",
  storageBucket: "magtilstore.firebasestorage.app",
  messagingSenderId: "1092303740143",
  appId: "1:1092303740143:web:13d76611e9b4b385510f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

const products = [
    { id: 1, title: "Camisetas", description: "Camiseta Básica Poliamida", price: 89.99, stock: "100", pictureUrl: "/assets/camiseta-rosa.jpg" },
    { id: 2, title: "Calças", description: "Calça Jeans com Elastano", price: 189.99, stock: "100", pictureUrl: "/assets/calca-jeans.jpg" },
    { id: 3, title: "Jaquetas", description: "Moletom Básico", price: 119.99, stock: "100", pictureUrl: "/assets/moletom-preto.jpg" },
    { id: 4, title: "Acessórios", description: "Boné SnapBack", price: 99.99, stock: "100", pictureUrl: "/assets/bone-marsala.jpg" },
    { id: 5, title: "Camisetas", description: "Camiseta Básica Canelada", price: 99.99, stock: "100", pictureUrl: "/assets/camiseta-canelada-azul.jpg" },
    { id: 6, title: "Shorts", description: "Shorts Linho", price: 119.99, stock: "100", pictureUrl: "/assets/short-linho-bege.png" },
    { id: 7, title: "Shorts", description: "Shorts Linho", price: 119.99, stock: "100", pictureUrl: "/assets/short-linho-preto.jpg" },
    { id: 8, title: "Acessórios", description: "Óculos Escuro", price: 119.99, stock: "100", pictureUrl: "/assets/oculos-madera.jpg" },
    { id: 9, title: "Jaquetas", description: "Jaqueta Jeans Austin", price: 179.99, stock: "100", pictureUrl: "/assets/jaqueta-austin.jpg" },
    { id: 10, title: "Calças", description: "Calça Alfaiataria", price: 199.99, stock: "100", pictureUrl: "/assets/calca-alfaiataria-preta.jpg" },
  ];

console.log("firebase");

//products.forEach(async(obj) => { 
    //const docRef = await addDoc(collection(db, "produtos"), obj);
     //console.log("Document written with ID: ", docRef.id); });