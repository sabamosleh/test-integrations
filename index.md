<!DOCTYPE html>
<html>

<head>
	<link rel="manifest" href="manifest.json" />
</head>

<body>

<h2>Test firebase notif 21</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firbeasejs/8.3.2/firebase-app.js"></script>
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


</script>

</body>
</html>
