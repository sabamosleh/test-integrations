
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDD2Z6QszCzx2uAoAMIv1yW3juQq7qJgEY",
    authDomain: "push-service-928e8.firebaseapp.com",
    projectId: "push-service-928e8",
    storageBucket: "push-service-928e8.appspot.com",
    messagingSenderId: "249606103679",
    appId: "1:249606103679:web:1e23c81d4a877525fa154a"
  };


   firebase.initializeApp(firebaseConfig);


  const messaging = firebase.messaging();
  
  messaging.usePublicVapidKey('BJDiSathNY1GT_wFU9VxZPq_pahfb4eS7b4NfTnoNrNtEGHl5_K9r7ZjEgjdzyPZEcmrAZmURp001OnOYVhb1wU');
  messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  console.log('recieved paload.')
  // ...
});





messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});





  messaging.getToken({ vapidKey: 'BNRi_2SkrzOyFt5FB_YK9iRW-Urtw5AdVNBwECBLqI0LOy3IQkyG3pTNKUG37HwAMgwpYwZZ_ZOdhclZiTYonvo' }).then((currentToken) => {
  if (currentToken) {
    
    console.log('currentToken is:',currentToken);
  } else {

    console.log('No registration token available. Request permission to generate one.');

  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);

});


 

