import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCeqdBvDcSUL-J7f5-Ter622VT7Jw2T3s4",
  authDomain: "notification-8e0cb.firebaseapp.com",
  projectId: "notification-8e0cb",
  storageBucket: "notification-8e0cb.appspot.com",
  messagingSenderId: "811542975705",
  appId: "1:811542975705:web:df863b8c8e690bcb741ac8",
  measurementId: "G-8S48W8RG9V"
};

function requestPermission() {
  console.log("Demande d'autorisation...");
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function (registration) {
        console.log('inscription réussie, scope is:', registration.scope);
      }).catch(function (err) {
        console.log('Échec de enregistrement du service worker, error:', err);
      });
  }
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Autorisation de notification accordée.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BObvQAh2-z7l40N42vCmT4iwLA5xPwrtcfrfScWnGXYT32RY2zvsuyJ0r52ebqIUs1qgEv9I05B6SbR1rItHDq8",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Impossible d'obtenir token ");
        }
      });
    } else {
      console.log("Ne pas avoir la permission !");
    }
  });
}
requestPermission();
function App() {
  return (
    <div className="App">
      notification Done
    </div>
  );
}

export default App;