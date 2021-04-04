
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyBHc_y6p7yiEPKOroVBn37ez8GqttQq6iA",
    authDomain: "push-service-c34cf.firebaseapp.com",
    projectId: "push-service-c34cf",
    storageBucket: "push-service-c34cf.appspot.com",
    messagingSenderId: "984423015969",
    appId: "1:984423015969:web:8003019eafc54b1457e560"
  };


   firebase.initializeApp(firebaseConfig);


  const messaging = firebase.messaging();
  
  messaging.usePublicVapidKey('BAsfsFXemWpKc9s65GMH4eA5xZZVMe5wBdq0Ua4acAqmQYctJuo-T1SCbsxCdamEZetpf8-Jonn-qW6h0L9gUG4');
  messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  console.log('recieved paload.')
  // ...
});






  messaging.getToken({ vapidKey: 'BAsfsFXemWpKc9s65GMH4eA5xZZVMe5wBdq0Ua4acAqmQYctJuo-T1SCbsxCdamEZetpf8-Jonn-qW6h0L9gUG4' }).then((currentToken) => {
  if (currentToken) {
    
    console.log('currentToken is:',currentToken);
  } else {

    console.log('No registration token available. Request permission to generate one.');

  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);

});




 

