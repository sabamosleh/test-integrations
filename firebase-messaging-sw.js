
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyCyOapqXjFcM0pLtJirh82OB9YW5oILiak",
    authDomain: "second-test-notif.firebaseapp.com",
    projectId: "second-test-notif",
    storageBucket: "second-test-notif.appspot.com",
    messagingSenderId: "22779366790",
    appId: "1:22779366790:web:001c57042c10b4ec07b007"
  };

   firebase.initializeApp(firebaseConfig);


  const messaging = firebase.messaging();
  
 

