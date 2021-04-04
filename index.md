<!DOCTYPE html>
<html>

<head>
	<link rel="manifest" href="manifest.json" />
</head>

<body>

<h2>Test firebase notif 300</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js"></script>


<script>

  // var firebaseConfig = {
  //   apiKey: "AIzaSyCyOapqXjFcM0pLtJirh82OB9YW5oILiak",
  //   authDomain: "second-test-notif.firebaseapp.com",
  //   projectId: "second-test-notif",
  //   storageBucket: "second-test-notif.appspot.com",
  //   messagingSenderId: "22779366790",
  //   appId: "1:22779366790:web:001c57042c10b4ec07b007"
  // };

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

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// messaging.getToken({ vapidKey: 'BNRi_2SkrzOyFt5FB_YK9iRW-Urtw5AdVNBwECBLqI0LOy3IQkyG3pTNKUG37HwAMgwpYwZZ_ZOdhclZiTYonvo' }).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     // ...
//     console.log('currentToken: ',currentToken);
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });

 messaging.getToken({ vapidKey: 'BJDiSathNY1GT_wFU9VxZPq_pahfb4eS7b4NfTnoNrNtEGHl5_K9r7ZjEgjdzyPZEcmrAZmURp001OnOYVhb1wU' }).then((currentToken) => {
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
