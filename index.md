<!DOCTYPE html>
<html>

<head>
	<link rel="manifest" href="manifest.json" />
</head>

<body>

<h2>Test firebase notif push-service 1</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>



<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js"></script>


<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBHc_y6p7yiEPKOroVBn37ez8GqttQq6iA",
    authDomain: "push-service-c34cf.firebaseapp.com",
    projectId: "push-service-c34cf",
    storageBucket: "push-service-c34cf.appspot.com",
    messagingSenderId: "984423015969",
    appId: "1:984423015969:web:8003019eafc54b1457e560"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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
