<!DOCTYPE html>
<html>

<head>
	<link rel="manifest" href="manifest.json" />
</head>

<body>

<h2>Test firebase notif 24</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

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


messaging.getToken({ vapidKey: 'BNRi_2SkrzOyFt5FB_YK9iRW-Urtw5AdVNBwECBLqI0LOy3IQkyG3pTNKUG37HwAMgwpYwZZ_ZOdhclZiTYonvo' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log('currentToken: ',currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

 

</script>

</body>
</html>
