<!DOCTYPE html>
<html>

<head>
	<link rel="manifest" href="manifest.json" />
</head>

<body>

<h2>Test firebase notif 20</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js"></script>


<script>

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


messaging.usePublicVapidKey('BNRi_2SkrzOyFt5FB_YK9iRW-Urtw5AdVNBwECBLqI0LOy3IQkyG3pTNKUG37HwAMgwpYwZZ_ZOdhclZiTYonvo');
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




</script>

</body>
</html>
