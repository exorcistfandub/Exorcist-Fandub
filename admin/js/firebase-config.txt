// Importar las funciones necesarias de los SDKs que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYKPHNN8ocCPS1KyXU_4mAriDYbT8wXzM",
  authDomain: "exorcist-fandub.firebaseapp.com",
  projectId: "exorcist-fandub",
  storageBucket: "exorcist-fandub.firebasestorage.app",
  messagingSenderId: "628477504320",
  appId: "1:628477504320:web:b2d7aaf2a3a417982b28a5",
  measurementId: "G-548YWDFGFN"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
