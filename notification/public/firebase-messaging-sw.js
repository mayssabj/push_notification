// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCeqdBvDcSUL-J7f5-Ter622VT7Jw2T3s4",
    authDomain: "notification-8e0cb.firebaseapp.com",
    projectId: "notification-8e0cb",
    storageBucket: "notification-8e0cb.appspot.com",
    messagingSenderId: "811542975705",
    appId: "1:811542975705:web:df863b8c8e690bcb741ac8",
    measurementId: "G-8S48W8RG9V"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});