importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDmSszC_Dui8_hXnNP1ZKvtOVBy3JflH3A",
    authDomain: "culimix-3a7ba.firebaseapp.com",
    projectId: "culimix-3a7ba",
    storageBucket: "culimix-3a7ba.appspot.com",
    messagingSenderId: "7428614771",
    appId: "1:7428614771:web:71e41c24d733d23ab75806",
    measurementId: "G-J0D0DC6FEM"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body ? payload.data.body : '',
        icon: payload.data.icon ? payload.data.icon : ''
    });
});