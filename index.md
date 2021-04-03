<!DOCTYPE html>
<html>

 <head>
        
</head> 

<body>

<h2>Test firebase notif 5</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn on the light</button>

<img id="myImage" src="https://www.google.com/images/srpr/logo4w.png" style="width:100px">

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn off the light</button>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-analytics.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBraehDytmyUtTOdvL4W5qcceE9njqMdVQ",
    authDomain: "fir-notif-test.firebaseapp.com",
    projectId: "fir-notif-test",
    storageBucket: "fir-notif-test.appspot.com",
    messagingSenderId: "508125997354",
    appId: "1:508125997354:web:a95e81c801a935a3e9d653",
    measurementId: "G-EWNXXS9M50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  
  const messaging = firebase.messaging();
  
  // Add the public key generated from the console here.
messaging.getToken({vapidKey: "BMgqPg1XO-JyrhzY20T0uXCkr8LAC4dnPOj81REBdoVYFP1iKnemaLuNFDWAIVc-ByUltklouKLy-_2i3OHVf9Q"});

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BMgqPg1XO-JyrhzY20T0uXCkr8LAC4dnPOj81REBdoVYFP1iKnemaLuNFDWAIVc-ByUltklouKLy-_2i3OHVf9Q' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log('current token is: ',currentToken);
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
